import './App.css';
import './styles/Fonts.css';
import './styles/Responsive.css';
import { Index } from './component/Index';
import {Aboutus} from './component/Aboutus'
import {Classes} from './component/Classes'
import {Ourgym } from './component/Ourgym';
import {Gallery} from './component/Gallery';
import {Contactus} from './component/Contactus';
import {Pagenotfound} from './component/Pagenotfound';

import { Route, Routes } from 'react-router-dom';
import { Blog } from './component/Blog';
import { Blogsingle } from './component/Blogsingle';
import { Test } from './component/Test';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Index/>}>
      </Route>

      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Classes' element={<Classes/>}/>
      <Route path='/Ourgym' element={<Ourgym/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Blogsingle' element={<Blogsingle/>}/>

      <Route path='*' element={<Pagenotfound/>}/>
     </Routes>
     {/* <Test/> */}
    </div>
  );
}

export default App;
