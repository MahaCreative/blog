import hljs from "highlight.js";
import { marked } from "marked";
import React, { useEffect } from "react";

export default function Markdown({ children }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: marked(children) }}
        />
    );
}
