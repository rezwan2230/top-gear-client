import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const MyCartDesign = ({ product, products, setProducts }) => {
    const { _id, name, price, photo, brandName, description } = product

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://top-gear-99euiwgyy-rezwanul-haques-projects.vercel.app/mycart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = products.filter(product => product._id !== _id)
                            setProducts(remaining)
                    }
                })
            }
        })
    }
    return (
        <div>
            <div className="container mx-auto ">
                <div className="relative flex  h-[250px] w-full max-w-[48rem]  rounded-lg  bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: 'gray', color: 'black' }}>

                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={photo}
                            alt="image"
                            className="h-[300px] w-full object-cover"
                        />
                    </div>
                    <div className="p-6 flex justify-center items-center">
                        <div className=''>
                            <span className="mb-3 mt-4 rounded-lg max-w-fit block font-sans text-base font-semibold uppercase leading-relaxed " style={{ backgroundColor: "gray", categoryBgColor: "gray" }}>
                                {brandName}
                            </span>
                            <h4 className="mb-2  block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
                                {name}
                            </h4>
                            <div className="text-base  ">
                                {
                                    <p>{description.slice(0, 100)}..</p>
                                }
                                <p className="mb-8  mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                                    <span className="font-semibold" style={{ color: 'blue' }}>${price}</span>
                                </p>
                            </div>
                        </div>
                        <div className='-mt-44'>
                            <MdDelete onClick={() => handleDelete(_id)} className='text-3xl'></MdDelete>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyCartDesign.propTypes = {
    product: PropTypes.object
};

export default MyCartDesign;
