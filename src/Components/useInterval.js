import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const action = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(action, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
