import axios from "axios";

const apiLokasi = axios.create({
    baseURL: "https://dev.farizdotid.com/api/daerahindonesia"
});

export default apiLokasi;