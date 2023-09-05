import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Loading from "./Loading";
import poster from "../assets/postergif.gif";
import map from "../assets/MAP.jpg";

const state1 = [
  {
    state: "Andhra Pradesh",
    cities: [
      "Visakhapatnam",
      "Srikakulam",
      "Anataput",
      "Chittor",
      "Krishna",
      "Annathapuramu",
      "Anantapur",
    ],
  },
  {
    state: "Assam",
    cities: ["Kamrup"],
  },
  {
    state: "Chattisgarh",
    cities: ["Raipur", "Durg"],
  },
  {
    state: "Delhi",
    cities: ["Delhi"],
  },
  {
    state: "Gujrat",
    cities: [
      "Sabar kantha",
      "Ahmedabad",
      "Rajkot",
      "Valsad",
      "Surat",
      "Bharuch",
      "Mehsana",
      "Vadodara",
      "Jamnagar",
      "Sachin",
      "Panchmahal",
      "Navsari",
      "Surat",
    ],
  },
];

const Poster = () => {
  const [isLoading, setisLoading] = useState(true);
  const [city, setcity] = useState("");
  const [isdowncity, setisdowncity] = useState(false);
  const [isdownstate, setisdownstate] = useState(false);
  const [state, setstate] = useState("");

  const toogledropcity = () => {
    setisdowncity(!isdowncity);
  };
  const toogledropstate = () => {
    setisdownstate(!isdownstate);
  };



  const changestate = (city) => {
    const matchingStateItem = state1.find((item) => {
      const foundCity = item?.cities?.find((cityItem) => city === cityItem);
      return foundCity !== undefined;
    });

    if(matchingStateItem){
      console.log(matchingStateItem.state)
      setstate(matchingStateItem.state);
    }
    else{
      console.log("not found");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);


  return (
    <Wrapper>
      {isLoading ? <Loading /> : ""}
      <div
        className="flex relative rounded-lg mt-[5vh] gap-10 items-center md:max-h-[70vh] "
        id="searchposter"
      >
        <div className="hidden absolute opacity-10 top-0 md:flex w-full max-h-[75vh] ">
          <img
            src={map}
            alt="MAP"
            className="max-h-[100vh] w-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-fit bg-[#343434] rounded-xl  p-[5vh] md:ml-5 mb-10 z-10 searchtext">
          <h1 className="md:text-[5vh] text-[8vh] font-montserrat text-[#F9F6EE] font-bold">
            Search E-wate facilities
          </h1>
          <p className=" text-gray-400 text-lg font-montserrat font-medium">
            Fill up the Location and get the nearest E-waste facilities
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="md:flex  md:gap-5">
              <div className="relative">
                <p className="font-montserrat font-semibold text-[#F9F6EE]">
                  City/district
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onClick={() => {
                    toogledropcity();
                  }}
                  value={city}
                  placeholder="Select City/district"
                />
                {!isdowncity ? (
                  ""
                ) : (
                  <div className="absolute z-10 w-full bg-[#222222] p-4 rounded-lg h-[20vh] overflow-auto">
                    {state1?.map((item) =>
                      item?.cities?.map((city, index) => (
                        <h1
                          className="font-medium rounded-md p-2 font-montserrat cursor-pointer hover:bg-[#ff5757]"
                          key={index}
                          onClick={() => {
                            setcity(city);
                            toogledropcity();
                            changestate(city);
                          }}
                        >
                          {city}
                        </h1>
                      ))
                    )}
                  </div>
                )}
              </div>
              {/* Dropdown state */}
              <div className="relative">
                <p className="font-poppins font-semibold md:mt-0 mt-5 text-[#F9F6EE]">
                  State
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onClick={() => {
                    toogledropstate();
                  }}
                  value={state}
                  placeholder="Select City/district"
                />
                {!isdownstate ? (
                  ""
                ) : (
                  <div className="absolute w-full bg-[#222222] p-4 rounded-lg h-[20vh] overflow-auto">

                    {state1?.map((item, index) => (
                      <h1
                        className="font-medium rounded-md p-2 font-montserrat cursor-pointer hover:bg-[#ff5757]"
                        key={index}
                        onClick={() => {
                          setstate(item.state);
                          toogledropstate();
                        }}
                      >
                        {item.state}
                      </h1>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-montserrat font-semibold p-4 rounded-lg  w-fit"
              onClick={() => register()}
            >
              Search
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-full justify-center ">
          <img
            src={poster}
            alt=""
            className="h-[78vh] bg-cover bg-center rounded-xl"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Poster;
