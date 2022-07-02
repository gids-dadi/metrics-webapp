import { Link } from 'react-router-dom';
import carHome from './images/car-home.png';
import blackCar1 from './images/black-car1.png';
import blackCar4 from './images/black-car4.png';
import blackCar5 from './images/black-car5.png';
import blackCar8 from './images/black-car8.png';
import blackCar9 from './images/black-car9.png';

const Home = () => (
  <div className="Home">
    <h2>Car&apos;s App</h2>
    <img src={carHome} alt="" className="imgHome" />

    <div className="HomePage">
      <Link to="./GetAllManufacturers">
        <img src={blackCar1} alt="" className="link_img" />
        <span>
          AllManufacturers
        </span>
      </Link>

      <Link to="./GetByModel">
        <img src={blackCar9} alt="" className="link_img" />
        <span>
          Models
        </span>
      </Link>

      <Link to="./GetByName">
        <img src={blackCar4} alt="" className="link_img" />
        <span>
          Display By Names
        </span>
      </Link>

      <Link to="./GetByNameAndYear">
        <img src={blackCar5} alt="" className="link_img" />
        <span>
          Name and year
        </span>
      </Link>

      <Link to="./GetMakesByName">
        <img src={blackCar8} alt="" className="link_img" />
        <span>
          Makes and Names
        </span>
      </Link>
      <Link to="./GetByYear">
        <img src={blackCar1} alt="" className="link_img" />
        <span>
          Vehicles by year
        </span>
      </Link>
    </div>
  </div>
);

export default Home;
