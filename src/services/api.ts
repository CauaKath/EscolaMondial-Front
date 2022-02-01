import axios from "axios";

/**
 * Conexão com a API
 */

const api = axios.create({
    baseURL: 'http://localhost:6868',
});

export default api;
