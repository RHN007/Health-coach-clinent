import React from 'react';

const Statistic = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className='text-4xl font-bold text-center mb-5 text-primary'>Our Statistic</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">20Years</h6>
                    <p className="mb-2 font-bold text-md">Experience</p>
                    <p className="text-gray-700">
                    Health Coaches look at exercise, eating, wellness, and food not just as calories and weight loss, but also on mental, physical, and spiritual terms.
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                        200+
                    </h6>
                    <p className="mb-2 font-bold text-md">WorkOut Session</p>
                    <p className="text-gray-700">
                        It’s something that’s many of the wisest people in history have kept
                        in mind.
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                        1.3K
                    </h6>
                    <p className="mb-2 font-bold text-md">Happy Customers</p>
                    <p className="text-gray-700">
                        For many men, the acquisition of wealth does not end their troubles,
                        it only changes them.
                    </p>
                </div>
              
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
                    <p className="mb-2 font-bold text-md">Programs</p>
                    <p className="text-gray-700">
                        Happiness is when what you think, what you say, and what you do are
                        in harmony.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;