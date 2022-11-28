import { makeAutoObservable, toJS } from "mobx";
import { API_URL, doApiGet} from "../services/apiService";
class Category {
  constructor() {
    makeAutoObservable(this);
  }
  categories = [];
  getCategories = async () => {
    let url = API_URL + "/categories/";
    try {
      let resp = await doApiGet(url);
      this.categories =  resp.data.map(({url_name,name})=> ({url_name,name}));
    } catch (err) {
      console.log(err);
      alert("there problem ,try again later");
    }
  };
}
const categoryStore = new Category();
export default categoryStore;
