import useAxios from "../hooks/useAxios";
import CardAll from "./CardAll";

const Advertise = () => {
    const properties = useAxios('/properties')

    return (
        <div>
            <div className="py-10 md:py-20 px-4 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                    {
                        properties.slice(0,3).map(x => <CardAll key={x._id} obj={x}></CardAll>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Advertise;