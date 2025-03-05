import executeQuery from './context/db/postgresdb.connector';
export async function postSuma(numA: number, numB: number): Promise<Number> {


    try {
        const result = await executeQuery(
            `INSERT into "sumas" (A, B, resultado)
             VALUES (${numA}, ${numB}, ${numA + numB})
             RETURNING *`
        )

        return result[0].resultado;
    } catch (error) {
        return error.message;
    }
}

export async function getSumas(): Promise<[]> {

    try {
        const result = await executeQuery(
            `SELECT resultado FROM "sumas"`
        )
        return result;
    } catch (error) {
        return error.message;
    }
}