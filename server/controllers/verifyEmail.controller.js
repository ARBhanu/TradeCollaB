const { default: axios } = require("axios")
const userModal = require("../models/userModel.js")
const SendEmail = require("../utli/SendEmail")

const VerifyEmail = async (req, res) => {
    const emailExists = await userModal.exists({ username: req.body.username })
    if (emailExists===null) {
        res.json({
            "message": "This Account doesn't exist",
            "statusCode":400
        })
    } else {
        const userInfo = await userModal.findById(emailExists._id)
        // logic to send Otp
        const Generatedotp =  Math.floor(100000 + Math.random() * 900000).toString();
        await userModal.findByIdAndUpdate(emailExists._id, { $set: { otp: Generatedotp } })
        
    }
}
module.exports=VerifyEmail