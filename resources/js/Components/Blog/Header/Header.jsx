import clsx from "clsx";
import React, { useEffect, useState } from "react";
function Header({ classname, children, background = false }) {
    const [colorBoxes, setColorBoxes] = useState([]);
    const numberOfColorBoxes = 70;
    const colorBoxElements = [];
    for (let i = 0; i < numberOfColorBoxes; i++) {
        colorBoxElements.push(
            <div
                key={i}
                className="colorBox bg-slate-950 hover:bg-slate-900 shadow-sm shadow-slate-700/30 border border-slate-800/10"
            />
        );
    }
    const [selectedElements, setSelectedElements] = useState([]);

    useEffect(() => {
        const colorBoxes = document.querySelectorAll(".colorBox");
        const numberOfElementsToChange = 5;
        const selectedIndices = [];

        while (selectedIndices.length < numberOfElementsToChange) {
            const randomIndex = Math.floor(Math.random() * colorBoxes.length);
            if (!selectedIndices.includes(randomIndex)) {
                selectedIndices.push(randomIndex);
            }
        }

        const selectedElementsArray = Array.from(selectedIndices).map(
            (index) => colorBoxes[index]
        );
        setSelectedElements(selectedElementsArray);
    }, []);

    useEffect(() => {
        selectedElements.forEach((element) => {
            element.classList.remove("bg-slate-950");
            element.classList.add("bg-slate-900");
        });
    }, [selectedElements]);

    return (
        <div
            className={clsx(
                classname,
                "relative   bg-slate-950 min-h-[80vh] md:min-h-[90vh]  flex justify-center flex-col  transition-all duration-300 ease-linear"
            )}
        >
            <div className=" bgAnimation grid grid-cols-5 md:grid-cols-9 lg:grid-cols-12 grid-rows-2 md:grid-rows-3 lg:grid-rows-6 transition-all duration-300">
                {colorBoxElements}
            </div>
            <div className="relative backdrop:blur-sm h-full">
                <div className="py-6 px-4 md:px-16 h-full">{children}</div>
            </div>
        </div>
    );
}

function Title({ children, size = "7xl" }) {
    return (
        <div className="w-full  transition-all duration-300 ease-linear">
            <h1
                className={`'font-fira text-white font-bold text-lg md:text-5xl lg:text-${size} '`}
            >
                {children}
            </h1>
        </div>
    );
}

function Subtitle({ classname, children, sizeTeaser = "xl" }) {
    return (
        <div
            className={clsx(
                classname,
                "w-full md:w-[100%]  transition-all duration-300 ease-linear"
            )}
        >
            <p
                className={
                    "font-fira text-slate-300 font-light text-lg md:text-xl lg:text-xl"
                }
            >
                {children}
            </p>
        </div>
    );
}
function HeaderImage({ source }) {
    return (
        <div className=" bg-red-500 w-[100%] rounded-lg overflow-hidden shadow-md shadow-black/50  transition-all duration-300 ease-linear">
            <img loading="lazy" src={source} />
        </div>
    );
}
Header.Title = Title;
Header.Subtitle = Subtitle;
Header.HeaderImage = HeaderImage;
export default Header;
