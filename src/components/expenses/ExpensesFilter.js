import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const onSelectHandler = (event) => {
    props.onOptionChangeHandler(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select>
          <option value='2022' onChange={onSelectHandler}>2022</option>
          <option value='2021' onChange={onSelectHandler}>2021</option>
          <option value='2020' onChange={onSelectHandler}>2020</option>
          <option value='2019' onChange={onSelectHandler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
