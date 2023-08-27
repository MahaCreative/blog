import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import clsx from "clsx";
import CloseIcon from "@mui/icons-material/Close";
export default function ResponsiveNavbar({ open, close }) {
    const [sidebar, setSidebar] = useState(false);
    const [shadow, setShadow] = useState(false);
    const shadowHandler = () => {
        setShadow(false);
        setSidebar(false);
    };
    const sidebarOpenHandler = () => {
        setSidebar(true);
        setShadow(true);
    };
    const closeHandler = () => {
        setShadow(false);
        setSidebar(false);
    };
    return (
        <>
            <div className="flex md:hidden w-full z-[9999] bg-slate-900/50 backdrop-blur-sm">
                <div className="flex justify-between w-full items-center">
                    <div className="px-4 py-4 relative">
                        <Link
                            as="div"
                            className="text-slate-300 font-bold font-fira text-sm leading-snug -tracking-wide PX-8"
                        >
                            MAHACREATIVE
                        </Link>
                    </div>
                    <div className="px-4">
                        <div className="text-slate-300 flex gap-1">
                            <div className="hover:cursor-pointer hover:shadow-sm hover:shadow-gray-800/40 p-2 rounded-md">
                                <SearchIcon color="inherit" />
                            </div>
                            <div
                                onClick={sidebarOpenHandler}
                                className="hover:cursor-pointer hover:shadow-sm hover:shadow-gray-800/40 p-2 rounded-md"
                            >
                                <MenuIcon color="inherit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar */}

            <div
                className={clsx(
                    shadow ? "bg-slate-950/50" : "bg-slate-950/0 collapse",
                    "fixed top-0 left-0 w-full h-screen  backdrop-blur-0 z-[99999] duration-100 transition-all"
                )}
            >
                <div
                    className={clsx(
                        sidebar
                            ? "translate-x-0 w-[85%]"
                            : "translate-x-14 w-0 collapse",
                        "absolute right-0 top-0 h-screen bg-slate-950 transition-all duration-300 ease-in-out border-l border-slate-700/30 border-dashed"
                    )}
                >
                    <div className="relative">
                        <div
                            onClick={closeHandler}
                            className="absolute top-0 right-0 flex justify-end text-white mx-4 p-1 shadow-sm shadow-gray-600 hover:cursor-pointer my-3 rounded-md"
                        >
                            <CloseIcon color="inherit" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
