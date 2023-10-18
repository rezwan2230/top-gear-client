import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
    const { _id, name, type, price, rating, photo, brandName, description } = product

    return (

        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className="w-full h-[280px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-center items-center gap-2">
                        <AiOutlineStar className="text-yellow-400 text-2xl"></AiOutlineStar>
                        <p className="text-xl font-semibold">{rating}.0</p>
                    </div>
                </div>
                <div className="text-base">
                    {
                        <p>{description.slice(0,200)}<Link><span className="text-blue-700 underline ml-2">Read More...</span></Link></p>
                    }
                </div>
                <div>
                    <p>price</p>
                </div>
                <div className="card-actions  w-full">
                    <button className="btn btn-primary w-full">Add to Cart</button>
                </div>
            </div>
        </div>



    );
};


// stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
export default SingleProduct;