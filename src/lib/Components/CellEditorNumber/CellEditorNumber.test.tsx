import React from 'react';
import ReactDOM from 'react-dom';

import { DataType } from '../../enums';
import { ICellEditorProps } from '../CellEditor/CellEditor';
import CellEditorNumber from './CellEditorNumber';

const props: ICellEditorProps = {
  column: {
    dataType: DataType.String,
    key: 'columnField',
    title: 'Field',
  },
  dispatch: () => {},
  isSelectedRow: true,
  onValueChange: () => {},
  rowData: { column: 1 },
  rowKeyField: '',
};

it('renders without crashing', () => {
  const element = document.createElement('td');
  ReactDOM.render(<CellEditorNumber {...props} />, element);
  ReactDOM.unmountComponentAtNode(element);
});