import axios from 'axios';


const url = "http://127.0.0.1:3004/Competition";

export const getCompetions = async(id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addCompetion = async(user) => {
    return await axios.post(url, user);
}


