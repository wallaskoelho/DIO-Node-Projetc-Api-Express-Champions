
import { PlayerModel } from "../models/players-models";
import { StatisticsModel } from "../models/statistics-model";
import * as playerRepository from "../repositories/players-repository";
import * as  HttpResponse from "../utils/http-helper";

export const getPlayerServices = async () => {

    const data =  await playerRepository.findAllPlayers();   
    
    let response = null;
    
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent();
    }
    
    
    return response;
}


export const getPlayerByIdServices = async (id: number) => {

    const data = await playerRepository.findAllPlayerById(id)
    
    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }

    return response;
}

export const createPlayerServices = async (player: PlayerModel) => {

    let response = null

    if(Object.keys(player).length !== 0){
       await playerRepository.insertPlayer(player);
       response = await HttpResponse.created();
    }else{
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const deletePlayerServices = async (id: number) => {
    let response = null;
    const isDeleted = await playerRepository.deleteOnePlayer(id);

    if(isDeleted){
        response = await HttpResponse.ok({message: "Player deleted"})
    }else{
        response = await HttpResponse.badRequest()
    }
    
    return response;
}

export const updatePlayerServices = async (id: number, statistics: StatisticsModel) => {
    let response = null
    const data = await playerRepository.findAndModifyPlayer(id, statistics);

    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest()
    }else{
    response = await HttpResponse.ok({message: "Player Update", data})
    }
    
    return response;
}