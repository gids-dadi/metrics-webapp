import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MetricsListing from './components/MetricsListing';
import MetricsDetails from './components/MetricsDetails';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MetricsListing />} />
          <Route path='/details/:currencyCode' element={<MetricsDetails />} />
          <Route>404 Not found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

{
  /* <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='teams' element={<Teams />}>
        <Route path=':teamId' element={<Team />} />
        <Route path='new' element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>; */
}
