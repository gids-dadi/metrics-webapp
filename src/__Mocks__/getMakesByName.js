import React, { useState } from 'react';
import carImg from '../images/black-car8.png';

function GetMakesByName() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  let numPages = 0;
  const vehicles = [];
  const numOfpages = Math.floor(vehicles.length / 20);
  if (vehicles.length % 20 === 0) {
    numPages = numOfpages;
  } else {
    numPages = numOfpages + 1;
  }

  const dropvalue = (e) => {
    setSearch(e.target.value);
  };

  const submitUrl = (e) => {
    numPages = 2;
  };

  return (
    <div className="child-page">
      <img src={carImg} alt="" className="big-car-img" />
      <div className="line" />
      <h2>Vehicles Makes by Name</h2>
      <p>Enter the name of vehicle</p>
      <input type="search" onChange={dropvalue} onKeyDown={submitUrl} placeholder="...search" />
      <section className="container-cards" />
      <div className="buttons">
        <h4>
          {page + 1}
          {' '}
          of
          {' '}
          {numPages}
        </h4>
        <button
          className="previous"
          type="button"
          onClick={() => {
            if (page <= 0) { setPage(numOfpages); } setPage(page - 1);
          }}
        >
          previous
        </button>
        <button
          className="next"
          type="button"
          onClick={() => {
            if (page >= numOfpages) { setPage(0); } setPage(page + 1);
          }}
        >
          next page
        </button>
      </div>
    </div>
  );
}

export default GetMakesByName;
