import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header className="bg-gray-100">
                <div className="xl:container mx-auto">
                    <div className="mx-5 my-6">
                        Header will be there
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
                        Footer will be there
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Root;