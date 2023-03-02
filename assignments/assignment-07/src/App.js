import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './home/Home'
import Filter from './filter/Filter';
import Details from './details/Details';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/filter' element={<Filter />}></Route>
        <Route path='/details' element={<Details />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
