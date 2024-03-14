import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const Details = () => {
    const { id } = useParams()
    const { image, title, location, agent_name, agent_image, min_price, max_price, description } = useAxios(`/properties/${id}`)
    return (
        <div className="border rounded-lg">
            <div className="relative text-center p-10 banner-bg rounded-t-lg uppercase">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <h2 className="prim font-bold text-2xl md:text-4xl relative z-10">Details</h2>
                <p className="font-medium relative z-10">Home / Products / Details</p>
            </div>

            <div className="py-10 md:py-20 px-4 md:px-20">
                <div className="mx-auto md:flex gap-10">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="px-5 text-xl flex flex-col justify-between max-w-xl">
                        <div>
                            <div className="font-bold text-2xl">
                                {title}
                            </div>
                            <div>
                                {location}
                            </div>
                            <div className="flex items-center py-2">
                                <img src={agent_image} className="h-10" />
                                <h3>{agent_name}</h3>
                            </div>
                            <div>
                                {description}
                            </div>
                        </div>
                        <div className="font-bold flex py-2">Price Range: <span className="px-2">${min_price} - ${max_price}</span></div>
                    </div>
                </div>
                <div className="text-center pt-10 md:pt-20">
                    <button className="btn btn-prim hover:bg-black">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Details;