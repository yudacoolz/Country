import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CountryListPage = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchcountry = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        const data = res.data;
        console.log("api : ", data);
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchcountry();
  }, []);
  console.log("usestate country", country);
  return (
    <div>
      <div className="my-8 flex flex-col  items-center">
        <img src="/map.jpg" className="md:w-1/4" />
        <h1 className="text-3xl font-bold md:text-left text-center">
          Country List
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {country.length > 0 ? (
          country.map((item, index) => (
            <Link
              to={`country/${encodeURIComponent(item.name.common)}`}
              key={index}
              className="border-2 hover:bg-slate-700 hover:text-white mb-2 rounded-lg md:w-[30%] w-full p-4 flex items-center justify-between transition-all ease-in-out"
            >
              <div className="">
                {/* <div className="flex gap-2 mb-4">
                  <h2 className="font-semibold md:text-3xl text-xl">
                    {item.name.common}
                  </h2>
                </div> */}
                {/* <Link
                className="p-2 bg-red-500 text-white rounded-lg"
                to={
                  item.name.nativeName &&
                  Object.keys(item.name.nativeName).length > 0
                    ? `country/https://restcountries.com/v3.1/name/${
                        item.name.nativeName[
                          Object.keys(item.name.nativeName)[0]
                        ].common
                      }`
                    : "#"
                }
              >
                Go To
              </Link> */}
                <Link
                  className="font-semibold md:text-2xl text-xl"
                  to={`country/${encodeURIComponent(item.name.common)}`}
                >
                  {item.name.common}
                </Link>
              </div>
              <div>
                <img
                  src={item.flags.png}
                  className="w-[70px] h-[70px] rounded-full border-2 border-white"
                />
              </div>
            </Link>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};
