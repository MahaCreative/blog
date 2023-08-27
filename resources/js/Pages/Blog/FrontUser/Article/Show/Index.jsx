import Markdown from "@/Components/Blog/Mardown/Markdown";
import BlogLayout from "@/Layouts/Blog/BlogLayout";
import React from "react";

export default function Index({ articles }) {
    console.log(articles);
    return (
        <div className="px-16 bg-slate-950">
            <Markdown>{articles.data.body}</Markdown>
        </div>
    );
}
Index.layout = (page) => <BlogLayout children={page} />;
