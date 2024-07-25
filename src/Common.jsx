import './common.css';
const Common=(props)=>{
const year = new Date().getFullYear();
return(<>
<div className="home_div">
        <div className="home_div2">
                <h1 className='h1'>{props.head}</h1>
                <h1 className='h1'> with <span className="di">DigitalInnovation</span> </h1>
                <h4>We are the team of talented developer making dynamic websites</h4>
                <button className="btn">{props.btn}</button>
        </div>  
        <div className="home_div3">
                <img className='img' src={props.image} alt='Error'/>
        </div>  
        <div className='footer'>copyright © {year}</div>
</div>  
</>);
};
export default Common;