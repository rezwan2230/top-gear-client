
const Carousel = () => {    

    return (
        <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/N7gqHyn/lamborghini.jpg" className="w-full rounded-lg bg-center h-[280px] md:h-[500px] lg:h-[700px]" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-center h-[280px] md:h-[500px] lg:h-[700px]">
                <img src="https://i.ibb.co/3z3JfmV/pexels-daniel-spase-951318.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-center h-[280px] md:h-[500px] lg:h-[700px]">
                <img src="https://i.ibb.co/rty3rxD/pexels-j-r-my-glineur-16119672.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full bg-center h-[280px] md:h-[500px] lg:h-[700px]">
                <img src="https://i.ibb.co/yW1mMNV/pexels-rodrigo-chabl-18502430.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;