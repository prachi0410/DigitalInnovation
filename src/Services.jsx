import Card from "./Card";
import Sdata from './Sdata';
const Services=()=>{
        const year = new Date().getFullYear();
return(<>
<h1 className="os">Our Services</h1> 
<div className="card_main_div">
      {
        Sdata.map((val,ind)=>{
                return <Card
                  key ={ind}
                  imgsrc={val.img}
                  title ={val.title}      
                />
        })
      }   
</div> 
      <div className='f'>copyright © {year}</div>
</>);
};
export default Services;