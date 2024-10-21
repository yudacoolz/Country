import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { DeleteCountry } from "../redux/slice/countrySlice";
import { Link } from "react-router-dom";

const ContributeCountryPage = () => {
  const contributeCountry = useSelector((state) => state.country.countrys);
  console.log("contributeCountry", contributeCountry);
  const dispatch = useDispatch();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountrys = async () => {
      if (contributeCountry && contributeCountry.length > 0) {
        try {
          const fetchCountry = await Promise.all(
            contributeCountry.map(async (nama) => {
              const res = await axios.get(
                `https://restcountries.com/v3.1/name/${nama}`
              );
              return res.data[0];
            })
          );
          setCountry(fetchCountry);
        } catch (error) {
          console.error("Error fetching country data:", error);
        }
      }
    };

    fetchCountrys();
  }, [contributeCountry]);

  console.log("country coop", country);

  return (
    <div>
      <div className="relative">
        <img
          src="/background.jpg"
          className="w-full h-60 object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Contribute Country List
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {country.length > 0 ? (
          country.map((item, index) => (
            <div
              key={index}
              className="border-2 hover:bg-slate-700 hover:text-white mb-2 rounded-lg md:w-[30%] w-full p-4 flex items-center justify-between transition-all ease-in-out"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={item.flags.png}
                  className="w-[50px] h-[50px] rounded-full border-2 border-white"
                />
                <Link
                  to={`/country/${item.name.common}`}
                  className="font-semibold text-xl"
                >
                  {item.name.common}
                </Link>
              </div>
              <div>
                <div className="mt-4">
                  <button
                    className="bg-red-600 p-2 text-white rounded-lg whitespace-nowrap"
                    onClick={() => dispatch(DeleteCountry(item.name.common))}
                  >
                    Cancel Coop
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </div>
  );
};

export default ContributeCountryPage;
