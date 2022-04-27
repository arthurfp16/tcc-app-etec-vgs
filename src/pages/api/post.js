import { prisma } from '../../prisma.js'

async function handler(req, res) {
    try {
        if(req.method == 'GET') {
            const dbPostData = await prisma.posts.findMany()
            res.status(200).json(dbPostData)
        }else if (req.method == 'POST'){
            console.log(req.body)
            res.status(200).json('ok')
        }
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, mensage: err.mensage })
    }
}

export default handler
