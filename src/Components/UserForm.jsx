import React from 'react';
import { emptyValueForm } from '../Services/index';

const UserForm = ({
  handleCreateUpdate,
  register,
  handleSubmit,
  reset,
  isVisible,
  handleClickVisible,
  idUserToEdit,
}) => {
  const myHandleSubmit = async (data) => {
    await handleCreateUpdate(data);
    reset(emptyValueForm);
  };

  return (
    <div>
      {isVisible && (
        <div className="h-screen overflow-hidden flex flex-row justify-center items-center absolute inset-0 backdrop-blur-xl  bg-white  opacity-80">
          <form onSubmit={handleSubmit(myHandleSubmit)} className="w-96 10px bg-gradient-to-t from-yellow-300 via-green-300 to-blue-600 rounded-3xl">
            <button onClick={handleClickVisible} className="button1">
              <i class="bx-tada-hover text-white text-3xl p-0 bx bxs-x-square border-0 opacity-100 text-3xl"></i>
            </button>
            <h2 className="text-4xl ml-20 font-bold">{idUserToEdit ? 'Edit' : 'Add'} User</h2>
            <div className="flex flex-col mt-3 ml-10 mb-3 gap-3 text-indigo-900 font-bold ">
              <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  name="name"
                  id="firstName"
                  required
                  {...register('first_name')}
                  className="text-violet-800  rounded-lg p-1 outline-0 shadow-lg shadow-indigo-500/100"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="name"
                  id="lastName"
                  required
                  {...register('last_name')}
                  className="text-violet-800  rounded-lg p-1 outline-0 shadow-lg shadow-indigo-500/100"
                />
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  {...register('email')}
                  className="text-violet-800 rounded-lg p-1 outline-0 shadow-lg shadow-indigo-500/100"
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  {...register('password')}
                  className="text-violet-800 rounded-lg p-1 outline-0 shadow-lg shadow-indigo-500/100"
                />
              </div>
              <div>
                <label htmlFor="birthday">Birthday: </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  required
                  {...register('birthday')}
                  className="text-indigo-900 rounded-lg p-1 outline-1 shadow-lg shadow-indigo-500/100"
                />
              </div>
              <div>
                <button className="button2">
                  {idUserToEdit ? (
                    <i class="bx bxs-edit-alt bx-tada-hover border-0 text-4xl text-white"></i>
                  ) : (
                    <i class=" bx bxs-user-plus bx-tada-hover border-0 bx-tada text-4xl text-white"></i>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
