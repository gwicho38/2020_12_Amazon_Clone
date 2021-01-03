import axios from "axios";

const instance = axios.create({
    //cloud deployed url - https://console.firebase.google.com/project/challenge-7f24d/functions/list
    baseURL: 'https://us-central1-challenge-7f24d.cloudfunctions.net/api'
    //local deployed url
    // baseURL: 'http://localhost:5001/challenge-7f24d/us-central1/api' //api url [local cloud function]
});

export default instance; 