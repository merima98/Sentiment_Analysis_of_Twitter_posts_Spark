import axios from "../../httpClient";

function allPosts() {
  return axios.get("/advice");
}
const exports = { allPosts };

export default exports;
