import React from "react";

function Dropdowm({ title, options, func }) {
  return (
    <div
      onChange={(e) => func(e.target.value)}
      className="select-dropdown md:w-24 lg:w-32  cursor-pointer"
    >
      <select className="text-white  ">
        {options.map((elem, idx) => {
          return (
            <option
              key={idx}
              value={elem.value}
              className="text-white bg-[#232323] "
            >
              {elem}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdowm;
