import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import clsx from "clsx";

export default function MenuDropdown({ title, children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div
            ref={menuRef}
            className="relative hover:cursor-pointer "
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <p className="text-white font-fira font-extralight md:text-xs lg:text-md">
                {title}
            </p>
            <div className={clsx("relative duration-300 transition-all")}>
                <div
                    className={clsx(
                        menuOpen
                            ? "translate-y-2"
                            : "translate-y-0 h-0 collapse",
                        "absolute px-3 py-2 z-10  top-0 left-0 bg-slate-900/50 backdrop-blur-sm rounded-md border border-dashed border-gray-300/20 duration-300 transition-all ease-in-out"
                    )}
                >
                    <div
                        className={clsx(
                            menuOpen ? "" : "collapse",
                            "duration-300 transition-all "
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
