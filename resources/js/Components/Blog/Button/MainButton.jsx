import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function MainButton({
    className,
    color = "bg-white",
    children,
    routes,
}) {
    return (
        <Link
            href={routes}
            className={clsx(
                className,
                color,
                "px-3 py-2.5 rounded-full hover:opacity-75 font-fira font-normal text-sm"
            )}
        >
            {children}
        </Link>
    );
}
