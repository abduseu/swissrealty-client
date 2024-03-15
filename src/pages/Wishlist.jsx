import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { axiosBase } from "../hooks/useAxios";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const {user} = useAuth()
    const [wishlist, setWishlist] = useState([]);

    const filterEmail = user.email;
    useEffect(() => {
        axiosBase(`/wishlist?email=${filterEmail}`)
            .then(res => {
                console.log(res.data);
                setWishlist(res.data);
            });
    }, [filterEmail]);

    return (
        <div className="border rounded-lg">
            <div className="text-center p-10 banner-bg rounded-t-lg uppercase">
                <h2 className="prim font-bold text-2xl md:text-4xl">My Wishlist</h2>
                <p className="font-medium">Home / Wishlist</p>
            </div>
            <div className="lg:flex">
                <div className="p-5 w-full space-y-12">
                    <div>
                        {wishlist.map((x, index) => (
                            <div key={x._id} className="flex justify-between items-center my-4 md:w-3/4 mx-auto">
                                <div className="md:flex items-center">
                                    <div>
                                        <Link to={`/details/${x.proprtyId}`}>
                                            <h3 className="font-bold text-xl">{index + 1}. {x.title}</h3>
                                            <p className="text-sm">{x.location}</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 font-bold text-xl">
                                    <h3 className="prim">${x.min_price} - ${x.max_price}</h3>
                                    <button className="btn btn-sm text-red-600">X</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;