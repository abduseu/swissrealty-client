import Advertise from "../components/Advertise";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Deals from "../components/Deals";
import Facts from "../components/Facts";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Facts/>
            <Deals/>
            <ContactForm/>
        </div>
    );
};

export default HomePage;