import { Router } from "express";
import * as PlayerControllers from "./controllers/players-controllers";
import *as ClubsControllers from "./controllers/clubs-controllers";

const router = Router();

router.get("/players", PlayerControllers.getPlayers);
router.post("/players", PlayerControllers.postPlayers);
router.delete("/player/:id", PlayerControllers.deletePlayer);
router.get("/player/:id", PlayerControllers.getPlayerById)
router.patch("/player/:id", PlayerControllers.updatePlayer);

router.get("/clubs", ClubsControllers.getClubs);

export default router;
