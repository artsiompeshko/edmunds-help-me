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

    const result = await (
      await fetch(
        `http://carcode-api-web-68628.int-media-alb.us-east-1.carcode-dev.accounts.edmunds.com/carcode/navigation?search=${query.trim()}`,
      )
    ).json();

    setLoading(false);

    setSearchResult(result);
  }, []);

  return (
    <Options searchResult={searchResult} loading={loading} handleClose={handleClose} handleOnSubmit={handleOnSubmit} />
  );
};

export default OptionsContainer;
