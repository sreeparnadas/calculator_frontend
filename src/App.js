import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Protected from './Protected';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Protected component={Calculator}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
