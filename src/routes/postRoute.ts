import express  from "express";
import Addpost from "../conrollers/postControllers";


const postRoutes = express.Router();



//---------ADD POST---------------//

postRoutes.post('/addpost',Addpost);


export default postRoutes