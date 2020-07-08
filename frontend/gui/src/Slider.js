import React from 'react';

const Slider = () => {
    return ( 
        <React.Fragment>
                            {/* <!-- slider --> */} 
                <section class="about-us-slider swiper-container p-relative">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide slide-item">
                            <img src="assets/img/about/blog/1920x700/banner-1.jpg" class="img-fluid full-width" alt="Banner" />
                            <div class="transform-center">
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-lg-7 align-self-center">
                                            <div class="right-side-content">
                                                <h1 class="text-custom-white fw-600">Increase takeout sales by 50%</h1>
                                                <h3 class="text-custom-white fw-400">with the largest delivery platform in the U.S. and Canada</h3>
                                                <a href="restaurant.html" class="btn-second btn-submit">Learn More.</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overlay overlay-bg"></div>
                        </div>
                        <div class="swiper-slide slide-item">
                            <img src="assets/img/about/blog/1920x700/banner-2.jpg" class="img-fluid full-width" alt="Banner" />
                            <div class="transform-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8 align-self-center">
                                            <div class="right-side-content text-center">
                                                <h1 class="text-custom-white fw-600">Increase takeout sales by 50%</h1>
                                                <h3 class="text-custom-white fw-400">with the largest delivery platform in the U.S. and Canada</h3>
                                                <a href="restaurant.html" class="btn-second btn-submit">Learn More.</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overlay overlay-bg"></div>
                        </div>
                        <div class="swiper-slide slide-item">
                            <img src="assets/img/about/blog/1920x700/banner-3.jpg" class="img-fluid full-width" alt="Banner" />
                            <div class="transform-center">
                                <div class="container">
                                    <div class="row justify-content-end">
                                        <div class="col-lg-7 align-self-center">
                                            <div class="right-side-content text-right">
                                                <h1 class="text-custom-white fw-600">Increase takeout sales by 50%</h1>
                                                <h3 class="text-custom-white fw-400">with the largest delivery platform in the U.S. and Canada</h3>
                                                <a href="restaurant.html" class="btn-second btn-submit">Learn More.</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overlay overlay-bg"></div>
                        </div>
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </section>
                {/* <!-- Browse by category --> */}
                <section class="browse-cat u-line section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-header-left">
                                    <h3 class="text-light-black header-title title">Browse by cuisine <span class="fs-14"><a href="restaurant.html">See all restaurant</a></span></h3>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="category-slider swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon icon-parent text-custom-white bg-light-green"> <i class="fas fa-map-marker-alt"></i>
                                                </div> <span class="text-light-black cat-name">Brooklyn</span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-1.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Italian </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-2.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Thai </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-3.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Chinese </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-4.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Mexican </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-5.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Indian </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-6.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Lebanese </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-7.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">Japanese </span>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="restaurant.html" class="categories">
                                                <div class="icon text-custom-white bg-light-green ">
                                                    <img src="assets/img/restaurants/125x125/cuisine-8.jpg" class="rounded-circle" alt="categories" />
                                                </div> <span class="text-light-black cat-name">American </span>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Add Arrows --> */}
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Browse by category --> */}
         
        </React.Fragment>
     );
}
 
export default Slider;