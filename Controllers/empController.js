import Employee from "../Models/empSchema.js";

export const creatEmployee = async(req,res)=>{
    try {

        const newEmployee = new Employee(req.body)
        await newEmployee.save()
        res.status(200)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error in  create method"})
        
    }
};

export const getEmployeeDetail = async (req, res)=>{
    try {
        const empolyee = await Employee.find();
        res.status(200).json({message: "data fetched successfully ",data: empolyee});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error in getall method"});
        
    }
};

export const getEmployeeDetailById = async (req,res)=>{
    try {
        const empId = req.params.id;
        const employee = await Employee.findById(empId)
        if(!employee){
            return res.status(404).send("Employee Not Found");
        }
        res.status(200).json({message: "data fetched successfully",data:employee})
    } catch (error) {

        console.log(error);
        res.status(500).json({messaage: "Internal Server Error in getbyId method"})
        
    }
};

export const editEmpolyee = async (req,res)=>{

    try {
        const empId = req.params.id;
        const {Emp_FirstName,Emp_Last_name ,Emp_Email,Emp_Desination} = req.body
        const result = await Employee.updateOne({_id:empId},{Emp_FirstName,Emp_Last_name ,Emp_Email,Emp_Desination })
        console.log(result);
        if(result.matcthedCount === 0){
            return res.status(404).send("Employee detail not found");
        }
        const updateemp = await Employee.find({_id:empId})
        res.status(200).json({message: "Employee updated successfully ",data: updateemp});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({messaage: "Internal Server Error in put method"})
        
    }
    
}