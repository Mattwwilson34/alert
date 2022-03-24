import '../App/App.css';
import './Toast.css';
import React, { useEffect, useState, useCallback } from 'react';

export default function Toast(props) {
  const { toastList, setToastList } = props;
  const { type, message, id, timeout } = props.toastMessage;
  const [visible, setVisible] = useState(true);

  const deleteToast = useCallback(() => {
    const toasts = toastList.filter((toastMessage) => toastMessage.id !== id);
    setToastList([...toasts]);
  }, [toastList, setToastList, id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      deleteToast();
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout, deleteToast]);

  if (visible) {
    return (
      <>
        <div className={`Toast__Container ${type}`}>
          <div className='Toast__Message'>{message}</div>
          <div className='Toast__Close' onClick={deleteToast}>
            x
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
