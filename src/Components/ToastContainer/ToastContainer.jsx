import './ToastContainer.css';
import React, { useState } from 'react';
import Toast from '../Toast/Toast';
import uniqid from 'uniqid';

const ToastContainer = () => {
  const [toastList, setToastList] = useState([]);

  // Call this function to add toasts
  const addToast = (type, message, delay) => {
    const toastMessage = {
      type: type,
      message: message,
      delay: delay,
      id: uniqid(),
    };

    setToastList([...toastList, toastMessage]);
  };

  return (
    <>
      <div className='Toast__Wrapper'>
        {toastList.map((toastMessage) => (
          <Toast
            key={toastMessage.id}
            toastMessage={toastMessage}
            toastList={toastList}
            setToastList={setToastList}
          />
        ))}
      </div>
      <button onClick={addToast('success', 'It Works!', 1000)}>TOAST</button>
    </>
  );
};

export default ToastContainer;
