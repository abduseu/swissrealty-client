import UserDrawer from "./UserDrawer";

const Reviews = () => {
    return (
        <div className="md:flex border">
            <UserDrawer></UserDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">My Reviews</h3>
                        <div className="text-xl space-y-4">
                            review list will be here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;