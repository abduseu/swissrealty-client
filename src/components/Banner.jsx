import SearchForm from "./SearchForm";

const Banner = () => {
    return (
        <div className="rounded-lg lg:flex flex-col lg:justify-around lg:items-center banner-bg">
            <div className="font-black leading-snug p-10 text-5xl md:text-7xl md:pt-20 md:leading-snug">
                <h2 className="text-center">Swiss <span>Excellence</span> <br /> in Realty</h2>
                {/* <button className="btn-prim">Get Started</button> */}
            </div>
            <SearchForm/>
        </div>
    );
};

export default Banner;