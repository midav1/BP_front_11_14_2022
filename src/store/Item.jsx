import { makeAutoObservable } from "mobx";
import { API_URL, doApiGet } from "../services/apiService"
class Item {
    constructor()
    {
        makeAutoObservable(this)
    }
    itemList = []
    getItemList=async ()=>
    {
        let url = API_URL + "/items/?page=1";
        try {
            let resp = await doApiGet(url);
            console.log(resp.data);
            this.itemList=resp.data;
          }
          catch (err) {
            console.log(err);
            alert("there problem ,try again later")
          }
    }
}
const itemStore=new Item()
export default itemStore;