import React from 'react'
import Slider from 'react-slick';

const ProductCarousel = () => {
    const images = [
        'https://ps.w.org/woo-product-carousel-slider-and-grid-ultimate/assets/banner-1544x500.jpg?rev=2812931=Slide+1',
        'https://www.tutorialrepublic.com/snippets/designs/multiple-item-product-carousel.png=Slide+2',
        'https://www.kadencewp.com/help-center/wp-content/uploads/sites/14/2023/04/Product-Carousel-Block-1024x550.jpg=Slide+3',
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
    };
    return (
        <div className="w-full overflow-hidden">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[60vh] object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductCarousel