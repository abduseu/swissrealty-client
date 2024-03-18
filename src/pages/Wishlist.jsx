import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { axiosBase } from "../hooks/useAxios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import useWishlist from '../hooks/useWishlist';

const Wishlist = () => {
    const {user} = useAuth()
    const [wishlist, setWishlist] = useState([]);
    const [, refetch] = useWishlist();

    //fetch data
    const filterEmail = user.email;
    useEffect(() => {
        axiosBase(`/wishlist?email=${filterEmail}`)
            .then(res => {
                console.log(res.data);
                setWishlist(res.data);
            });
    }, [filterEmail]);


    //Delete function
    const handleDeleteWishlist = (id) => {
        axiosBase.delete(`/wishlist/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Property removed from wishlist.',
                        'success'
                    );
                    const remaining = wishlist.filter(x => x._id !== id);
                    setWishlist(remaining);
                }
            });

        console.log('clicked: ', id);
    };

    return (
        <div className="border rounded-lg min-h-screen">
            <div className="text-center p-10 bg-banner rounded-t-lg uppercase">
                <h2 className="prim font-bold text-2xl md:text-4xl">My Wishlist</h2>
                {/* <p className="font-medium">Home / Wishlist</p> */}
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
                                    <button onClick={()=>handleDeleteWishlist(x._id)} className="btn btn-sm text-red-600">X</button>
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