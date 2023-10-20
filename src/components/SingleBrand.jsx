import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Carousel from "./Carousel";

const SingleBrand = () => {
    const products = useLoaderData()
    return (
        <div>

            <div className="md:px-5 lg:px-0  lg:container mx-auto md:h-[400px] h-[400px] -mt-24">
                <Carousel></Carousel>
            </div>

            <div className="container md:mx-auto -mt-36 md:-mt-0 md:-mt-15 lg:mt-48 ">
                <div className="px-8 py-2 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                        <div className="md:text-2xl lg:text-5xl absolute bg-slate-500 p-2">
                            <span className="">Get up to 50% off your first order + free shipping,&nbsp;</span>
                            <a href="#" rel="noopener noreferrer" className="underline "><Link to='/'><span>sign up</span></Link></a> today!
                        </div>
                        <a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
                            <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
                                <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
                            </svg>
                            <span className="hover:underline focus-visible:underline">Gift Cards</span>
                        </a>
                    </div>
                </div>
            </div>

            <section className="px-4 md:px-6 py-10 md:pt-24 mx-auto lg:container">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:mt-10">
                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                </div>
            </section>


        </div>


    );
};

export default SingleBrand;