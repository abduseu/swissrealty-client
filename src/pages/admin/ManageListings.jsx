import AdminDrawer from "./AdminDrawer";

const ManageListings = () => {
    return (
        <div className="md:flex">
            <AdminDrawer></AdminDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 md:p-10 w-full">
                        <h3 className="text-3xl font-semibold mb-6 uppercase">Manage Listings</h3>
                        <div className="text-xl space-y-4">
                            Content will be here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageListings;