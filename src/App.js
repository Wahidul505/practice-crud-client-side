import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Manage from './components/Manage/Manage';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/manage' element={<Manage />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
