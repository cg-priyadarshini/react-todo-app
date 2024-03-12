import './App.scss'
import { MainComponent } from './components';
import { ThemeProvider } from './context/ThemeContext';

function App() {
 
  return (  
     <ThemeProvider>
        <div className="App">
          <MainComponent />
        </div>
    </ThemeProvider>
  );
}

export default App;
