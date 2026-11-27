import {welcomeMessage, getAllInterns, AddInternData} from "../services/intern.service.js";


export const welcomeMessageController = (req, res) => {
    const message = welcomeMessage(); 

    res.status(200).json({
        success: true,
        message: message
    });
};

export const getAllInternscontroller = async (req, res) => {
    try {
         const retrievedInterns = await getAllInterns();

         res.status(200).json({
            success: true,
            message: "Intern records retrieved successfully",
            InternsRecord: retrievedInterns
         })
    }catch(error) {
        console.error(error.message)

        const statusCode = error.message === "No Intern Found" ? 404 : 500
        res.status(statusCode).json({
            success: false,
            message: error.message || "Error with the server"
        })
    }
};

export const addInternDataController = async(req, res) => {
    const {firstName, lastName, email, phone, role, department, supervisor, status, startDate, endDate, skills} = req.body;
    try {
        const internData = await AddInternData({
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

        res.status(201).json({
            success: true,
            message: "Intern data added successfully",
            InternData: internData
        })


    } catch(error) {
        console.error(error.message)

        const statusCode = error.message === "Intern with this email already exists" ? 409 : 500
        res.status(statusCode).json({
            success: false,
            message: error.message || "Error with the server"
        })
    }
};