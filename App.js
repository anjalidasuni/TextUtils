//import logo from './logo.svg';
import './App.css';
import  About  from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>

<Navbar title="Textutils" />
<div className="container my-3">
<TextForm heading="Enter the text below"/>
</div>
<div className='container'></div>
    </>
  );
  
}

export default App;
