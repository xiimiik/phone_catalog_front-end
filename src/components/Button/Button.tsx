import { useState } from 'react';

import cn from 'classnames';
import s from './Button.module.scss';

export const Button = () => {
  const [select, setSelect] = useState(false);

  return (
    <button
      onClick={() => setSelect(selected => !selected)}
      className={cn(s.btn, {
        [s.btn_selected]: select,
      })}
    >
      { select ? 'Added' : 'Add to cart' }
    </button>
  );
};
