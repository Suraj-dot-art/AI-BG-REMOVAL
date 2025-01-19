import jwt from 'jsonwebtoken'

//MiddleWare function to decode JWT token to get clerkId

const authUser = async (req,res,next) => {
    try{   //when production level - can use clerkexpresswithauth() but for now manual is ok
1       
        const {token} = req.headers

        if(!token) {
            return res.json({success:false, message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode.clerkId
        next()

    }catch(error) {
        console.log(error.message)
        res.json({success: false , message : error.message})
    }
}

export default authUser