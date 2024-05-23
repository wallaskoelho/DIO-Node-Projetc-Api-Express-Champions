import * as ClubsServices from "../services/clubs-services";

import { Request, Response } from "express";


export const getClubs = async (req: Request, res: Response) => {
    const response = await ClubsServices.getClubServices();
    res.status(response.statusCode).json(response.body);
};