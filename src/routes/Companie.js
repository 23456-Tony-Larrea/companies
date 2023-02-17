import { Router } from "express";
import {createCompaniesEcuador,getCompaniesEcuador} from '../controllers/Companie.js'

const router = Router();

router.post('/companiesEcuador',createCompaniesEcuador);
router.get('/companiesEcuador',getCompaniesEcuador);
export default router;