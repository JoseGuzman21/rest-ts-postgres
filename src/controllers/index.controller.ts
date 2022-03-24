import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: 'All ok' })
    } catch (e: any) {
        return res.status(400).json({ message: e.message })
    }
}