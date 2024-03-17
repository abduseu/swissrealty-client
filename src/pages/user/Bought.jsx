import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserDrawer from "./UserDrawer";
import { useEffect, useState } from "react";
import { axiosBase } from "../../hooks/useAxios";

const Bought = () => {
    const { user } = useAuth()
    const [bought, setBought] = useState([]);

    //fetch data
    const filterEmail = user.email;
    useEffect(() => {
        axiosBase(`/offer-bought?email=${filterEmail}`)
            .then(res => {
                console.log(res.data);
                setBought(res.data);
            });
    }, [filterEmail]);

    return (
        <div className="md:flex border">
            <UserDrawer></UserDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Bought Properties</h3>
                        <div className="text-xl space-y-4">
                            <div>
                                {bought.map((x, index) => (
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <Link to={`/details/${x.propertyId}`}>
                                                    <h3 className="font-semibold text-sm">{index + 1}. {x.title}</h3>
                                                    <p className="text-sm">{x.location}</p>
                                                    <p className="text-sm">Seller: <span className="seco">{x.agent_email}</span></p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center gap-2 font-semibold text-sm">
                                            <h3 className="prim text-right">${x.offer_price}</h3>
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

export default Bought;