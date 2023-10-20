import PropTypes from 'prop-types';
import { AiOutlineStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidDetail } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SingleProduct = ({ product }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { _id, name, type, price, rating, photo, brandName, description } = product

    const handleAddToCart = () => {
        const myCartProduct = { name, type, price, rating, photo, brandName, description }

        if (user) {
            fetch('https://top-gear-99euiwgyy-rezwanul-haques-projects.vercel.app/mycart', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myCartProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {  
                        toast('Add this product to My card Section')
                    }
                })
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl pb-2">
            <figure><img className="w-full h-[280px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <div className="flex justify-center items-center gap-2">
                        <AiOutlineStar className="text-yellow-400 text-2xl"></AiOutlineStar>
                        <p className="text-xl font-semibold">{rating}.0</p>
                    </div>
                </div>
                <div className="text-base flex justify-center items-center">
                    <div className="pr-5">
                        {
                            <p>{description?.slice(0, 200)}..</p>
                        }
                    </div>
                    <div className="flex flex-col gap-7">
                        <Link to={`/details/${_id}`}><BiSolidDetail className="text-xl bg-slate-200 hover:bg-slate-600  h-[25px] w-[25px] rounded"></BiSolidDetail></Link>
                        <Link to={`/update/${_id}`}><AiFillEdit className="text-xl bg-slate-200 hover:bg-slate-600  h-[25px] w-[25px] rounded"></AiFillEdit></Link>
                    </div>
                </div>

                <div className="flex items-center justify-between text-gray-600 my-3">
                    <div className="text-[17px] font-semibold">
                        <p>Price : {price}</p>
                    </div>
                    <div className="text-[17px] font-semibold">
                        <p>Brand Name : {brandName}</p>
                    </div>
                </div>

                <div className="card-actions  w-full">
                    <button onClick={() => handleAddToCart()} className="btn btn-primary w-full">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product: PropTypes.object
};

export default SingleProduct;

