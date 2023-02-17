import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Companie = sequelize.define('companies', {
    id: {
        type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    RUC:{
        type: DataTypes.STRING,
    },
    NOMBRE:{
        type: DataTypes.STRING,
    },
    SITUACION_LEGAL:{
        type: DataTypes.STRING,
    },
    FECHA_CONSTITUCION:{
        type: DataTypes.STRING,
    },
     TIPO:{
        type: DataTypes.STRING,
    },
    PAIS:{
        type: DataTypes.STRING,
    },
    REGION:{
        type: DataTypes.STRING,
    },
    PROVINCIA:{
        type: DataTypes.STRING,
    },
    CANTON:{
        type: DataTypes.STRING,
    },
    CIUDAD:{
        type: DataTypes.STRING,
    },
    CALLE:{
        type: DataTypes.STRING,
    },
    NUMERO:{
        type: DataTypes.STRING,
    },
    INTERSECCION:{
        type: DataTypes.STRING,
    },
    BARRIO:{
        type: DataTypes.STRING,
    },
    REPRESENTANTE:{
        type: DataTypes.STRING,
    },
    CARGO:{
        type: DataTypes.STRING,
    },
    CAPITAL_SUSCRITO:{
        type: DataTypes.STRING,
    },
    CIIU_NIVEL_1:{
        type: DataTypes.STRING,
    },
    CIIU_NIVEL_6:{
        type: DataTypes.STRING,
        },
    ULTIMO_BALANCE:{
        type: DataTypes.STRING,
    },
    
     },{
    timestamps: false,
     });
     
Companie.sync();
