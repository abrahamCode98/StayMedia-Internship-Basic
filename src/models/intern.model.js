import mongoose from "mongoose";

const internSchema = new mongoose.Schema({
    firstName:{ type: String, required: true },
    lastName:{ type: String, required: true },
    email:{ type: String, required: true, unique: true },
    phone:{ type: String, required: true },
    department:{ type: String, required: true },
    supervisor:{ type: String, required: true },
    status:{ type: String, required: true },
    startDate:{ type: Date, required: true },
    endDate:{ type: Date, required: true },
    skills:[{ type: String, required: true }],
}, { timestamps: true });

const Intern = mongoose.model("Intern", internSchema);

export default Intern;