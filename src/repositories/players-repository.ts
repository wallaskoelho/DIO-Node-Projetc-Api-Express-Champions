import { PlayerModel } from "../models/players-models";
import { StatisticsModel } from "../models/statistics-model";


  
  export const dataBase: PlayerModel[] = [
    {
      id: 1,
      name: "Messi",
      club: "Paris Saint-Germain",
      nationality: "Argentina",
      position: "Forward",
      statistics: {
        Overall: 93,
        Pace: 85,
        Shooting: 92,
        Passing: 91,
        Dribbling: 95,
        Defending: 38,
        Physical: 65,
      },
    },
    {
      id: 2,
      name: "Ronaldo",
      club: "Manchester United",
      nationality: "Portugal",
      position: "Forward",
      statistics: {
        Overall: 91,
        Pace: 87,
        Shooting: 93,
        Passing: 82,
        Dribbling: 88,
        Defending: 35,
        Physical: 75,
      },
    },
    {
      id: 3,
      name: "Neymar",
      club: "Paris Saint-Germain",
      nationality: "Brazil",
      position: "Forward",
      statistics: {
        Overall: 91,
        Pace: 91,
        Shooting: 85,
        Passing: 86,
        Dribbling: 94,
        Defending: 36,
        Physical: 63,
      },
    },
    {
      id: 4,
      name: "Mbappe",
      club: "Paris Saint-Germain",
      nationality: "France",
      position: "Forward",
      statistics: {
        Overall: 92,
        Pace: 97,
        Shooting: 88,
        Passing: 80,
        Dribbling: 92,
        Defending: 39,
        Physical: 77,
      },
    },
    {
      id: 5,
      name: "Lewandowski",
      club: "Barcelona",
      nationality: "Poland",
      position: "Forward",
      statistics: {
        Overall: 92,
        Pace: 78,
        Shooting: 94,
        Passing: 79,
        Dribbling: 86,
        Defending: 44,
        Physical: 82,
      },
    },
    {
      id: 6,
      name: "Salah",
      club: "Liverpool",
      nationality: "Egypt",
      position: "Forward",
      statistics: {
        Overall: 90,
        Pace: 90,
        Shooting: 87,
        Passing: 81,
        Dribbling: 90,
        Defending: 45,
        Physical: 75,
      },
    },
    {
      id: 7,
      name: "De Bruyne",
      club: "Manchester City",
      nationality: "Belgium",
      position: "Midfielder",
      statistics: {
        Overall: 91,
        Pace: 76,
        Shooting: 86,
        Passing: 93,
        Dribbling: 88,
        Defending: 64,
        Physical: 77,
      },
    },
    {
      id: 8,
      name: "Modric",
      club: "Real Madrid",
      nationality: "Croatia",
      position: "Midfielder",
      statistics: {
        Overall: 88,
        Pace: 74,
        Shooting: 76,
        Passing: 89,
        Dribbling: 90,
        Defending: 72,
        Physical: 66,
      },
    },
    {
      id: 9,
      name: "Kane",
      club: "Tottenham Hotspur",
      nationality: "England",
      position: "Forward",
      statistics: {
        Overall: 90,
        Pace: 70,
        Shooting: 93,
        Passing: 83,
        Dribbling: 82,
        Defending: 47,
        Physical: 83,
      },
    },
    {
      id: 10,
      name: "Benzema",
      club: "Real Madrid",
      nationality: "France",
      position: "Forward",
      statistics: {
        Overall: 91,
        Pace: 78,
        Shooting: 92,
        Passing: 83,
        Dribbling: 87,
        Defending: 39,
        Physical: 78,
      },
    },
    {
      id: 11,
      name: "Haaland",
      club: "Manchester City",
      nationality: "Norway",
      position: "Forward",
      statistics: {
        Overall: 88,
        Pace: 89,
        Shooting: 91,
        Passing: 65,
        Dribbling: 80,
        Defending: 45,
        Physical: 88,
      },
    },
    {
      id: 12,
      name: "Mane",
      club: "Bayern Munich",
      nationality: "Senegal",
      position: "Forward",
      statistics: {
        Overall: 89,
        Pace: 91,
        Shooting: 83,
        Passing: 80,
        Dribbling: 88,
        Defending: 44,
        Physical: 77,
      },
    },
    {
      id: 13,
      name: "Sterling",
      club: "Chelsea",
      nationality: "England",
      position: "Forward",
      statistics: {
        Overall: 88,
        Pace: 90,
        Shooting: 79,
        Passing: 78,
        Dribbling: 88,
        Defending: 45,
        Physical: 64,
      },
    },
    {
      id: 14,
      name: "Griezmann",
      club: "Atletico Madrid",
      nationality: "France",
      position: "Forward",
      statistics: {
        Overall: 85,
        Pace: 79,
        Shooting: 82,
        Passing: 84,
        Dribbling: 87,
        Defending: 58,
        Physical: 68,
      },
    },
    {
      id: 15,
      name: "Suarez",
      club: "Gremio",
      nationality: "Uruguay",
      position: "Forward",
      statistics: {
        Overall: 85,
        Pace: 70,
        Shooting: 87,
        Passing: 77,
        Dribbling: 81,
        Defending: 47,
        Physical: 80,
      },
    },
    {
      id: 16,
      name: "Cavani",
      club: "Valencia",
      nationality: "Uruguay",
      position: "Forward",
      statistics: {
        Overall: 84,
        Pace: 74,
        Shooting: 83,
        Passing: 72,
        Dribbling: 78,
        Defending: 54,
        Physical: 78,
      },
    },
    {
      id: 17,
      name: "Aguero",
      club: "Retired",
      nationality: "Argentina",
      position: "Forward",
      statistics: {
        Overall: 87,
        Pace: 78,
        Shooting: 88,
        Passing: 75,
        Dribbling: 87,
        Defending: 30,
        Physical: 70,
      },
    },
    {
      id: 18,
      name: "Ibrahimovic",
      club: "AC Milan",
      nationality: "Sweden",
      position: "Forward",
      statistics: {
        Overall: 84,
        Pace: 52,
        Shooting: 86,
        Passing: 75,
        Dribbling: 79,
        Defending: 35,
        Physical: 82,
      },
    },
    {
      id: 19,
      name: "Dybala",
      club: "AS Roma",
      nationality: "Argentina",
      position: "Forward",
      statistics: {
        Overall: 86,
        Pace: 83,
        Shooting: 83,
        Passing: 85,
        Dribbling: 89,
        Defending: 35,
        Physical: 64,
      },
    },
    {
      id: 20,
      name: "Lukaku",
      club: "Inter Milan",
      nationality: "Belgium",
      position: "Forward",
      statistics: {
        Overall: 86,
        Pace: 81,
        Shooting: 82,
        Passing: 70,
        Dribbling: 75,
        Defending: 38,
        Physical: 85,
      },
    },
  ];
  
  

  export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
  }

  export const findAllPlayerById = async (id: number): Promise<PlayerModel | undefined> =>{
    return dataBase.find((player) => player.id === id)
  }

  export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player);
  }


  export const deleteOnePlayer = async (id: number) => {
    const index = dataBase.findIndex((p) => p.id === id);

    if(index !== -1){
      dataBase.splice(index, 1);
      return true;
    }else{
      return false;
    }
    
  }

  export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> =>{
    const playerIndex = dataBase.findIndex(player => player.id === id);

    if(id !== -1){
      dataBase[playerIndex].statistics = statistics;
    }

    return dataBase[playerIndex];
  }