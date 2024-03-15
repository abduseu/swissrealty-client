import AdminDrawer from "./AdminDrawer";

const ManageReviews = () => {
    return (
        <div className="md:flex border">
            <AdminDrawer></AdminDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Reviews</h3>
                        <div className="text-xl space-y-4">
                            Content will be here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReviews;