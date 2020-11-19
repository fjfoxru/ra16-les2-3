import logo from './logo.svg';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  const select = ['ssss', 'dddd', 'wwww', 'fffff'];

  return (
    <div className="App">
      <Dropdown list={select}/>
    </div>
  );
}

export default App;
