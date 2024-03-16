import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import AgentDrawer from "./AgentDrawer";

const ListingUpdate = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const property = useAxios(`/properties/${id}`)
    const { _id, title, image, location, min_price, max_price, description } = property

    const handleUpdateProperty = (e) => {
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
            // property_holder: user.email,
            // verification: 'pending',
        }

        axiosBase.put(`/properties/${_id}`, property)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Property Updated!',
                        'Property has beed Updated!',
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
                        <h3 className="text-2xl text-center font-semibold mb-6 uppercase">Update Property</h3>
                        <div className="space-y-4 md:px-10">
                            <form onSubmit={handleUpdateProperty}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                                    <div>
                                        <h3>Title:</h3>
                                        <input type="text" name="title" defaultValue={title} placeholder="Property name" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Location:</h3>
                                        <select name="location" defaultValue={location} className="select select-bordered w-full">
                                            <option value="New York, USA">New York, USA</option>
                                            <option value="Michigan, USA">Michigan, USA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3>Min Price:</h3>
                                        <input type="number" name="min_price" defaultValue={min_price} placeholder="Lowest price range" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Max Price:</h3>
                                        <input type="number" name="max_price" defaultValue={max_price} placeholder="Highest price range" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Description:</h3>
                                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Image:</h3>
                                        <input type="url" name="image" defaultValue={image} placeholder="Paste image url here" className="input input-bordered w-full" required />
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

export default ListingUpdate;