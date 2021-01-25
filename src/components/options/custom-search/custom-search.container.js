import { useCallback, useState } from 'preact/hooks';

import CustomerSearch from './custom-search.presentation';

const CustomSearchContainer = ({ handleOnSubmit }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();
      event.stopPropagation();

      setLoading(true);
      await handleOnSubmit(query.trim());
      setLoading(false);
    },
    [query],
  );

  const handleQueryChange = useCallback(
    event => {
      if (query && !event.currentTarget.value) {
        handleOnSubmit('');
      }

      setQuery(event.currentTarget.value || '');
    },
    [query, handleOnSubmit],
  );

  return (
    <CustomerSearch query={query} handleQueryChange={handleQueryChange} handleOnSubmit={onSubmit} loading={loading} />
  );
};

export default CustomSearchContainer;
