
import './App.css';
import { Banner } from './components/Banner';
import { Main } from './components/Main';



function App() {
  return (
    <div className="App font-[Poppins] container mx-auto" data-testid="app">
      <Banner/>
      <Main/>
      
    </div>
  );
}

export default App;
