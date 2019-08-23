import axios from "axios";
class API {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000/api/",
      headers: {
        authorization: localStorage.getItem("lambda_user_token") || ""
      }
    });
  }

  register(newUser) {
    return this.client.post("register", newUser);
  }

  login(credential) {
    return this.client.post("login", credential);
  }
  logout() {
    return this.client.get("restricted/logout");
  }
  getColors() {
    return this.client.get("/colors");
  }
  editColor(color) {
    return this.client.put(`/colors/${color.id}`, color);
  }
  deleteColor(colorID) {
    //console.log(colorID);
    return this.client.delete(`/colors/${colorID}`);
  }
  addColor(color) {
    return this.client.post("/colors", color);
  }
}

export default API;
