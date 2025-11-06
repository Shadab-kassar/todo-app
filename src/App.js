import './App.css';
import Navbar from './components/Navbar';
import Addtodo from './components/Addtodo'
import Todos from './components/Todos';


function App() {

  return (
    <div className="App">
      <Navbar  />
      <div className='component-div mx-auto my-5 py-0'>
        <Addtodo />
        <Todos  />
      </div>
     
    </div>
  );
}

export default App;
