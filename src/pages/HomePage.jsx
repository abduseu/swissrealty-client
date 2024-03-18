import Advertise from "../components/Advertise";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Facts from "../components/Facts";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Facts/>
            <ContactForm/>
        </div>
    );
};

export default HomePage;