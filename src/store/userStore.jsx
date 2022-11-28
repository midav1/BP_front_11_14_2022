import { makeAutoObservable } from "mobx";
import { API_URL, doApiGet} from "../services/apiService";
class User {
  constructor() {
    makeAutoObservable(this);
  }
  user = { role: "", active: false };
  getPermissions = async () => {
    let url = API_URL + "/users/checkToken";
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      this.user.role = resp.data.role;
      this.user.active = resp.data.active;
    } catch (err) {
      console.log(err);
      alert("there problem ,try again later");
    }
  };
}
const userStore = new User();
export default userStore;
