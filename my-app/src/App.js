

import './App.css';
import {Routes , Route} from "react-router-dom"
import { HomePage } from './pages/homePage';
import { SingleCategory } from './pages/singleCategoryPg';
import { SingleRestro } from './pages/singleResto';


function App() {

  
  return (
    <div className="App">
      <p>EasyRestro</p>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/:singleCategory' element={<SingleCategory/>}></Route>
        <Route path='/restaurants/:singleRestro' element={<SingleRestro/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
