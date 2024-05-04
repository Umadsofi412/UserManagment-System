import userModel from "../model/user.js";
const homePage = (req,res) =>{
    
        const info = {
            title : 'Homepage'
        }
            res.render('index', info);
}

const add = async (req,res) =>{
    try{
    const userInfo =  new userModel({
        firstName: 'Umad',
        lastName: 'Sofi'
        
    })

    await userInfo.save();
    res.send(" Added Successfully  to db")
    }catch{
        res.send('error')
    }
}


export default{
    homePage, add
}