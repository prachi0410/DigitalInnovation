import { useState } from 'react';
import './contact.css'
const Contact=()=>{
    const year = new Date().getFullYear();
const [data,setdata] = useState({
    name:'',
    phone:'',
    email:'',
    message:'',
});
const InputEvent=(event)=>{
 const {name,value} = event.target;
 setdata((preval)=>{
   return{
    ...preval,
    [name]:value,
   };
 });
};
const submit=()=>{
alert(`
    My name is ${data.name}.
    My mobie number is ${data.phone}.
    My email is ${data.email}.
    Here is what i want to say ${data.message}.
    `);
};
return(<>
<div className='cn_div'>
    <h1>Contact Us</h1>
    <form className='cn_form' >
        <input
            className="cn_input" 
            type='text'
            name='name'
            value={data.name}
            onChange={InputEvent}
            autoComplete='off'
            placeholder='Enter your name'
        />
        <input 
            className="cn_input"
            type='digit'
            name='phone'
            value={data.phone}
            onChange={InputEvent}
            autoComplete='off'
            placeholder='Mobile number'
        />
        <input
            className="cn_input" 
            type='email'
            name='email'
            value={data.email}
            onChange={InputEvent}
            autoComplete='off'
            placeholder='Email address'
        />
        <textarea 
            className="cn_textarea"
            type='text'
            name='message'
            value={data.message}
            onChange={InputEvent}
            autoComplete='off'
            placeholder='Message'
        />
        <button className='cn_btn' onClick={submit}>Submit</button>
    </form>
    <div className='footer'>copyright © {year}</div>
</div>
</>);
};
export default Contact;