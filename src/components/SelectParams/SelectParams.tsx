/* eslint-disable max-len */
import { useState, useCallback } from 'react';
import Select from 'react-select';

import s from './SelectParams.module.scss';
import './CustomSelect.scss';

const optionsSorting = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
];

const optionsCount = [
  { value: '8', label: 8 },
  { value: '10', label: 10 },
  { value: '16', label: 16 },
  { value: '24', label: 24 },
];

export const SelectParams = () => {
  const [selectSorting, setSelectSorting] = useState('newest');
  const [selectCount, setSelectCount] = useState(10);

  const getValueSorting = useCallback(() => {
    return selectSorting ? optionsSorting.find(sorting => sorting.value === selectSorting) : '';
  }, [selectSorting]);

  const handleChangeSorting = useCallback((newValue: any) => {
    setSelectSorting(newValue.value);
  }, [selectSorting]);

  const getValueCount = useCallback(() => {
    return selectCount ? optionsCount.find(count => +count.value === selectCount) : 0;
  }, [selectCount]);

  const handleChangeCount = useCallback((newValue: any) => {
    setSelectCount(newValue.value);
  }, [selectCount]);

  return (
    <>
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
    </>
  );
};
