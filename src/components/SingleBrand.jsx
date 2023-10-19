import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Carousel from "./Carousel";

const SingleBrand = () => {
    const products = useLoaderData()
    return (
        <div>

            <div className="container mx-auto h-[400px] -mt-24">
                <Carousel></Carousel>
            </div>

            <section className="px-4 py-24 mx-auto container mt-56">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                </div>
            </section>


        </div>


    );
};

export default SingleBrand;