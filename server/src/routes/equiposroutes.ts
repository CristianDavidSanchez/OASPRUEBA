import {Router} from  'express';
import {equipocontrollers} from '../controllers/equipocontrollers'


class Equipos{

   public router:Router=Router();

   constructor(){
       this.config();

   }
   config():void{
       this.router.get('/',equipocontrollers.list);
       this.router.get('/:id',equipocontrollers.getone);
       this.router.post('/',equipocontrollers.create);
       this.router.put('/:id',equipocontrollers.update);
       this.router.delete('/:id',equipocontrollers.delete);
       
   }
}

const equipos=new Equipos();
export default equipos.router;