const Facts = () => {
    return (
        <div>
            <>
                {/* Section Facts */}
                <section>
                    {/* Facts Container */}
                    <div className="mx-auto w-full max-w-7xl px-5 my-8 md:px-10 md:my-14">
                        {/* Facts Title */}
                        <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl uppercase">
                            We get results
                        </h2>
                        {/* Facts Content */}
                        <div className="grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
                            <div className="relative rounded-md p-8 md:p-10">
                                <h3 className="mb-4 text-3xl font-bold seco md:text-5xl">
                                    1.5M
                                </h3>
                                <p className="text-sm text-[#647084]">
                                    Properties listed on our platform
                                </p>
                                {/* Devider */}
                                <div className="absolute bottom-0 left-auto right-0 top-[29%] hidden h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] sm:block" />
                            </div>
                            <div className="relative rounded-md p-8 md:p-10">
                                <h3 className="mb-4 text-3xl font-bold seco md:text-5xl">
                                    41%
                                </h3>
                                {/* Devider */}
                                <div className="absolute bottom-0 left-auto right-0 top-[29%] hidden h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] sm:block" />
                                <p className="text-sm text-[#647084]">
                                    Increase in property sales over the last year
                                </p>
                            </div>
                            <div className="relative rounded-md p-8 md:p-10">
                                <h3 className="mb-4 text-3xl font-bold seco md:text-5xl">
                                    3657+
                                </h3>
                                <p className="text-sm text-[#647084]">
                                    Satisfied customers served by our platform
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    );
};

export default Facts;
