import { useCallback, useState } from 'preact/hooks';
import Popup from './popup.presentation';

const PopupContainer = () => {
  const [closed, setClosed] = useState(false);

  const handleClose = useCallback(() => {
    setClosed(true);
  }, [setClosed]);

  return <Popup handleClose={handleClose} closed={closed} />;
};

export default PopupContainer;
