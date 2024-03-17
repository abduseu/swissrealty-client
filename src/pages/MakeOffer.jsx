import { useParams } from "react-router-dom";
import useAxios, { axiosBase } from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const MakeOffer = () => {
    const { id } = useParams()
    const { _id, image, title, location, agent_name, agent_email, property_holder, min_price, max_price } = useAxios(`/properties/${id}`)
    const { user } = useAuth()

    const handleSendOffer = (e) => {
        e.preventDefault();
        const form = e.target
        const offer = {
            propertyId: _id,
            title: title,
            image: image,
            location: location,
            min_price: min_price,
            max_price: max_price,
            agent_name: agent_name,
            agent_email: agent_email,
            property_holder: property_holder,

            buyer_name: user.displayName,
            buyer_email: user.email,
            offer_price: form.offer_price.value,
            buying_date: form.buying_date.value,
            status: "pending"
        }

        axiosBase.post('/offer-request', offer)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire(
                        'Offer Sent!',
                        'Offer request has beed sent!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="border rounded-lg">
            <div className="text-center p-10 banner-bg rounded-t-lg uppercase">
                <h2 className="prim font-bold text-2xl md:text-4xl">Send Offer Request</h2>
            </div>
            <div className="py-10 md:py-20 px-4 md:px-20">
                <div className="mx-auto grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                        <div className="font-bold text-2xl prim">
                            {title}
                        </div>
                        <div>
                            {location} | <span className="seco">{agent_name}</span>
                        </div>
                        <img src={image} alt="" />
                        <div className="font-bold flex py-2">Price Range: <span className="px-2 seco">${min_price} - ${max_price}</span></div>
                    </div>
                    <div className="flex flex-col md:justify-between">
                        <div className="space-y-2">
                            <div className="font-bold text-2xl prim">
                                Name: {user.displayName}
                            </div>
                            <div>
                                Email: <span className="seco">{user.email}</span>
                            </div>
                            <form onSubmit={handleSendOffer}>
                                <div>
                                    <h3>Set offer price:</h3>
                                    <input type="number" name="offer_price" min={min_price} max={max_price} placeholder={`$${min_price} - $${max_price}`} className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <h3>Buying date:</h3>
                                    <input type="date" name="buying_date" className="input input-bordered w-full" required />
                                </div>
                                <div className="text-center pt-10 md:pt-20">
                                    <button className="btn btn-prim hover:bg-orange-600">Send Offer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeOffer;