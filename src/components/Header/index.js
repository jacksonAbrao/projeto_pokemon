/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Header() {
  return (
    <header className="header grid justify-items-center">
      <div className="flex flex-row items-center">
        <h1 className="text-gray-600 font-extrabold text-5xl md:text-6xl text-center ">
          Sleeper
        </h1>
        <img
          className="w-0 h-auto md:w-20 ml-2 md:h-auto"
          src="https://image.flaticon.com/icons/png/512/189/189001.png"
        />
      </div>
    </header>
  );
}
export default Header;
