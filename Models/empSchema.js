import mongoose from "mongoose";


const empSchema = mongoose.Schema({
    Emp_FirstName: String,
    Emp_Last_name: String,
    Emp_Email: String,
    Emp_Desination: String,
});

const Employee = mongoose.model("Employee", empSchema);

export default Employee;