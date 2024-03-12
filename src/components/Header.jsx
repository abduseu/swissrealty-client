import { Link, NavLink } from "react-router-dom";

const Header = () => {
    //Navlink
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/properties">Properties</NavLink></li>
        <li><NavLink to="/wishlist" className="flex">Wishlist</NavLink></li>
        <li><NavLink to="/login"><button className="block lg:inline-block lg:py-2 lg:px-6 py-2 px-4 bg-prim hover:bg-black text-sm lg:text-base text-white font-bold rounded-xl transition duration-200">Login</button></NavLink></li>
    </>

    return (
        <div className="py-4">
            {/* Logo & Button */}
            <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between mb-2">
                <div>
                    <Link to="/" className="text-2xl font-bold flex items-center uppercase">Swiss <span>Realty</span></Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <div>
                        <ul className={`flex items-center gap-4 md:gap-8 text-base font-semibold list-none uppercase`}>
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;