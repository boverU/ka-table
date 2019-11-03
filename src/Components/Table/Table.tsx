import './Table.scss';

import * as React from 'react';

import { EditingMode } from '../../Enums/EditingMode';
import { SortingMode } from '../../Enums/SortingMode';
import { Cell } from '../../Models/Cell';
import { Column } from '../../Models/Column';
import defaultOptions from '../../Models/DefaultOptions';
import { FilterRowItem } from '../../Models/FilterRowItem';
import { Group } from '../../Models/Group';
import { DataChangedFunc } from '../../Types/DataChangedFunc';
import { OptionChangedFunc } from '../../Types/OptionChangedFunc';
import { filterData, searchData } from '../../Utils/FilterUtils';
import { sortData } from '../../Utils/SortUtils';
import { convertToColumnTypes } from '../../Utils/TypeUtils';
import HeadRow from '../HeadRow/HeadRow';
import TableBody from '../TableBody/TableBody';

/**
 * Sets the options of the table which are related to its looks
 */
export interface ITableOption {
  /** Column's settings */
  columns: Column[];
  /** Specifies the array of cells which are being edited */
  editableCells?: Cell[];
  /** Sets the editing mode */
  editingMode?: EditingMode;
  /** Sets filters for columns */
  filterRow?: FilterRowItem[];
  /** Specifies the column unique field which will be used as a key */
  rowKey: string;
  /** Sets the sorting mode */
  sortingMode?: SortingMode;
  /** Sets the search by data columns */
  search?: string;
  /** Sets the groups option */
  groups?: Group[];
}

interface ITableEvents {
  /** Called each time Data is changed */
  onDataChanged?: DataChangedFunc;
  /** Called each time ITableOption changed */
  onOptionChanged: OptionChangedFunc;
}

interface IAllProps extends ITableEvents, ITableOption {
  /** The data which is shown in Table's rows */
  data: any[];
}

const Table: React.FunctionComponent<IAllProps> = (props) => {
  const {
    columns,
    filterRow,
    onOptionChanged,
    search,
    sortingMode = SortingMode.None,
  } = props;
  let { data } = props;
  data = search ? searchData(columns, data, search) : data;
  data = convertToColumnTypes(data, columns);
  data = filterRow ? filterData(data, filterRow) : data;
  data = sortData(columns, data);
  return (
    <div className='tc'>
      <table className={defaultOptions.css.table}>
        <thead className={defaultOptions.css.thead}>
          <HeadRow columns={columns} onOptionChanged={onOptionChanged} sortingMode={sortingMode}/>
        </thead>
        <TableBody {...props} data={data}/>
      </table>
    </div>
  );
};

export default Table;
