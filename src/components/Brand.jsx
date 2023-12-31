import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { brand_name, img } = brand

    console.log(brand);

    return (
        <Link to={`/${brand_name}`}><div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={img}
                    alt="image"
                />
                <div className="absolute inset-0 flex justify-start px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-0  hover:opacity-0">
                    <p className="text-4xl text-gray-100 text-left flex justify-start items-start">{brand_name}</p>
                </div>
            </div>
        </div></Link>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
};

export default Brand;

