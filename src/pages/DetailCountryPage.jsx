import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddCountry } from "../redux/slice/CountrySlice";
import { useSelector } from "react-redux";

export const DetailCountryPage = () => {
  const { nameCountry } = useParams();
  const [country, setCountry] = useState([]);
  const [showText, setShowText] = useState(false);

  const dispatch = useDispatch();
  const storeCountry = useSelector((state) => state.country.countrys);
  console.log("storeCountry", storeCountry);
  const existCountry = storeCountry.find((item) => item === nameCountry);
  console.log("existCountry", existCountry);
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${nameCountry}`
        );
        const data = res.data;
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetail();
  }, []);
  console.log("country detail", country);
  // console.log("Country common name:", country[0].name.common);
  useEffect(() => {
    if (country.length > 0) {
      console.log("Country common name:", country[0].name.common);
    }
  }, [country]);

  const handleButton = () => {
    if (country.length > 0) {
      const countryName = country[0].name.common;
      console.log("Country common name:", countryName);
      dispatch(AddCountry(countryName));
      setShowText(true);
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          src="/background.jpg"
          className="w-full h-60 object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="lg:text-7xl text-4xl font-bold text-white tracking-wider">
            {nameCountry}
          </h1>
        </div>
      </div>
      <h2 className="my-3 lg:text-5xl text-2xl font-bold md:text-left text-center"></h2>

      {country &&
        country.map((item, index) => (
          <div key={index} className=" rounded-lg md:p-4 p-2">
            {/* <h2 className="my-3 text-5xl font-bold">{item.name.common}</h2> */}

            <div className="flex md:flex-row flex-col-reverse lg:gap-8 gap-9 justify-between">
              {/* LEFT SIDE INFO */}
              <div className="font-medium md:text-2xl text-xl flex flex-col flex-1 gap-2 rounded-lg border shadow-lg p-4">
                <p>Language : {Object.keys(item.languages)[0]}</p>
                <p>
                  Currency :{" "}
                  {item.currencies[Object.keys(item.currencies)[0]].name}
                </p>
                <p>
                  Independent :{" "}
                  {item.independent
                    ? "Independent Country"
                    : "Not Independent Country"}
                </p>
                <p>Capital : {item.capital}</p>

                <p>Flag Description : {item.flag}</p>
                <p>Symbol : {item.altSpellings}</p>
                <p>Population : {item.population}</p>
              </div>

              {/* RIGHT SIDE INFO */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src={item.flags.png}
                  className="mb-4 md:w-auto w-48 rounded-full md:h-2/4 h-48"
                />
                <div className="w-full d:text-right text-center mt-8">
                  <Link
                    className="border-2 rounded-lg bg-slate-800 text-green-600 p-2 hover:bg-white hover:text-green-700 transition-all ease-in-out"
                    to={item.maps.googleMaps}
                  >
                    Go to Map
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
              {showText && (
                <p className="text-lg font-medium text-center text-red-600">
                  {!existCountry ? "Nope, try again" : ""}
                </p>
              )}
              <button
                className={`w-fit rounded-md p-3 text-white  ${
                  existCountry ? "bg-red-800" : "bg-slate-700"
                } `}
                onClick={() => handleButton()}
                disabled={existCountry}
              >
                {existCountry ? "Country already coop " : "Contribute"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetailCountryPage;
