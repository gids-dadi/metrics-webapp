import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import carImg from '../images/black-car8.png';
import { VehicleMakesByName } from '../redux/actions';

function GetMakesByName({ getVehiclesData }) {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  let numPages = 0;
  useEffect(() => {
    getVehiclesData('toyota');
  }, []);
  const vehicles = useSelector((state) => state.vehiclesReducer);
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
    if (e.keyCode === 13 && search.length > 0) {
      getVehiclesData(search);
    }
  };

  return (
    <div className="child-page">
      <Link to="../">Home</Link>
      <img src={carImg} alt="" className="big-car-img" />
      <div className="line" />
      <h2>Vehicles Makes by Name</h2>
      <p>Enter the name of vehicle</p>
      <input type="search" onChange={dropvalue} onKeyDown={submitUrl} placeholder="...search" />
      <section className="container-cards">
        {vehicles.slice((page * 20), ((page + 1) * 20)).map((vehicle) => (
          <article key={vehicles.indexOf(vehicle)} className="card">
            <FontAwesomeIcon icon={faCarSide} />
            <h3>{vehicle.MakeName}</h3>
            <p>{vehicle.VehicleTypeName}</p>
            <p>
              Vehicle Id:
              {vehicle.MakeId}
            </p>
          </article>
        ))}
      </section>
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

const mapDispatchToProps = (dipatch) => ({
  getVehiclesData: (name) => dipatch(VehicleMakesByName(name)),
});

export default connect(null, mapDispatchToProps)(GetMakesByName);
