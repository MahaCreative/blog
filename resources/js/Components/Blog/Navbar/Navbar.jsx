import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuDropdown from "./MenuDropdown";
import ResponsiveNavbar from "./ResponsiveNavbar";
import clsx from "clsx";

export default function Navbar() {
    const { kategori } = usePage().props;

    return (
        <>
            <ResponsiveNavbar />

            <div className="relative hidden md:flex w-full min-h-5 z-10 bg-slate-950/30 backdrop-blur-sm justify-between items-center border-b border-slate-100/20 border-dashed">
                <div className="px-16 py-4 relative">
                    <Link
                        as="div"
                        className="text-white font-bold font-fira text-md lg:text-2xl leading-snug -tracking-wide PX-8"
                    >
                        MAHACREATIVE
                    </Link>
                </div>
                <div className="flex gap-3 relative px-16 py-4 items-center">
                    <NavLink active={true}>Home</NavLink>
                    <NavLink>About Me</NavLink>
                    <NavLink>Contact Me</NavLink>
                    <MenuDropdown title={"Article"}>
                        {kategori.map((item, key) => (
                            <NavLink key={key}>{item.name}</NavLink>
                        ))}
                    </MenuDropdown>
                    <MenuDropdown title={"Screen Cast"}></MenuDropdown>
                </div>
            </div>
        </>
    );
}
