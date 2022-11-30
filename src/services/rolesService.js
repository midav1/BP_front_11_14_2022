import { API_URL, doApiGet } from '../services/apiService'

let url = API_URL + '/users/checkToken'

export async function checkIfAdmin() {
  
  let resp = await doApiGet(url);

  return resp.data.role == 'admin'
}
export async function checkIfUser() {
  
  let resp = await doApiGet(url);

  return resp.data.role == 'user'
}
