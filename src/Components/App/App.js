import React, { useState } from 'react';
import Toast from '../Toast/Toast';
import uniqid from 'uniqid';

export default function App() {
  const [toastList, setToastList] = useState([]);

  const addToast = (type, message, timeout) => {
    const toastMessage = {
      type: type,
      message: message,
      timeout: timeout,
      id: uniqid(),
    };

    setToastList([...toastList, toastMessage]);
  };

  const danger = ['danger', 'danger', 10000000];
  const info = ['info', 'Info', 4000];
  const warning = ['warning', 'Warning', 2000];
  const success = ['success', 'Success', 6000];

  return (
    <div className='App'>
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
      <button onClick={() => addToast(...danger)}>danger!</button>
      <button onClick={() => addToast(...info)}>Info!</button>
      <button onClick={() => addToast(...warning)}>Warning!</button>
      <button onClick={() => addToast(...success)}>Success!</button>
    </div>
  );
}
