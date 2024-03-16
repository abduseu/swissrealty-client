import AgentDrawer from "./AgentDrawer";
import useAuth from '../../hooks/useAuth';
import { axiosBase } from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ListingAdd = () => {
    const { user } = useAuth()

    const handleAddProperty = (e) => {
        e.preventDefault();
        const form = e.target
        const property = {
            title: form.title.value,
            image: form.image.value,
            location: form.location.value,
            min_price: form.min_price.value,
            max_price: form.max_price.value,
            description: form.description.value,

            agent_name: user.displayName,
            agent_email: user.email,
            agent_image: user.photoURL,
            property_holder: user.email,
            verification: 'pending',
        }

        axiosBase.post('/properties', property)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire(
                        'Property Added!',
                        'Property has beed Added!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="md:flex border">
            <AgentDrawer></AgentDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="p-6 w-full">
                        <h3 className="text-2xl text-center font-semibold mb-6 uppercase">Add Property</h3>
                        <div className="space-y-4 md:px-10">
                            <form onSubmit={handleAddProperty}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                                    <div>
                                        <h3>Title:</h3>
                                        <input type="text" name="title" placeholder="Property name" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Location:</h3>
                                        <select name="location" className="select select-bordered w-full">
                                            <option value="New York, USA">New York, USA</option>
                                            <option value="Michigan, USA">Michigan, USA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3>Min Price:</h3>
                                        <input type="number" name="min_price" placeholder="Lowest price range" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Max Price:</h3>
                                        <input type="number" name="max_price" placeholder="Highest price range" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Description:</h3>
                                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Image:</h3>
                                        <input type="url" name="image" placeholder="Paste image url here" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="text-center pt-10">
                                    <button className="btn btn-prim hover:bg-orange-600">Add Property</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingAdd;