import React from "react";
import SiteDetails from "./SiteDetails";
import Categories from "./Categories";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading/Loading";
import Reviews from "./Reviews/Reviews";
import AdvertisedSlider from "./AdvertisedSlider/AdvertisedSlider";
import Banner from "./Banner/Banner";
import { Link as LinkRoll } from "react-scroll";
const Home = () => {
  const url = "https://wheels-on-tars-server-katibur.vercel.app/categories";

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-auto">
      <Banner></Banner>
      <div className="my-8">
        <div className="p-6 py-12 dark:bg-cyan-400 dark:text-gray-900 rounded-md">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" />
                <span className="lg:m-3">35% Off</span>
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Plus free shipping! Use code:</span>
                <span className="font-bold text-lg">WOT</span>
              </div>
              <LinkRoll
                to="card"
                spy={true}
                smooth={true}
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                <button>Shop Now</button>
              </LinkRoll>
            </div>
          </div>
        </div>
      </div>
      <AdvertisedSlider></AdvertisedSlider>

      <h1 className="text-center text-3xl font-bold mt-10">Popular Products</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-3">
        {categories &&
          categories.map((category) => (
            <Categories key={category._id} category={category}></Categories>
          ))}
      </div>

      <SiteDetails></SiteDetails>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
