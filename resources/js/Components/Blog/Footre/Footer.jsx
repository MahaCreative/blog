import React from "react";

export default function Footer() {
    return (
        <div className="text-white bg-slate-950">
            <div className="px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
                <div>
                    <h3 className="text-3xl mb-16 font-fira font-bold">
                        MahaCreative
                    </h3>
                    <p className="font-fira font-light text-xs text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Non, id quibusdam asperiores error atque officia
                        nisi iusto dicta voluptatibus minima ea officiis impedit
                        eum vitae autem odio similique, ullam quisquam.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <h3 className="text-white font-bold text-xl mb-2">
                                Index
                            </h3>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-white font-bold text-xl mb-2">
                                Index
                            </h3>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                            <p className="text-slate-400 font-light text-xs mb-2">
                                HOME
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-2">
                            News Letter
                        </h3>
                        <p className="text-slate-400 font-light text-xs mb-2 ">
                            Bergabunglah dengan 23.000+ lainnya dan jangan
                            pernah ketinggalan screencast, tips, tutorial, dan
                            lainnya.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
