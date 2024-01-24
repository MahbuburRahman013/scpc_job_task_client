import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://scpc-backend.vercel.app'
  });

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;