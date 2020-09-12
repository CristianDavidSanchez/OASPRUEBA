import {Router} from  'express';
import { indexcontrollers } from '../controllers/indexcontrollers';

class IndexRoutes{

   public router:Router=Router();

   constructor(){
       this.config();

   }
   config():void{
       this.router.get('/',indexcontrollers.index);
   }
}

const indexroutes=new IndexRoutes();
export default indexroutes.router;