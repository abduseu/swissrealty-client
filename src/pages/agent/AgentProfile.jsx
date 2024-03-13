import useAuth from "../../hooks/useAuth";
import AgentDrawer from "./AgentDrawer";

const AgentProfile = () => {
    const {user} = useAuth()

    return (
        <div className="md:flex">
            <AgentDrawer></AgentDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 md:p-10 w-full">
                        <h3 className="text-3xl font-semibold mb-6 uppercase">Agent Profile</h3>
                        <div className="text-xl space-y-4">
                            <div className="flex justify-center">
                                <img src={user.photoURL} className="rounded-full max-w-xs" />
                            </div>
                            <h3>Name: <span>{user.displayName}</span> </h3>
                            <h3>Email: <span>{user.email}</span> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;