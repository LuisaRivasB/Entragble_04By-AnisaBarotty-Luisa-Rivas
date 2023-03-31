import React from 'react';

const Navbar = ({ actionBtnVisivle }) => {
  return (
    <nav className="w-full flex flex-row justify-around items-center content-center text-center">
      <h1 className="text-3xl font-bold text-slate-50">Users Admin</h1>
      <button type="button" class="p-1 rounded-r-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." onClick={actionBtnVisivle}>
        <i className="bx bxs-user-plus bx-tada text-3xl"></i>
        <span>Add new user</span>
      </button>
    </nav>
  );
};

export default Navbar;
