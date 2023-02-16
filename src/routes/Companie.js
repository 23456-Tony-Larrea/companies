import { Router } from "express";
import {createCompaniesEcuador} from '../controllers/Companie.js'

const router = Router();

router.post('/companiesEcuador',createCompaniesEcuador);
export default router;