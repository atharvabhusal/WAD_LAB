const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//Due to GitGuardian warning of mongodb uri getting exposed, I have commented the mongoose.connect section
//and removed the string connection part.

// mongoose.connect('Insert connection string with appropriated password here')
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     }
//     );

const EmployeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    salary: Number
});

const Employee = mongoose.model('Employee', EmployeeSchema);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Create API - POST

app.post('/add-employee', async (req, res) => {

    try {
        const { name, department, salary } = req.body;

        const newEmployee = new Employee({ name, department, salary });

        await newEmployee.save();

        res.status(200).json({ message: "Employee added successfully!" });

    } catch (err) {

        res.status(500).json({ err: "Error adding employee..." });

    }

});

//Read API - GET

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();

        res.send(employees);
    }
    catch (err) {

        res.status(500).json({ err: "Error retrieving employee data..." })
    }
})

//Get employees as per department

app.get('/employees/department/:dept', async (req, res) => {
    try {

        const employees = await Employee.find({ department: req.params.dept });

        res.status(200).json(employees);

    } catch (err) {

        res.status(500).json({ err: "Error retrieving employee data..." });

    }
});


//Update API - PUT

app.put('/update-employee/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const { name, department, salary } = req.body;

        const employee = await Employee.findByIdAndUpdate(id, { name, department, salary }, { new: true });

        res.status(200).json({ message: "Employee Updated Successfully", employee });

    } catch (err) {

        res.status(500).json({ err: "Error updating employee details" });
    }
});

//Delete API - DELETE

//Delete based on ID
app.delete('/delete-employee/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const deletedEmployee = await Employee.findByIdAndDelete(id);

        res.status(200).json({ message: "Employee deleted successfully" });

    }
    catch (err) {

        res.status(500).json({ err: "Error in deleting employee details" });

    }

});

//Delete based on salary values
app.delete('/delete-on-salary/:amount', async(req, res) => {
    try{
        const amount = parseInt(req.params.amount);

        const delEmployees = await Employee.deleteMany({salary: {$lt: amount}});

        res.status(200).json({message: `${delEmployees.deletedCount} employees deleted with salary less than ${amount}`});

    } catch(err){

        res.status(500).json({err: "Error deleting employees..."})

    }
})
