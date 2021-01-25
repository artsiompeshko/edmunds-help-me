import styles from './link.styles.scss';

const Link = ({ text, link }) => (
  <a class={styles.link} href={link} target="_blank" rel="noreferrer">
    {text}
    <img class={styles['link-img']} src="/assets/icons/link-external.svg" />
  </a>
);

export default Link;
