import { useEffect, useState } from "react";
import AdminDrawer from "./AdminDrawer";
import { Link } from "react-router-dom";
import { axiosBase } from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ManageListings = () => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        axiosBase('/properties')
            .then(res => { setListings(res.data) })
    }, [])

    const handleVerify = (id) => {
        axiosBase.put(`/properties/${id}`, { verification: "verified" })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Property Verified',
                        'Property has been verified',
                        'success'
                    )

                    axiosBase('/properties')
                        .then(res => { setListings(res.data) })
                }
            })
    }
    const handleReject = (id) => {
        axiosBase.put(`/properties/${id}`, { verification: "rejected" })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Property Rejected',
                        'Property has been rejected',
                        'success'
                    )

                    axiosBase('/properties')
                        .then(res => { setListings(res.data) })
                }
            })
    }
    return (
        <div className="md:flex border">
            <AdminDrawer></AdminDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Listings</h3>
                        <div className="text-xl space-y-4">
                            <div>
                                {listings.map((x, index) => (
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <Link to={`/details/${x._id}`}>
                                                    <h3 className="font-semibold text-sm">{index + 1}. {x.title}</h3>
                                                    <p className="text-sm">{x.location} | <span>{x.agent_email}</span></p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gap-2 font-semibold text-sm">
                                            <h3 className="prim text-right">${x.min_price} - ${x.max_price}</h3>
                                            {x.verification === 'pending' ?
                                                <div className="flex justify-end gap-1">
                                                    <button onClick={() => handleVerify(x._id)} className="btn btn-sm md:btn-sm text-white bg-prim btn-success">Verify</button>
                                                    <button onClick={() => handleReject(x._id)} className="btn btn-sm md:btn-sm text-white bg-red-600 btn-error">Reject</button>
                                                </div> :
                                                <div>
                                                    <h3 className="text-right">Status: <span className="seco uppercase">{x.verification}</span></h3>
                                                </div>
                                            }
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

export default ManageListings;