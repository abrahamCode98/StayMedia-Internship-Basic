import Intern from "../models/intern.model.js";


export const welcomeMessage = () => {
    const message = "Welcome to STAY MEDIA Backend Development"

    return message;
};

export const getAllInterns = async() => {
    const existingInterns =  await Intern.find();

    if(!existingInterns) {
        throw new Error("No interns found")    
    };

    return existingInterns;
};

export const AddInternData = async ({
  firstName,
  lastName,
  email,
  phone,
  role,
  department,
  supervisor,
  status,
  startDate,
  endDate,
  skills,
}) => {
  const existingIntern = await Intern.findOne({ email });

  if (existingIntern) {
    throw new Error("Intern with this email already exists");
  }

  const newInternData = new Intern({
    firstName,
    lastName,
    email,
    phone,
    role,
    department,
    supervisor,
    status,
    startDate,
    endDate,
    skills,
});

  await newInternData.save();

  return newInternData;
};
