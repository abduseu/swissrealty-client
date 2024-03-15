import Advertise from "../components/Advertise";
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
    const {name} = useAuth()
    return (
        <div>
            <Banner/>
            <Advertise/>
            home page | {name}
        </div>
    );
};

export default HomePage;