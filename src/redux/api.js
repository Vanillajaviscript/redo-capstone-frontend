import axios from "axios";


const API = axios.create({baseURL: "https://dog-rescue-adoption.herokuapp.com/"})


API.interceptors.request.use((req) => {
  if(localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const createDog = (dogData) => API.post("/dog", dogData);
export const getDogs = () => API.get("/dog");
export const getDog = (id) => API.get(`/dog/${id}`);
export const updateDog = (updatedDogData, id) =>
  API.patch(`/dog/${id}`, updatedDogData);
export const getDogsByUser = (userId) => API.get(`/dog/userdogs/${userId}`);
export const deleteDog = (id) => API.delete(`/dog/${id}`);
export const getDogsBySearch = (searchQuery) => API.get(`/dog/search?searchQuery=${searchQuery}`);