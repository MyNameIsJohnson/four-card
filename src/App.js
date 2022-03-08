import './App.css';
import Top from './components/Top.js'
import Right from './components/Right.js'
import Left from './components/Left.js'
import Bottom from './components/Bottom.js'


function App() {
  return (
    <div className='container'>
    <Top/>
    <Left/>
    <Right/>
    <Bottom/>
    </div>
  );
}

export default App;
