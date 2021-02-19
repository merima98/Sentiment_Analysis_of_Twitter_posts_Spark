import axios from "../../httpClient";

function allPosts() {
  return axios.get();
}

export default { allPosts };
