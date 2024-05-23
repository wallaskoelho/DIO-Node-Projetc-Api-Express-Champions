
import * as  HttpResponse from "../utils/http-helper";
import * as ClubsRepository from "../repositories/clubs-repository"




export const getClubServices = async () => {
    const data = await ClubsRepository.findAllClubs();
    const response = HttpResponse.ok(data);
    return response
};

