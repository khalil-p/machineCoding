import React, { useEffect, useRef, useState } from "react";

function OtpInput() {
  const otpDigitCount = 4;
  const refArray = useRef([]);
  // To jump to next imput box first find the refrence of the next input box and then call a focus function on it
  const [inputArray, setInputArray] = useState(
    new Array(otpDigitCount).fill("")
  );
  function handleOnChange(e, index) {
    const value = e.target.value.trim();
    const currVal = value.slice(-1);
    if (isNaN(value)) return;
    console.log(currVal);
    const arr = [...inputArray];
    // arr.splice(index,1,e.target.value)
    arr[index] = currVal;
    setInputArray(arr);
    value && refArray.current[index + 1]?.focus();
  }
  function handleOnKeyDown(e, index) {
    console.log(e);
    if (!e.target.value && e.key === "Backspace") {
      refArray.current[index - 1]?.focus();
    }
  }
  useEffect(() => {
    refArray.current[0]?.focus();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-3xl font-bold ">Validate Otp</h1>
      <div className="flex gap-2">
        {inputArray.map((item, index) => {
          return (
            <input
              key={index}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={inputArray[index]}
              onChange={(e) => handleOnChange(e, index)}
              ref={(input) => (refArray.current[index] = input)}
              // type="number"
              className=" text-center font-bold text-2xl rounded-xl w-12 h-12 border-2 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          );
        })}
      </div>
    </div>
  );
}

export default OtpInput;
