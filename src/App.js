import './App.css';
import BikeDetails from './components/BikeDetails/BikeDetails';
import GetOnRoadPrice from './components/GetOnRoad/GetOnRoadPrice';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div >
       <AppRouter/>
      {/* <BikeDetails model="Unicorn"/> */}
      {/* <GetOnRoadPrice model="Unicorn"/> */}
    </div>
  );
}

export default App;
