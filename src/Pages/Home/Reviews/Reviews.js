import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Review.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Reviews = () => {
    return (
        <div>
            <h2 className='text-center mt-8 text-3xl font-bold'>Top Reviews</h2>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu8e2GsH7h1nFRaev9zT8mw1so1_eOMD6XURjdKw=w40-h40-p-rp-mo-br40"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Lindsey C.</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    I’ve sold several pieces of my old camera gear using Gear Focus and love it! Yes, the seller fees are less than eBay, which is great, but for me it’s the fraud protection that keeps me coming back and using their platform. I have so much more piece of mind selling my my stuff through Gear Focus. It’s obvious to me that they truly care about the filmmaking.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu90JHMwE5un3NE81Wf24hTPCbGoE47ebsulm-n8UA=w60-h60-p-rp-mo-br100"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Thomas L. Archambault</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            6 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    My new go to to sell and buy photo and video equipment. Once you try it you won't want to go back to the old bay of E. Professional and fast costumer service, reasonable selling fees. I've wished for a website like this one for years. Musicians got Reverb.com and image professionals now have Gear Focus!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu9T1BeKVEc2T9MGBPhL8fhVzxdtz6iKxUBE-r-bWA=w60-h60-p-rp-mo-br100"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Chris Brockhurst</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            7 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    Selling expensive gear is very hard when using other sites, as I ran into a ton of scammers. With gear focus, I was able to sell my gear safely to people who were actually interested. Safety for the seller and customer is extremely important and gear focus does just that.Safety for the seller and customer is extremely important and gear focus does just that.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu-7UHlTgOxc7vCb5fyCIBUTWOKdyPD9LSXQsONr=w60-h60-p-rp-mo-br100"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Brandon Johnson</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    Absolutely amazing experience selling and buying camera gear. It is so nice to have a place to specifically catered towards buying the gear I need for my business without worrying about paying so much in fees! Highly recommend!
                                    Safety for the seller and customer is extremely important and gear focus does just that.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu8EQ-FamWdIrg_1tjAHb7PgUpHu8JNec99hqTzB-g=w60-h60-p-rp-mo-br100"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Rich Forsen</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    Lens Lab has been WONDERFUL to deal with as a seller, and
                                    their customer service is human and real. They allow me to
                                    post into an audience that I know will have interest in my
                                    gear, while not charging the hefty processing / listing fees
                                    that eBay typically does. I've had some great interactions
                                    with both the staff at GF and the people I've sold to through
                                    the platform.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu8LY_Jf6cpFo8-FCPbPUTcyRhxa77JFes319J7V=w36-h36-p-rp-mo-br100"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Doug Newton</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    I have had incredible service with Lens Lab. All of the automated processes have functioned smoothly and the interaction is user-friendly without having to contact support. I have bought and sold (sold more than bought) about 8 items totaling over $15,000. On one occasion I needed their assistance to work through a problem with a customer.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/a-/ACNPEu-MDro-vrWl2jD_EVstpAHHUJbsrSXMnrGR_1pbqw=w60-h60-p-rp-mo-br100"
                                            alt=""
                                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Bill Scott</h4>
                                        <span className="text-xs dark:text-gray-400">
                                            4 days ago
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>
                                    Lens Lab has great customer service. I recently sold some gear through them and needed some assistance with the transaction. They actually answered the phone and resolved my issue quickly. This was my first sale through their website and the whole process was easy to do. Based on my experience I highly recommend them.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>

        </div>
    );
};

export default Reviews;