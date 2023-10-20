import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[70vh] -mt-[112px] absolute" style={{backgroundImage: 'url(https://i.ibb.co/1z8Fncw/pexels-mike-bird-120049.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold leading-[70px]">Are you looking to buy <br /> a brand new car?</h1>
            <p className="mb-5">If you want to buy a brand new car, then you have come to the right place. Check out our website, <br /> if you like any Car then contact us. We will appreciate your work </p>
            <Link to='/login'><button className="btn text-white bg-[#2a4f77ec] hover:bg-[#2A4F77]">Get Started</button></Link>
          </div>
        </div>
      </div>
    );  
};

export default Banner;