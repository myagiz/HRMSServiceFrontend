import axios from "axios"

export default class EmployerServices{
    getAllEmployer(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

}