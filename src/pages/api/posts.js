import { prisma } from '../../prisma.js'

async function handler(req, res) {
    try {
        const dbres = await prisma.cafe.findMany()
        res.status(200).json(dbres)
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, mensage: err.mensage })
    }
}

export default handler
