import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
    const {name} = useAuth()
    return (
        <div>
            <Banner/>
            <SearchForm />
            home page | {name}
        </div>
    );
};

export default HomePage;