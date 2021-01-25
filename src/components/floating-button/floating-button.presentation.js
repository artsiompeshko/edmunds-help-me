import style from './floating-button.styles.scss';

const FloatingButton = ({ onClick }) => (
  <button onClick={onClick} title="Help me Edmunds!" class={style['floating-button']}>
    <img src="/assets/icons/logo.svg" />
  </button>
);

export default FloatingButton;
