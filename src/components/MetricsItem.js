import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

const MetricsItem = () => {
  const metrics = useSelector((state) => state.metricReducers.metrics);
  let currencies = [];

  if (metrics.length !== 0) {
    currencies = Object.entries(metrics);
  }
  // console.log(currencies);

  const renderList = currencies.map((currency) => (
    <Link to={`/details/${currency[0]}`} key={currency[0]}>
      <div key={currency[0]} className='currency'>
        <span>
          {currency[0]} {currency[1]}
        </span>
      </div>
    </Link>
  ));

  return <div>{renderList}</div>;
};

export default MetricsItem;
