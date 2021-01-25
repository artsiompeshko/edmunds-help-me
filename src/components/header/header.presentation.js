import styles from './header.styles.scss';

const Header = ({ onClose, onBack, children }) => (
  <header class={styles.header}>
    <h6>{children}</h6>
    <button class={styles['header__back']} onClick={onClose}>
      <img src="/assets/icons/close.svg" />
    </button>
  </header>
);

export default Header;
