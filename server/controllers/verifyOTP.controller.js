const userModal = require("../models/userModel.js")

const VerifyOTP = async (req, res) => {
    const emailExists = await userModal.exists({ username: req.body.username })
    
    const userInfo = await userModal.findById(emailExists._id)
    console.log(userInfo.otp);
    if (req.body.otp===userInfo.otp) {
        res.json({
            "message": "Otp Verified",
            "statusCode": 200,
            'username':userInfo.username
        })
    } else {
        res.json({
            "message": "Invalid Otp",
            "statusCode": 400,
        }) 
    }
}
module.exports=VerifyOTP