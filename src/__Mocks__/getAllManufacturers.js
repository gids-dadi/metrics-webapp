import React, { useState } from 'react';
import carImg from '../images/car-tire.png';
import '../styles/childPages.css';

function GetAllManufacturers() {
  const [page, setPage] = useState(0);
  let numPages = 0;
  const vehicles = [];
  const numOfpages = Math.floor(vehicles.length / 20);
  if (vehicles.length % 20 === 0) {
    numPages = numOfpages;
  } else {
    numPages = numOfpages + 1;
  }

  return (
    <div className="child-page">
      <img src={carImg} alt="" className="big-car-img" />
      <div className="line" />
      <h2>All manufacturers</h2>
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

export default GetAllManufacturers;
