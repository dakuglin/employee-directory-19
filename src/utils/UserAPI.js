import axios from "axios";

export default {
    getUser: function() {
        return axios.get("https://jsonplaceholder.typicode.com/users")

        //"https://randomuser.me/api/?results=200&nat=us"   
    }
};
