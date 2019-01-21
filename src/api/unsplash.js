import axios from "axios";

// const searchImages = term =>{

//Could do this
// }

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 284227fbc59377a415ca112ef098a505a729139508243ed0fefd57b4a7bd4d8f"
  }
});
