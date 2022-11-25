import { makeAutoObservable } from "mobx";
import { API_URL, doApiGet } from "../services/apiService"
class User {
    constructor()
    {
        makeAutoObservable(this)
    }
    foodList = []
    getFoodList=async ()=>
    {
        let url = API_URL + "/foods/?page=1";
        try {
            let resp = await doApiGet(url);
            console.log(resp.data);
            this.foodList=resp.data;
          }
          catch (err) {
            console.log(err);
            alert("there problem ,try again later")
          }
    }
}
const userStore=new User()
export default userStore;