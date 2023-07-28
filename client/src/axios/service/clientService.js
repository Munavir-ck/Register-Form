import axios from "../Axios";

export const userSignup = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/signup", value, config);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("error in clientRegister service");
  }
};
