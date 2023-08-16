import React, { useState } from "react";

function Header(props) {
  const { getWords } = props;
  return (
    <div className=" w-10/12 h-auto m-auto mt-4">
      <div>
        <h1 className="text-blue-400 text-5xl text-center pt-10 font-bold">
          เที่ยวไหนดี ?
        </h1>
      </div>
      <div className="flex flex-col">
        <h4 className="mt-20 font-bold text-lg">ค้นหาที่เที่ยว</h4>
        <input
          type="text"
          className="text-center border-solid border-2 mt-4 hover:border-dotted h-10"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          onChange={(e) => {
            getWords(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
