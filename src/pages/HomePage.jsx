import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
    const {name} = useAuth()
    return (
        <div>
            <Banner/>
            home page | {name}
        </div>
    );
};

export default HomePage;