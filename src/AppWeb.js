import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';

import { Routes,Route, Navigate } from 'react-router-dom';
const AppWeb=()=>{
return(<>
<div className=' app_div'>
<Navbar/>
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
</Routes>

</div>
</>);
};
export default AppWeb;