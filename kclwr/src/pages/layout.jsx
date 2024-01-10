import { Outlet, Link } from "react-router-dom";
import logobar from "../assets/logobar.png"

const Layout = () => {
    return (
        <>
            <nav className="w-screen bg-[#1c1c1c] h-20 text-white osf z-50">
                <div className="container flex justify-between mx-auto">
                    <div className="mt-4 gap-x-12 flex">
                        <Link to={"/"} className="text-5xl font-extrabold">KCLMUN</Link>
                        <Link className="font-thin text-2xl mt-2" to={"/faq"}>FAQ</Link>
                        <Link className="font-thin text-2xl mt-2" to={"/about"}>ABOUT</Link>
                        <Link className="font-thin text-2xl mt-2" to={"/committes"}>COMMITTES</Link>
                        <Link className="font-thin text-2xl mt-2" to={"/team"}>TEAM</Link>
                    </div>
                    <div className="">
                        <img src={logobar} alt="" srcset="" className="h-20" />
                    </div>
                </div>

            </nav>

            <Outlet />
        </>
    )
};

export default Layout;