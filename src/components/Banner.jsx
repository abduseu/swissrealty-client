const Banner = () => {
    return (
        <div className="bg-gray rounded-lg lg:flex lg:justify-around lg:items-center">
            <div className="font-black max-w-2xl leading-snug p-10 text-5xl md:text-6xl md:p-20 md:leading-snug">
                <h2>Swiss <span>Excellence</span> <br /> in Realty</h2>
                {/* <button className="btn-prim">Get Started</button> */}
            </div>

            <div className="max-w-2xl">
                <div className="lg:p-20">
                <img src="https://i.ibb.co/2NrGSRf/house2.png" className=" rounded-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;