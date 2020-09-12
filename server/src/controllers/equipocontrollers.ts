import {Request,Response} from 'express';
import pool from '../database';


class EquipoControllers{
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO equipos set ?',[req.body]);
        res.json({text:'Equipo guardado'});
    }
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM equipos', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getone(req:Request,res:Response){   
        
    }

    public async delete(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM equipos WHERE id = ?',[id]);
        res.json({text:'equipo borrado'})
    }
    public async update(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE equipos set ? WHERE id= ?',[req.body,id])
        res.json({text:'actualizado'})
    }
}
export const equipocontrollers=new EquipoControllers();