import logo from './logo.svg';
import './App.css';
import AddMiltary from './components/AddMiltary';
import ViewAll from './components/ViewAll';
import SearchMilitary from './components/SearchMilitary';

function App() {
  return (
    <div>
      <AddMiltary/>
      <ViewAll/>
      <SearchMilitary/>
    </div>
  );
}

export default App;
