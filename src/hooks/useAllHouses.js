import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllHouses = () => {
    const axiosPublic = useAxiosPublic();
    const {data,isLoading} = useQuery({
        queryKey:['allHouses'],
        queryFn: async ()=> {
           const data = await axiosPublic.get('/allHouses')
           return data.data;
        }
    })

    return [data,isLoading];
};

export default useAllHouses;