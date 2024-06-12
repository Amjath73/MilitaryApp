import logo from './logo.svg';
import './App.css';
import AddMiltary from './components/AddMiltary';
import ViewAll from './components/ViewAll';
import SearchMilitary from './components/SearchMilitary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddMiltary/>}/>
      <Route path='/search' element={<SearchMilitary/>}/>
      <Route path='/view' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
