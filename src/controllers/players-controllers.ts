import { Request, Response } from "express";
import * as services from "../services/players-services";
import { noContent } from "../utils/http-helper";
import { PlayerModel } from "../models/players-models";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayers =  async (req: Request, res: Response) => {

    const HttpResponse = await services.getPlayerServices();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};


export const getPlayerById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const HttpResponse = await services.getPlayerByIdServices(id);
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
};


export const postPlayers = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const HttpResponse = await services.createPlayerServices(bodyValue);
    if(HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    }else{
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
    
}


export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await services.deletePlayerServices(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
     const id = parseInt(req.params.id);
     const bodyValue: StatisticsModel = req.body
     const HttpResponse = await services.updatePlayerServices(id, bodyValue);
     res.status(HttpResponse.statusCode).json(HttpResponse.body)
}