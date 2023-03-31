import React from 'react'

const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className="flex flex-row justify-center items-center absolute inset-0 bg-[rgba(255_255_255_/_ 0.6)] text-black">
          { children }
        </div>
      )}
    </>
  )
}

export default Modal