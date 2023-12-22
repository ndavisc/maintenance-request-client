import axios from 'axios';

const REQUEST_BASE_API_URL = 'http://localhost:8080/api/v1/maintenance-request';

export function getAllRequests(){
    return axios.get(REQUEST_BASE_API_URL);
}

export function createRequest(request){
    return axios.post(REQUEST_BASE_API_URL,request);
}

export function getById(id){
    return axios.get(`${REQUEST_BASE_API_URL}/${id}`);
}

export function updateRequest(id, request){
    return axios.put(`${REQUEST_BASE_API_URL}/${id}`, request);
}

export function deleteRequest(id){
    return axios.delete(`${REQUEST_BASE_API_URL}/${id}`);
}
