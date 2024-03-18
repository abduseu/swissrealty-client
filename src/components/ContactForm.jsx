const ContactForm = () => {
    return (
        <>
            <section>
                <div className="mx-auto w-full max-w-7xl px-5 my-8 md:px-10 md:my-14">
                    <div className="">
                        <div className="mx-auto max-w-3xl text-center pb-4">
                            <h2 className="text-xl md:text-5xl font-bold p-5 mb-4 uppercase">Contact Support</h2>
                        </div>
                        {/* Contact Form */}
                        <form
                            className="mb-4 text-left sm:px-4 md:px-20"
                            name="wf-form-name"
                            method="get"
                        >
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="name-2" className="mb-1 font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                                        placeholder=""
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="field" className="mb-1 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                                    placeholder=""
                                    required=""
                                />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="field" className="mb-1 font-medium">
                                    Message
                                </label>
                                <textarea
                                    placeholder=""
                                    className="h-auto min-h-[186px] w-full overflow-auto bg-[#f2f2f7] px-3 py-2 text-sm text-[#333333]"
                                    defaultValue={" "}
                                />
                            </div>
                            <label className="mb-1 flex pb-4 font-medium">
                                <input type="checkbox" name="checkbox-3" />
                                <span
                                    className="ml-4 inline-block cursor-pointer text-sm"
                                    htmlFor="checkbox-3"
                                >
                                    I agree with the{" "}
                                    <a href="#" className="font-bold text-[#0b0b1f]">
                                        Terms &amp; Conditions
                                    </a>
                                </span>
                            </label>
                            <a href="#" className="rounded-lg mr-5 flex w-full items-center justify-center bg-prim hover:bg-orange-600 px-8 py-4 font-semibold text-white transition md:mr-6 lg:mr-8">
                                <p className="mr-6 font-bold">Send Message</p>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 21"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 flex-none"
                                >
                                    <title>Arrow Right</title>
                                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                                </svg>
                            </a>
                        </form>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ContactForm;