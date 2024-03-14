import { Link } from "react-router-dom";

const CardAll = ({ obj }) => {
    const { _id, image, title, location, agent_name, agent_image, min_price, max_price } = obj

    return (
        <div className="p-3 flex flex-col border bg-white rounded-lg">
            <div className="pb-4">
                <img className="h-60 mx-auto rounded" src={image} />
            </div>
            <h1 className="font-bold text-lg prim">{title}</h1>
            <h1 className="font-semibold">{location}</h1>
            <p>

            </p>
            <div className="flex flex-row items-center">
                <img src={agent_image} className="mr-2 inline-block h-8 w-8 rounded-full object-cover" />
                <h6>{agent_name}</h6>
            </div>

            <div className="flex justify-between px-1">
                <p className="py-3 font-bold">Min: <span>${min_price}</span></p>
                <p className="py-3 font-bold">Max: <span>${max_price}</span></p>
            </div>

            <div className="flex flex-col gap-1">
                <Link to={`/details/${_id}`}><button className="btn btn-prim hover:bg-black w-full rounded">View Property</button></Link>
            </div>
        </div>
    );
};

export default CardAll;