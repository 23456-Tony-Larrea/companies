import { Companie } from "../models/Companie.js";

export const createCompaniesEcuador = async (req,res)=>{
    const {RUC,NOMBRE,SITUACION_LEGAL, FECHA_CONSTITUCION,TIPO,
    PAIS,REGION,PROVINCIA,CANTON,CIUDAD,CALLE,NUMERO,INTERSECCION,
    BARRIO,REPRESENTANTE,CARGO,CAPITAL_SUSCRITO,CIIU_NIVEL_1,
    CIIU_NIVEL_6,ULTIMO_BALANCE
    }=req.body
    try{
        let newCompanies=await Companie.create(
            {
                RUC,
                NOMBRE,
                SITUACION_LEGAL,
                FECHA_CONSTITUCION,
                TIPO,
                PAIS,
                REGION,
                PROVINCIA,
                CANTON,
                CIUDAD,
                CALLE,
                NUMERO,
                INTERSECCION,
                BARRIO,
                REPRESENTANTE,
                CARGO,
                CAPITAL_SUSCRITO,
                CIIU_NIVEL_1,
                CIIU_NIVEL_6,
                ULTIMO_BALANCE
            },
        )
        if(newCompanies){
            return res.json({
                message:'New Company created',
                data:newCompanies
            })
        }
    } catch(error){
        res.status(400).json({
            message: error.message,
          });
    }
    }
export const getCompaniesEcuador = async (req,res)=>{
    try{
        const companies = await Companie.findAll();
        res.json({
            data:companies
        })
    }catch(error){
        res.status(400).json({
            message: error.message,
          });
    }
}