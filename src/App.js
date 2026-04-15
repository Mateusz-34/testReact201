import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Hello2/>
      <Button bigColor = "blue" label = "Btn1"/>
      <Button bigColor = "yellow" label = "Btn2"/>
    </div>
  );
}

export default App;