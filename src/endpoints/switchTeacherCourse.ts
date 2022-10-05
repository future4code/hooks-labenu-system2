import { Request, Response } from "express";

export const endpointName = async (req: Request, res: Response): Promise<void>  => {
    let errorCode = 400
    try {
        // for every info coming from/going to sql use
        // await connection (raw or query builder) 		
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}