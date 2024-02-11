"use client";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import Image from "next/image";

const INITIAL_STATE = {
  imagesArray: [],
  currimg: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "API_INPUT":
      return {
        imagesArray: action.payload.images,
      };
    default:
      return state;
  }
};

function ImageSlider({ images }) {
  const [currimg, setCurrimg] = useState(0);
  const [state, dispatch] = useReducer(imageReducer, INITIAL_STATE);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    dispatch({
      type: "API_INPUT",
      payload: { images: images },
    });
  }, [images]);

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      setCurrimg((prevCurrImg) =>
        prevCurrImg === state.imagesArray.length - 1 ? 0 : prevCurrImg + 1
      );
    }, 2000);
    setTimeoutId(newTimeoutId);
    return () => {
      clearTimeout(newTimeoutId);
    };
  }, [state?.imagesArray, currimg]);

  const imageSrc = useMemo(() => {
    return `${process.env.NEXT_PUBLIC_HOST}/images/vehicle/${state.imagesArray[currimg]}`;
  }, [state.imagesArray, currimg]);

  return (
    <div className="!max-h-[80vh]">
      <div className="bg-gradient-to-bl relative h-[80vh]">
        <Image
          src={imageSrc}
          className=" rounded-b-xl rounded-bl-xl object-cover object-center"
          fill
          priority
          alt={`gfhgf`}
        />
      </div>

      <div className="relative bottom-8 flex justify-center gap-3">
        {state?.imagesArray?.map((val, index) => {
          return (
            <button
              key={index}
              className="w-4 h-1"
              style={{
                backgroundColor: currimg === index ? "white" : "gray",
              }}
              onClick={() => {
                setCurrimg(index);
                clearTimeout(timeoutId);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
