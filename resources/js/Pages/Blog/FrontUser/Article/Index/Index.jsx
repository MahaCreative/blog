import MainButton from "@/Components/Blog/Button/MainButton";
import Header from "@/Components/Blog/Header/Header";
import ContainerContent from "@/Components/Container/ContainerContent";
import BlogLayout from "@/Layouts/Blog/BlogLayout";
import React from "react";

export default function Index(props) {
    const lastUpdated = props.lastUpdated;
    console.log(lastUpdated);
    return (
        <div className="relative">
            <Header classname={"hidden lg:flex"}>
                <div className="h-[100%] flex flex-col-reverse lg:flex-row justify-between gap-3">
                    <div className="h-[100%] flex justify-between items-center">
                        <div className="w-full">
                            <Header.Title size="8xl">
                                {lastUpdated.title}
                            </Header.Title>
                            <Header.Subtitle classname={"mt-6"} sizeTeaser="">
                                {lastUpdated.teaser}
                                {lastUpdated.teaser}
                                {lastUpdated.teaser}
                            </Header.Subtitle>
                            <div className="my-6">
                                <MainButton
                                    routes={route(
                                        "article.show",
                                        lastUpdated.slug
                                    )}
                                >
                                    Baca Selengkapnya
                                </MainButton>
                            </div>
                            <p className="font-fira font-extralight text-slate-300 text-xs ">
                                Diterbitkan {lastUpdated.updated_at} Oleh
                            </p>
                            <div className="my-8"></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Header.HeaderImage source={"./Image/contoh.png"} />
                    </div>
                </div>
            </Header>
            <div className="block md:hidden w-full bg-slate-950 px-4 md:px-8 lg:px-16 py-8">
                <h1 className="text-slate-200 font-fira font-semibold text-lg tracking-tighter mb-4">
                    Article
                </h1>
                <p className="font-fira text-xs text-slate-200 font-extralight">
                    Jika anda lebih suka belajar dengan membaca, maka Anda
                    berada di tempat yang benar
                </p>
            </div>
            {/* Content */}

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
