import express from 'express';
import { creatEmployee, editEmpolyee, getEmployeeDetail, getEmployeeDetailById, } from '../Controllers/empController.js';


const router = express.Router();

router.post("/create",creatEmployee)
router.get("/emp",getEmployeeDetail)
 router.get("/emp/:id",getEmployeeDetailById )
 router.put("/update/:id",editEmpolyee)

export default router;