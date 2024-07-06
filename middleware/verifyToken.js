import jwt from 'jsonwebtoken'

export const vertifyToken = async (req, res, next) => {

    let { token } = req.headers;
    jwt.verify(token, 'mynameisAya', async (err, decoded) => {
        if (err) return res.status(401).json({ message: 'invlaid token', err })
            req.user=decoded;
        next()

    })
}