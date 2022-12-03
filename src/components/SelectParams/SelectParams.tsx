import { useState, useCallback } from 'react';

import Select from 'react-select';

import { SelectOption } from '../../types/SelectOption';

import s from './SelectParams.module.scss';
import './CustomSelect.scss';

type Props = {
  optionsSorting: SelectOption[],
  optionsCount: SelectOption[],
  selectLimit: string,
  selectSort: string,
  setSelectLimit: (limit: string) => void,
  setSelectSort: (limit: string) => void,
  setOrderSort: (order: string) => void,
  setDirSort: (dir: string) => void,
};

export const SelectParams: React.FC<Props> = ({
  optionsSorting,
  optionsCount,
  selectLimit,
  setSelectLimit,
  selectSort,
  setSelectSort,
  setOrderSort,
  setDirSort,
}) => {
  const [selectSorting, setSelectSorting] = useState(selectSort);
  const [selectCount, setSelectCount] = useState(selectLimit);

  switch (selectSorting) {
    case 'ascPrice':
      setOrderSort('price');
      setDirSort('asc');
      break;

    case 'descPrice':
      setOrderSort('price');
      setDirSort('desc');
      break;

    case 'ascYear':
      setOrderSort('new');
      setDirSort('asc');
      break;

    case 'descYear':
      setOrderSort('new');
      setDirSort('desc');
      break;

    default:
      setOrderSort('');
      setDirSort('');
  }

  const getValueSorting = useCallback(() => {
    return selectSorting
      ? optionsSorting.find(sorting => sorting.value === selectSorting)
      : '';
  }, [selectSorting]);

  const handleChangeSorting = useCallback((newValue: any) => {
    setSelectSorting(newValue.value);
    setSelectSort(newValue.value);
  }, [selectSorting]);

  const getValueCount = useCallback(() => {
    return selectCount
      ? optionsCount.find(count => count.value === selectCount)
      : 0;
  }, [selectCount]);

  const handleChangeCount = useCallback((newValue: any) => {
    setSelectCount(newValue.value);
    setSelectLimit(newValue.value);
  }, [selectCount]);

  return (
    <ul className={s.select__list}>
      <li className={s.select__item}>
        <h4 className={s.select__title}>Sort by</h4>

        <Select
          className={s.select__container_sort}
          classNamePrefix="custom_select"
          options={optionsSorting}
          value={getValueSorting()}
          onChange={handleChangeSorting}
          isSearchable={false}
        />
      </li>

      <li className={s.select__item}>
        <h4 className={s.select__title}>Items on page</h4>

        <Select
          className={s.select__container_count}
          classNamePrefix="custom_select"
          options={optionsCount}
          value={getValueCount()}
          onChange={handleChangeCount}
          isSearchable={false}
        />
      </li>
    </ul>
  );
};
