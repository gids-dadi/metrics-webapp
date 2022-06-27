import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMetrics } from '../redux/metrics/metrics';
const euroBaseUrl =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';

const MetricsDetails = () => {
  const metric = useSelector((state) => state.selectedmetricReducers);
  const { currencyCode } = useParams();
  const dispatch = useDispatch();
  let currencyRate = [];
  // console.log('Matric', metric);

  const fetchCurrencyDetails = async () => {
    const response = await axios.get(euroBaseUrl).catch((err) => {
      console.log('Err ', err);
    });
    dispatch(selectedMetrics(response.data));
  };
  // console.log('Matric', metric);
  if (metric.length !== 0) {
    currencyRate = Object.entries(metric);
    console.log('CurrencyRate', currencyRate);
  }
  // console.log(currencyRate);

  // currencyRate[1] .map((rate) => {
  //     console.log('Rate', rate);
  //   });

  useEffect(() => {
    if (currencyCode && currencyCode !== '') fetchCurrencyDetails();
  }, [currencyCode]);

  return <div>MetricsDetails</div>;
};

export default MetricsDetails;
