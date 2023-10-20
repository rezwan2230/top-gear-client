
const Testimonial = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our <span className="text-blue-500 ">clients</span> say
                </h1>

                <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                Displays testimonials and feedback from customers, offering insights into their experiences and satisfaction levels. These testimonials build trust and highlight the business positive aspects for potential customers.
                </p>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “People are drawn to us because of our unwavering commitment to excellence, personalized service, and trust we have cultivated through consistent reliability, innovation, and shared values. We are their top choice.”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                    <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                                </div>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Incredibly impressed with your team work, especially their experience workers and knowledge. Their dedication and talent have had a significant positive impact on my car choose. Looking forward to their future contributions..”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                                    <span className="text-sm text-gray-500">CEO, Jeny Consultency</span>
                                </div>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400 text-base">
                        “Incredibly impressed with your team work, especially their experience workers and knowledge. Their dedication and talent have had a significant positive impact on my car choose. Looking forward to their future contributions..”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                    <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Testimonial;