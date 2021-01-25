import { useState, useCallback } from 'preact/hooks';
import Options from './options.presentation';

const OptionsContainer = ({ handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState();

  const handleOnSubmit = useCallback(async query => {
    if (!query) {
      setSearchResult(null);

      return;
    }

    setLoading(true);
    try {
      const result = await (
        await fetch(`https://dev-dsg11-api.carcode.com/carcode/v1/ccapi/navigation?search=${query.trim()}`)
      ).json();

      setSearchResult(result);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Options searchResult={searchResult} loading={loading} handleClose={handleClose} handleOnSubmit={handleOnSubmit} />
  );
};

export default OptionsContainer;
