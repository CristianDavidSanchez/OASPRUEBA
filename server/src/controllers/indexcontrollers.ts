import {Request,Response} from 'express';

class IndexControllers{
    index(req:Request,res:Response){ 
        res.send('INDEX')
    }
}
export const indexcontrollers=new IndexControllers();