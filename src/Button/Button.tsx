import s from './Button.module.scss';
import cn from 'classnames';

const selected = false;

export const Button = () => (
  <button className={cn(s.btn, {
    [s['btn_selected']]: selected
  })}>
    { selected ? 'Added' : 'Add to cart' }
  </button>
);
