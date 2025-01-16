import axios from "axios";

const apikey = "JFD46TYzRerEZtYOYk0Mq3gf8O672ogYqLuh9fk6VeC_1tPcOw";

const api = axios.create({
  baseURL: "https://crudapi.co.uk/api/v1/probe",
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

const registerUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/register", { email, password });
    console.log("Registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering:");
    throw error;
  }
};

const email = "newuser@example.com";
const password = "password123";

registerUser(email, password);
