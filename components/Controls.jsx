const Controls = ({ dec, inc }) => {
  return (
    <div className="-mt-5 md:ml-40 z-10 flex w-24 h-12 rounded-full bg-white items-center justify-around drop-shadow-lg ">
      <div onClick={dec} className="ml-2 mt-1 hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <path
            fill="none"
            stroke="#8585AC"
            strokeWidth="3"
            d="M11 1L3 9l8 8"
          />
        </svg>
      </div>
      <div onClick={inc} className="hover:cursor-pointer mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <path fill="none" stroke="#8585AC" strokeWidth="3" d="M2 1l8 8-8 8" />
        </svg>
      </div>
    </div>
  );
};

export default Controls;
