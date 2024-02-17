const Signin = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-between bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative"
        style={{ width: "354px", height: "382px" }}
      >
        <h1 className="text-3xl font-bold text-center">SignUp</h1>
        <form action="">
          <div className="relative my-4 ">
            {" "}
            <input
              type="email"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm duration-300 transform -translate-x-1/2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your email
            </label>
          </div>
          <div className="relative my-4 ">
            {" "}
            <input
              type="password"
              className="block w-72 py-2.5 px-0 mt-[-15px] text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm duration-300 transform -translate-x-1/2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Create password
            </label>
          </div>
          <div className="relative my-4 ">
            <input
              type="password"
              className="block w-72 py-2.5 px-0 py-0  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm duration-300 transform -translate-x-1/2 scale-75 bottom-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          <div className="flex items-center my-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-400">
              I agree with
              <a href="#" className="text-blue-500 pl-2">
                Privacy Policy
              </a>
            </span>
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300  "
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
