import React, { useState } from 'react';

import Table, { ITableOption } from '../../Components/Table/Table';
import { DataType } from '../../Enums/DataType';
import { EditingMode } from '../../Enums/EditingMode';
import { OptionChangedFunc } from '../../Types/OptionChangedFunc';

const dataArray = [
  { id: 1, type: 'Cat', name: 'Kas', country: 'Czech Republic', age: 2 },
  { id: 2, type: 'Dog', name: 'Rex', country: 'Montenegro', age: 6 },
  { id: 3, type: 'Cat', name: 'Simba', country: 'France', age: 12 },
  { id: 4, type: 'Dog', name: 'Beethoven', country: 'Czech Republic', age: 3 },
  { id: 5, type: 'Cat', name: 'Hash', country: 'Czech Republic', age: 8 },
];

const tableOption: ITableOption = {
  columns: [
    { field: 'type', title: 'Type', dataType: DataType.String },
    { field: 'name', title: 'Name', dataType: DataType.String },
    { field: 'country', title: 'Country', dataType: DataType.String },
    { field: 'age', title: 'Age', dataType: DataType.Number },
  ],
  editingMode: EditingMode.Cell,
  groups: [{
    id: 'country',
  }, {
    id: 'type',
  }],
  rowKey: 'id',
};

const GroupingDemo: React.FC = () => {
  const [option, changeOptions] = useState(tableOption);
  const onOptionChanged: OptionChangedFunc = (value) => {
    changeOptions({...option, ...value });
  };
  return (
    <Table
      {...option}
      data={dataArray}
      onOptionChanged={onOptionChanged}
    />
  );
};

export default GroupingDemo;
