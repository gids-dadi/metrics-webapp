import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import MetricsItem from './MetricsItem';
import { getMetrics } from '../redux/metrics/metrics';
import { useEffect } from 'react';

const url =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

const MetricsListing = () => {
  const metrics = useSelector((state) => state.metricReducers.metrics);
  const dispatch = useDispatch();
  let currencies = [];
  const fetchMetrics = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log('Err', err);
    });
    // console.log(Object.entries(response.data));
    dispatch(getMetrics(response.data));
  };

  // if (metrics.length !== 0) {
  //   currencies = Object.entries(metrics);
  // }
  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div className='currency-container'>
      <h1>Countries and Currency</h1>
    <MetricsItem />
    </div>
  );
};

export default MetricsListing;
