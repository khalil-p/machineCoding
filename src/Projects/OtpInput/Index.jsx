import { useEffect, useRef, useState } from "react";

function OtpInput() {
  const numberOfInputs = 5;
  const refArray = useRef([]);
  const [inputArray, setInputArray] = useState(Array(numberOfInputs).fill(""));

  //   events
  function handleOnChange(e, index) {
    const val = e.target.value.trim();
    // if (val) {
    //     refArray?.current[index].disabled = true;
    // }
    if (inputArray[index + 1]) return; // cannot edit from between

    const value = val.slice(-1);
    if (isNaN(value)) return;
    const arr = [...inputArray];
    arr[index] = value;
    setInputArray(arr);
    value && refArray?.current[index + 1].focus();
  }

  function handleOnKeyDown(e, index) {
    if (!e.target.value && e.key === "Backspace") {
      refArray?.current[index - 1].focus();
    }
  }

  useEffect(() => {
    refArray?.current[0].focus();
  }, []);
  return (
    <>
      <h1>OTP Input</h1>
      <div className="flex gap-2">
        {inputArray.map((i, index) => {
          return (
            <input
              key={index}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              ref={(input) => (refArray.current[index] = input)}
              onChange={(e) => handleOnChange(e, index)}
              value={inputArray[index]}
              className="border border-black rounded-lg w-12 h-12 text-center font-bold text-xl"
              // type="text"
            />
          );
        })}
      </div>
    </>
  );
}

export default OtpInput;
