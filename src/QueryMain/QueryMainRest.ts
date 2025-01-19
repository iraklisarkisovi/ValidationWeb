import axios from "axios";

const url = "https://crudapi.co.uk/api/v1/users";
const apiKey = import.meta.env.VITE_DBAPI_KEY;


export const DBPost = async (data: any) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    console.log("Data posted successfully:", response.data);
    return response.data;
  } catch (error) {
 
    if (error ) {
      console.error("Error posting data:", error);
    } else {
 
      console.error("Error posting data:", error);
    }
  }
};

export const DBGetUsers = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data.items;  
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
