import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const SingleBrand = () => {
    const products = useLoaderData()
    return (
        <div>

            <h2>Banner</h2>

            <section className="px-4 py-24 mx-auto container">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                </div>
            </section>


        </div>


    );
};

export default SingleBrand;