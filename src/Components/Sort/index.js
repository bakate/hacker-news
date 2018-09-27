import React from 'react';
import classNames from 'classnames';
import { sortBy } from 'lodash';

import Button from '../Button';

const Sort = ({ sortKey, activeSortKey, onSort, children }) => {
  const sortClass = classNames('button-inline', {
    'button-active': sortKey === activeSortKey
  });

  return (
    <Button onClick={() => onSort(sortKey)} className={sortClass}>
      {children}
    </Button>
  );
};

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse()
};
export { SORTS };
export default Sort;
