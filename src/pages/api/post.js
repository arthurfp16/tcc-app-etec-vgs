import { prisma } from '../../prisma.js'

async function handler(req, res) {
    try {
        if (req.method == 'GET') {
            const dbPostData = await prisma.posts.findMany()
            res.status(200).json(dbPostData)
        } else if (req.method == 'POST') {
            const FormData = JSON.parse(req.body)
            console.log(FormData)
           await prisma.posts.create({
                data: {
                    title: FormData.title,
                    category: 'none',
                    author: FormData.author,
                    text: FormData.text
                }
            })

            res.status(200).json({ statusCode: 200, mensage: 'ok' })
        }
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, mensage: err.mensage })
    }
}

export default handler
