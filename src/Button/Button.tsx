import { useState } from 'react';

import s from './Button.module.scss';
import cn from 'classnames';

export const Button = () => {
  const [select, setSelect] = useState(false);

  return (
    <button
      onClick={() => setSelect(selected => !selected)}
      className={cn(s.btn, {
      [s['btn_selected']]: select
    })}>
      { select ? 'Added' : 'Add to cart' }
    </button>
)};
