import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="w-screen bg-[#1c1c1c] h-20 text-white bvn">
                <div className="container flex justify-between mx-auto">
                    <div className="mt-4 gap-8 flex">
                        <Link to={"/"} className="text-5xl  font-light fw">KCLMUN</Link>
                        <Link className="font-thin" to={"/faq"}>FAQ</Link>
                        <Link className="font-thin" to={"/about"}>ABOUT</Link>
                        <Link className="font-thin" to={"/committes"}>COMMITTES</Link>
                        <Link className="font-thin" to={"/team"}>TEAM</Link>
                    </div>
                </div>

            </nav>

            <Outlet />
        </>
    )
};

export default Layout;