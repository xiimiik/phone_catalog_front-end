import { useState, useCallback } from 'react';

import Select from 'react-select';

import { SelectOption } from './../../types/SelectOption';

import s from './SelectParams.module.scss';
import './CustomSelect.scss';

type Props = {
  selectSort: string,
  selectLimit: string,
  optionsSorting: SelectOption[],
  optionsCount: SelectOption[],
  setSelectLimit: (limit: string) => void,
  setSelectSort: (sort: string) => void,
}

export const SelectParams: React.FC<Props> = ({
  selectSort,
  selectLimit,
  optionsSorting,
  optionsCount,
  setSelectLimit,
  setSelectSort,
}) => {
  const [selectSorting, setSelectSorting] = useState(selectSort);
  const [selectCount, setSelectCount] = useState(selectLimit);

  const getValueSorting = useCallback(() => {
    return selectSorting ? optionsSorting.find(sorting => sorting.value === selectSorting) : '';
  }, [selectSorting]);

  const handleChangeSorting = useCallback((newValue: any) => {
    setSelectSorting(newValue.value);
    setSelectSort(newValue.value);
  }, [selectSorting]);

  const getValueCount = useCallback(() => {
    return selectCount ? optionsCount.find(count => count.value === selectCount) : 0;
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
          classNamePrefix='custom_select'
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
          classNamePrefix='custom_select'
          options={optionsCount}
          value={getValueCount()}
          onChange={handleChangeCount}
          isSearchable={false}
        />
      </li>
    </ul>
  );
};