import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageNav from "../../general_comps/pageNav";
import SearchItems from "../../general_comps/searchItems";
import { API_URL, doApiGet } from "../../services/apiService";
import MySelect from "../../UI/select/MySelect";
import ItemItem from "./itemItem";

export default function ItemsList() {
  const nav = useNavigate();
  const [ar, setAr] = useState([]);
  const [querys] = useSearchParams();
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    doApi();
  }, [querys.get("page"),filter,limit]);
  

  const doApi = async () => {
    //?page= איסוף
    let page = querys.get("page") || 1;
    let url = API_URL + "/items/?page=" + page +"&&sort="+`${filter.sort}`
    +"&&s="+`${filter.query}` +"&&perPage="+`${limit}`;
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    } catch (err) {
      console.log(err);
      alert("there problem ,try again later");
    }
  };

  return (
    <div className="container">
      <SearchItems filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Items Per Pages"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" }
        ]}
      />
      <h1>List of Items</h1>
      <PageNav
        urlPageApi={API_URL + "/items/count"}
        perPage={limit}
        navToDir="/?page="
        cssClass="btn btn-info ms-2"
      />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>INFO</th>
            <th>Photo</th>
            <th>Location</th>
            <th>Category</th>
            <th>Price</th>
            <th>Date added item</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item, i) => {
            return (
              <ItemItem
                key={item._id}
                index={(querys.get("page") - 1) * limit + i}
                item={item}
                doApi={doApi}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
