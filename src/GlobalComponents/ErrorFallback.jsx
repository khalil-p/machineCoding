import ErrorImage from "../assets/500.svg";

const ErrorFallback = () => {
  return (
    <div className=" h-screen flex justify-center border items-center w-full">
      <div>
        <div className="w-[400px]">
          <img src={ErrorImage} alt="error_Image" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h6 className="mt-6 text-md font-semiBold_J">
            Something went wrong, we&apos; working on it
          </h6>

          <button
            className="text-sm bg-[#dc2626] hover:bg-[#f87171] transition-colors shadow-sm shadow-red-300 text-white px-4 py-2 rounded-md"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
