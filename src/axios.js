import axios from "axios";

const instance = axios.create({
    

    baseURL: 'http://localhost:5001/clone-451fa/us-central1/api'
});

export default instance;


// import axios from "axios";
// const instance=axios.create({
// baseURL:"http://localhost:5001/clone-451fa/us-central1/api"  //the API (cloud function) URL
// });

// export default instance;