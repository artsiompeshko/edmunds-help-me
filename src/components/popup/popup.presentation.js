import styles from './popup.styles.scss';

const Popup = ({ handleClose, closed }) =>
  !closed && (
    <div class={styles.popup}>
      <h4>Let me know if there’s anything I can help you with!</h4>
      <button onClick={handleClose} class={styles['popup__close']}>
        <img src="/assets/icons/close.svg" />
      </button>
    </div>
  );

export default Popup;
