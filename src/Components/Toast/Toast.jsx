import '../App/App.css';
import './Toast.css';
import useInterval from '../useInterval';

export default function Toast(props) {
  const { toastList, setToastList } = props;
  const { type, message, id, delay } = props.toastMessage;

  // Deletes toast from state array
  const deleteToast = () => {
    const toasts = toastList.filter((toastMessage) => toastMessage.id !== id);
    setToastList([...toasts]);
  };

  // Custom hook prevents setInterval from reseting on toat rerender
  useInterval(() => {
    deleteToast();
  }, delay);

  return (
    <>
      <div className={`Toast__Container ${type}`}>
        <div className='Toast__Message'>{message}</div>
        <div className='Toast__Close' onClick={deleteToast}>
          <span className='Toast__CloseIcon'>&#10005;</span>
        </div>
      </div>
    </>
  );
}
