import * as React from 'react';

import defaultOptions from '../../defaultOptions';
import { ActionType } from '../../enums';
import { ITableBodyProps } from '../../props';
import TableBodyContent from '../TableBodyContent/TableBodyContent';

const TableBody: React.FunctionComponent<ITableBodyProps> = (props) => {
  const { dispatch } = props;
  return (
    <tbody className={defaultOptions.css.tbody} onScroll={(event) => {
      dispatch({
        scrollLeft: event.currentTarget.scrollLeft,
        scrollTop: event.currentTarget.scrollTop,
        type: ActionType.ScrollTable,
      });
    }}>
      <TableBodyContent
        {...props}
      />
    </tbody>
  );
};

export default TableBody;
