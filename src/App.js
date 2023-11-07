import './App.css';
import Menu from './components/Menu.js';
import Container from './components/Container.js';
import MainContainer from './components/MainContainer.js';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Container/>
      <MainContainer/>
    </div>
  );
}

export default App;
