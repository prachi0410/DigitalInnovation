import { NavLink } from "react-router-dom";
const Navbar=()=>{
return(<>
<div className="nav_div">
    <div className="nav_div2">
        <h1>DigitalInnovation</h1>
    </div>
    <div className="nav_div3">
        <NavLink activeClassName='active' className='hacs' to='/'>Home</NavLink>
        <NavLink activeClassName='active' className='hacs' to='/About'>About</NavLink>
        <NavLink activeClassName='active' className='hacs' to='/Contact'>Contact</NavLink>
        <NavLink activeClassName='active' className='hacs' to='/Services'>Services</NavLink>
    </div>
</div> 
</>);
};
export default Navbar ;