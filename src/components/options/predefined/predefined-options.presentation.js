import { Link } from './link';

import styles from './predefined-options.styles.scss';

const OPTIONS = [
  {
    text: 'Buying a car',
    link: 'https://www.edmunds.com/car-buying/',
  },
  {
    text: 'Trading in my vehicle',
    link: 'https://www.edmunds.com/appraisal/',
  },
  {
    text: 'Long-Term Road Tests',
    link: 'https://www.edmunds.com/car-reviews/long-term-road-tests/',
  },
  {
    text: 'Dealer Reviews',
    link: 'https://www.edmunds.com/dealerships/',
  },
  {
    text: 'Edmunds videos',
    link: 'https://www.youtube.com/channel/UCF8e8zKZ_yk7cL9DvvWGSEw',
  },
];

const PredefinedOptions = () => (
  <div class={styles['predefined-options']}>
    <div class={styles['predefined-options__separator']}>
      <span class={styles['predefined-options__separator-text']}>popular options</span>
    </div>
    <ul>
      {OPTIONS.map(({ link, text }) => (
        <li key={link}>
          <Link link={link} text={text} />
        </li>
      ))}
    </ul>
  </div>
);

export default PredefinedOptions;
