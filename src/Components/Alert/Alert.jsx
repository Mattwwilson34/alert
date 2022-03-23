import './Alert.css';
import React, { useState, useEffect } from 'react';

const Alert = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      props.setClicked(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [visible, props]);

  if (visible) {
    return <div>MESSAGE!</div>;
  } else {
    return null;
  }
};

export default Alert;
