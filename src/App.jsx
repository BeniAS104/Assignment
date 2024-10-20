import { useState } from 'react'; 
import CatLayout from './components/catLayout'; 

const App = () => {
  const [currentLayout, setCurrentLayout] = useState('layout1');

  const toggleLayout = () => {
    setCurrentLayout(currentLayout === 'layout1' ? 'layout2' : 'layout1');
  };

  return (
    <div className="App">
      <button onClick={toggleLayout}>Shift Layout</button>
      <CatLayout layout={currentLayout} />
    </div>
  );
};

export default App;



