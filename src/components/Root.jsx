import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Root = () => {
    return (
        <div>
            <header className="bg-white">
                <div className="xl:container mx-auto">
                    <div className="mx-5 my-6">
                        <Header></Header>
                    </div>
                </div>
            </header>
            <main className="xl:container mx-auto">
                <div className="mx-5 my-6">
                    <Outlet></Outlet>
                </div>
            </main>
            <footer className="bg-black text-white">
                <div className="xl:container mx-auto">
                    <div className="mx-5 mt-6">
                        <Footer></Footer>
                        <Copyright></Copyright>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Root;