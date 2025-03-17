import connectdb from "@/libs/connectdb";
import Topic from "@/models/taskModel";

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            await connectdb();

            const { newtitle, newdescription } = await req.body; // Correct parsing for Next.js 13+
            const { id } = req.query;
            console.log(id);

            if (!newtitle || !newdescription) {
                return res.status(400).json({ message: 'Please provide all fields' });
            }

            const updatedTopic = await Topic.findByIdAndUpdate(
                id,
                { title: newtitle, description: newdescription },
                { new: true } // Return updated document
            );

            if (!updatedTopic) {
                return res.status(404).json({ message: 'Topic not found' });
            }

            return res.status(200).json({ message: 'Topic updated successfully', updatedTopic });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
