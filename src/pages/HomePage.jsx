import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
    const {name} = useAuth()
    return (
        <div>
            <div className="mb-14"><Banner/></div>
            home page | {name}
        </div>
    );
};

export default HomePage;