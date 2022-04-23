import { prisma } from '../../prisma.js'

async function handler(req, res) {
    try {
        if(req.method == 'GET') {
            const dbPostData = await prisma.posts.findMany()
            res.status(200).json(dbPostData)
            console.log(req)
        }
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, mensage: err.mensage })
    }
}

export default handler
