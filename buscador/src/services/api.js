import axios from "axios";

//21920630/json/

const api = axios.create({
	baseURL: "https://viacep.com.br/ws/",
});

export default api;
