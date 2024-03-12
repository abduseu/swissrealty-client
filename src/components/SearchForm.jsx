const SearchForm = () => {
    return (
        <div className="theme-shadow bg-white my-14 rounded-3xl mx-auto">
            <div>
                <div className="p-5 md:px-10 gap-5 w-full md:flex justify-between items-center">
                    <div className="md:flex my-5">
                        <div className="flex flex-col">
                            <label htmlFor="location" className="prim text-lg font-semibold">Location:</label>
                            <input type="text" name="location" placeholder="location" id="location" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="type" className="prim text-lg font-semibold">Type:</label>
                            <input type="text" name="location" placeholder="Property Type" id="type" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="buy_rent" className="prim text-lg font-semibold">For:</label>
                            <input type="text" name="for" placeholder="For Buy/Rent" id="buy_rent" />
                        </div>
                    </div>
                    <button className="btn-prim">Search</button>
                </div>

            </div>
        </div>
    );
};

export default SearchForm;