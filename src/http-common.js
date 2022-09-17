import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://exeltechdatabase.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
