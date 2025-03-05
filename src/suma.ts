import express, { Request, Response } from 'express';
import { postSuma, getSumas } from './suma_sql';

const router = express.Router();
router.post('/suma', async (req: Request, res: Response) => {

    try {
        const { a, b } = req.body;

        if (!a || !b)
            throw new Error('Faltan datos o son incorrectos')
        const suma = await postSuma(Number(a), Number(b))
        console.log(suma)
        res.status(200).send({ resultado: suma })

    } catch (error) {
        res.status(400).send({ message: error })
    }
});

router.get('/', async(req:Request, res:Response) => {
    res.status(200).send({sumas : await getSumas()})
});

export { router as routerOperacion };