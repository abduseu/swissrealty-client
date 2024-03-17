import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import AgentDrawer from "./AgentDrawer";
import Swal from "sweetalert2";

const ListingRequested = () => {
    const { user } = useAuth()
    const allOffers = useAxios('/offer-request')
    const offers = allOffers.filter(x => x.agent_email == user.email)

    const handleAccept = (id) => {
        axiosBase.put(`/offer-request/${id}`, {status: "accepted"})
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Offer Accepted',
                        'Offer has been accepted',
                        'success'
                    )
                    // Reload the page
                    window.location.reload();
                }
            })
    }

    const handleReject = (id) => {
        axiosBase.put(`/offer-request/${id}`, {status: "rejected"})
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Offer Reject',
                        'Offer has been rejected',
                        'error'
                    )
                    // Reload the page
                    window.location.reload();
                }
            })
    }

    return (
        <div className="md:flex border">
            <AgentDrawer></AgentDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Requested Properties</h3>
                        <div className="text-xl space-y-4">
                            <div>
                                {offers.map((x, index) => (
                                    <div key={x._id} className="md:flex justify-between items-center my-4 p-4 mx-auto border">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <Link to={`/details/${x.propertyId}`}>
                                                    <h3 className="font-semibold text-sm">{index + 1}. {x.title}</h3>
                                                    <p className="text-sm">{x.location}</p>
                                                    <p className="text-sm">Buyer: <span className="seco">{x.buyer_name}</span></p>
                                                    <p className="text-sm">Email: <span className="seco">{x.buyer_email}</span></p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-col justify-between md:justify-end items-center gap-2 font-semibold text-sm">
                                            <h3 className="text-right">Offer: <span>${x.offer_price}</span></h3>
                                            { x.status === 'pending' ?
                                                <div className="flex gap-1">
                                                    <button onClick={()=>handleAccept(x._id)} className="btn btn-sm md:btn-sm text-white bg-prim btn-success">Accept</button>
                                                    <button onClick={()=>handleReject(x._id)} className="btn btn-sm md:btn-sm text-white bg-red-600 btn-error">Reject</button>
                                                </div> :
                                                <div>
                                                    <h3 className="text-right">Status: <span className="seco uppercase">{x.status}</span></h3>
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

export default ListingRequested;