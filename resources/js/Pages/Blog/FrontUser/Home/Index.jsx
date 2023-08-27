import Header from "@/Components/Blog/Header/Header";
import ContainerContent from "@/Components/Container/ContainerContent";

import BlogLayout from "@/Layouts/Blog/BlogLayout";
import React from "react";

export default function Index() {
    return (
        <div className="">
            <Header background={true}>
                <div className="w-[100%] md:w-[90%] lg:w-[60vw] h-[100%] transition-all duration-100">
                    <Header.Title size="8xl">
                        Screencast Praktis untuk
                    </Header.Title>
                    <Header.Subtitle sizeTeaser="">
                        Reference site about Lorem Ipsum, giving information on
                        its origins, as well as a random Lipsum generator.
                    </Header.Subtitle>
                </div>
            </Header>

            <div className="">
                <ContainerContent title_content={"Series Terbaru"}>
                    <ContainerContent.Kontent />
                    <ContainerContent.Kontent />
                    <ContainerContent.Kontent
                        tags={
                            <>
                                <ContainerContent.Tag>ABG</ContainerContent.Tag>
                                <ContainerContent.Tag>ABG</ContainerContent.Tag>
                            </>
                        }
                    />
                </ContainerContent>
                <ContainerContent title_content={"Series Terbaru"}>
                    <ContainerContent.Kontent />
                    <ContainerContent.Kontent />
                    <ContainerContent.Kontent
                        tags={
                            <>
                                <ContainerContent.Tag>ABG</ContainerContent.Tag>
                                <ContainerContent.Tag>ABG</ContainerContent.Tag>
                            </>
                        }
                    />
                </ContainerContent>
            </div>
        </div>
    );
}
Index.layout = (page) => <BlogLayout children={page} />;
