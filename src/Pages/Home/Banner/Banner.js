import React from "react";
import { Link as LinkRoll } from "react-scroll";

const Banner = () => {
  return (
    <div className="my-10">
      <section className="relative bg-[url(https://i.ibb.co/ZmXPdW8/Bikes-Under-Rs-2-lakh.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-500">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                Favorite Bike.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-blue-700">
              Buy your dream bike and sell if you need to.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <LinkRoll
                to="card"
                spy={true}
                smooth={true}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                <button>Buy Now</button>
              </LinkRoll>
              <LinkRoll
                to="reviews"
                spy={true}
                smooth={true}
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                <button>See Reviews</button>
              </LinkRoll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
