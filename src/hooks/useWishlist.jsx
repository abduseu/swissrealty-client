import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosBase } from "./useAxios";

const useWishlist = () => {
    const { user} = useAuth();
    
    const { refetch, data: wishlist = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async() => {
            const res = await axiosBase.get(`/wishlist?email=${user.email}`);
            return res.data;
        }
    })
    return [wishlist, refetch]
};

export default useWishlist;