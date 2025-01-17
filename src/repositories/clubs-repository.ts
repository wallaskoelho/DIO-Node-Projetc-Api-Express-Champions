import { ClubsModel } from "../models/clubs-model";
import fs from "fs/promises";

export const dataBase: ClubsModel[] = [
    {
      id: 1,
      name: "Real Madrid"
    },
    {
      id: 2,
      name: "Barcelona"
    },
    {
      id: 3,
      name: "Manchester United"
    },
    {
      id: 4,
      name: "Liverpool"
    },
    {
      id: 5,
      name: "Bayern Munich"
    },
    {
      id: 6,
      name: "Paris Saint-Germain"
    },
    {
      id: 7,
      name: "Juventus"
    },
    {
      id: 8,
      name: "Chelsea"
    },
    {
      id: 9,
      name: "Manchester City"
    },
    {
      id: 10,
      name: "Atletico Madrid"
    },
    {
      id: 11,
      name: "Inter Milan"
    },
    {
      id: 12,
      name: "AC Milan"
    },
    {
      id: 13,
      name: "Tottenham Hotspur"
    },
    {
      id: 14,
      name: "Arsenal"
    },
    {
      id: 15,
      name: "Borussia Dortmund"
    },
    {
      id: 16,
      name: "Napoli"
    },
    {
      id: 17,
      name: "Ajax"
    },
    {
      id: 18,
      name: "RB Leipzig"
    },
    {
      id: 19,
      name: "Porto"
    },
    {
      id: 20,
      name: "Benfica"
    }
  ];
  

export const findAllClubs = async ():Promise<ClubsModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs:ClubsModel[] = await JSON.parse(data);
    return clubs;
}