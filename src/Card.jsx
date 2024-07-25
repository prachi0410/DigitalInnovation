import './card.css';
const Card =(props)=>{
return(<>

  <div className="card">
      <img className='cimg' src={props.imgsrc} alt={props.imgsrc}/>
      <h2>{props.title}</h2>
      <br/>
      <p className='content'>Especially the homepage is a perfect place to show randomly selected articles from your blog, a different header image each time the page gets refreshed or a box with a random featured project from your portfolio</p>
      <br/>
      <button className="cbtn"> Go somewhere</button>
  </div>

</>);
};
export default Card;