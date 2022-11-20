import logo from './logo.svg';
import './App.css';
import Mycart from './Pages/Mycart';

function App() {
  return (
    <div className="App">
      <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h3 style={{width:"84%" , marginTop:"2em" , marginBottom:""}}>
      My cart (4)
      </h3>
      </div>
     <Mycart/>
    </div>
  );
}

export default App;
