import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AgentDrawer from "./AgentDrawer";
import { axiosBase } from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const ListingSold = () => {
    const { user } = useAuth()
    const [listings, setListings] = useState([]);
    const soldListings = listings.filter(x => x.property_holder !== user.email)

    //fetch data
    const filterEmail = user.email;
    useEffect(() => {
        axiosBase(`/agent-listings?email=${filterEmail}`)
            .then(res => {
                console.log(res.data);
                setListings(res.data);
            });
    }, [filterEmail]);


    return (
        <div className="md:flex border">
            <AgentDrawer></AgentDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Sold Properties</h3>
                        <div className="text-xl space-y-4">
                            <div>
                                {soldListings.map((x, index) => (
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <Link to={`/details/${x._id}`}>
                                                    <h3 className="font-semibold text-sm">{index + 1}. {x.title}</h3>
                                                    <p className="text-sm">{x.location}</p>
                                                    <p className="text-sm">Buyer: <span className="seco">{x.property_holder}</span></p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center gap-2 font-semibold text-sm">
                                            <h3 className="prim text-right">${x.min_price} - ${x.max_price}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingSold;