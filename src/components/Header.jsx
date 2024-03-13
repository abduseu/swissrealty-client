import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CiMinimize2 } from "react-icons/ci";
import useAxios from "../hooks/useAxios";

const Header = () => {
    const { user, logOut } = useAuth()
    const {role} = useAxios(`/users/${user?.email}`)

    const handleSignout = () => {
        logOut()
            .then(() => {
                console.log('Signout Successful!')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    //Navlink
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listings">Properties</NavLink></li>
        <li><NavLink to="/wishlist" className="flex">Wishlist</NavLink></li>
        <li><NavLink to="/login"><button className="btn-prim hover:bg-black btn">Login</button></NavLink></li>
    </>
    const linksPrivate = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listings">Properties</NavLink></li>
        <li><NavLink to="/wishlist" className="flex">Wishlist</NavLink></li>
    </>

    return (
        <div className="py-4">
            {/* Logo & Button */}
            <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between mb-2">
                <div>
                    <Link to="/" className="text-2xl font-bold flex items-center uppercase gap-2"><CiMinimize2/>Swiss <span>Realty</span></Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <div>
                        <ul className={`flex items-center gap-4 md:gap-8 text-base font-semibold list-none uppercase`}>
                            {user ?
                                <>
                                    {linksPrivate}
                                    <div className="dropdown dropdown-end dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded">
                                            <li className="whitespace-nowrap">{user.displayName}</li>
                                            <li><Link to={`/${role}`}>Dashboard</Link></li>
                                            <li><Link onClick={handleSignout}>Signout</Link></li>
                                        </ul>
                                    </div>
                                </> :
                                links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;