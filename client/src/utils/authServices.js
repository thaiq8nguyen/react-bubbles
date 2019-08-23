import ApiService from "./apiServices";

const api = new ApiService();

class AuthService {
  register(user) {
    return api.register(user);
  }

  login(credential) {
    return api.login(credential);
  }

  logout() {
    localStorage.removeItem("lambda_user_token");
  }

  isAuthenticated() {
    const token = localStorage.getItem("lambda_user_token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  finishAuthentication(token) {
    localStorage.setItem("lambda_user_token", token);
  }
}

export default AuthService;
