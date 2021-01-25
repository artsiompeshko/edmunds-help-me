import { Header } from '../header';
import { Loading } from '../loading';
import { CustomSearch } from './custom-search';

import styles from './options.styles.scss';
import { PredefinedOptions } from './predefined';
import { SearchResult } from './search-result';

const Options = ({ loading, handleClose, handleOnSubmit, searchResult }) => (
  <div class={styles.options}>
    <Header onClose={handleClose}>Edmunds help me with</Header>
    <div class={styles['options__content']}>
      <CustomSearch handleOnSubmit={handleOnSubmit} />
      {loading && (
        <div class={styles['options__loading']}>
          <Loading />
        </div>
      )}
      {!loading &&
        (searchResult ? (
          <div class={styles['options__search-result']}>
            <SearchResult searchResult={searchResult} />
          </div>
        ) : (
          <PredefinedOptions />
        ))}
    </div>
  </div>
);

export default Options;
