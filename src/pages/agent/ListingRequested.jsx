import AgentDrawer from "./AgentDrawer";

const ListingRequested = () => {
    return (
        <div className="md:flex border">
            <AgentDrawer></AgentDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Offer Request</h3>
                        <div className="text-xl space-y-4">
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingRequested;