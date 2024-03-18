import SearchForm from "./SearchForm";
import {ReactTyped} from 'react-typed';

const Banner = () => {
    return (
        <div className="rounded-lg lg:flex flex-col lg:justify-around lg:items-center bg-banner">
            <div className="font-black leading-snug p-10 text-5xl md:text-6xl md:pt-20 md:leading-snug">
                <h2 className="text-center">Swiss <span><ReactTyped strings={["Excellence", "Precision"]} typeSpeed={100} backSpeed={50} loop /></span> <br /> in Realty</h2>
                {/* <button className="btn-prim">Get Started</button> */}
            </div>
            <SearchForm/>
        </div>
    );
};

export default Banner;