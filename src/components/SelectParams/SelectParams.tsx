import { useCallback } from 'react';

import Select from 'react-select';

import { SelectOption } from '../../types/SelectOption';

import s from './SelectParams.module.scss';
import './CustomSelect.scss';

type Props = {
  optionsSorting: SelectOption[],
  optionsCount: SelectOption[],
  selectLimit: string,
  selectSort: string,
  setSelectSort: (limit: string) => void,
  setSelectLimit: (limit: string) => void,
  searchParams: URLSearchParams,
  setSearchParams: (search: URLSearchParams) => void,
};

export const SelectParams: React.FC<Props> = ({
  optionsSorting,
  optionsCount,
  selectLimit,
  setSelectLimit,
  selectSort,
  setSelectSort,
  searchParams,
  setSearchParams,
}) => {
  const getValueSorting = useCallback(() => {
    return selectSort
      ? optionsSorting.find(sort => sort.value === selectSort)
      : '';
  }, [selectSort]);

  const handleChangeSorting = useCallback((newValue: any) => {
    setSelectSort(newValue.value);

    searchParams.set('sorting', newValue.value);
    setSearchParams(searchParams);
  }, [selectSort]);

  const getValueCount = useCallback(() => {
    return selectLimit
      ? optionsCount.find(count => count.value === selectLimit)
      : 0;
  }, [selectLimit]);

  const handleChangeCount = useCallback((newValue: any) => {
    setSelectLimit(newValue.value);

    searchParams.set('quantity', newValue.value);
    setSearchParams(searchParams);
  }, [selectLimit]);

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
