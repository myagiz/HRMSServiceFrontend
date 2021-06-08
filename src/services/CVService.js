import axios from "axios";

export default class CVService{
    getAllCV(){
        return axios.get("http://localhost:8080/api/curriculumvitae/getall")
    }
}