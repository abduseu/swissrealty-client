import useAuth from "../hooks/useAuth";

const HomePage = () => {
    const {name} = useAuth()
    return (
        <div>
            home page | {name}
        </div>
    );
};

export default HomePage;