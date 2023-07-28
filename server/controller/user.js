
import bcrypt from "bcrypt";
import userDb from "../model/user.js"


const signup = async (req, res) => {
    console.log(req.body);
    try {
      const { name, password, email,phone,address } = req.body
      const user = await userDb.findOne({ email: email });
  
      if (user) {
        res.json({ status: false, message: "email already exist" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password.trim(), salt);
  
        await userDb
          .create({
            name,
            email,
            phone,
            address,  
            password: hashPassword,
          })
          .then((data) => {

            
            res.json({ status: true,message: "success" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
    const user = await userDb.find();
    console.log(user);
  };

  export { signup };