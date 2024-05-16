import { Router } from "express";
import { indexuser,createuser,updateuser,deleteuser } from "../../Controller/UserController.js";

const router = Router();

router.get("/user", indexuser)
    
    .post("/creatuser", createuser)

    .put("/updateuser/{id}", updateuser)

    .delete("/deletuser/{id}", deleteuser);

export default router;
