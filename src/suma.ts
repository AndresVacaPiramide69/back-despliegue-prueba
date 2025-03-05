import express, { Request, Response } from 'express';

const router = express.Router();
const sumas = [];
router.post('/suma', async (req: Request, res: Response) => {

    try {
        const { a, b } = req.body;

        if (!a || !b || isNaN(a) || isNaN(b))
            throw new Error('Faltan datos o son incorrectos')
        const suma = parseInt(a + b);
        sumas.push(suma);
        res.status(200).send({ resultado: suma })

    } catch (error) {
        res.status(400).send({ message: error })
    }
});

router.get('/', async(req:Request, res:Response) => {
    res.status(200).send({sumas : sumas})
});

export { router as routerOperacion };