import Topic from "@/models/taskModel.js";
import connectdb from "@/libs/connectdb.js";

export default async function handler(req, res) {
    await connectdb();

    if (req.method === 'POST') {
        try {
            const { title, description } = req.body; // Corrected this line

            if (!title || !description) {
                return res.status(400).json({ message: 'Please provide all fields' });
            }

            await Topic.create({ title, description });
            return res.status(201).json({ message: 'Topic created successfully' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    if (req.method === 'GET') {
        const topics = await Topic.find();
        return res.status(200).json({ topics });
    }
    if(req.method === 'DELETE') {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: 'Please provide all fields' });
        }
        else {
            await Topic.findByIdAndDelete(id);
            return res.status(200).json({ message: 'Topic deleted successfully' });
        }
        
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
