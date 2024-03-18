import CardAll from "../components/CardAll";
import useAxios from "../hooks/useAxios";

const Listings = () => {
    const allProperties = useAxios('/properties')
    const properties = allProperties.filter(x => x.verification === 'verified')

    return (
        <div className="border rounded-lg">
            <div className="text-center p-10 bg-banner prim rounded-t-lg uppercase">
                <h2 className="prim font-bold text-2xl md:text-4xl">Property Listings</h2>
                {/* <p className="font-medium">Home / Listings</p> */}
            </div>
            <div className="py-10 md:py-20 px-4 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                    {
                        properties.map(x => <CardAll key={x._id} obj={x}></CardAll>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Listings;