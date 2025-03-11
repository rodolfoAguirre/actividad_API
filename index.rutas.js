import { Router } from "express";
import { marco, ping, raiz } from "../controladores/index.controlers.js";

const router = Router();

router.get("/", raiz);
router.get("/marco", marco);
router.get("/polo", ping);

export default router;

