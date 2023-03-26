import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick =()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        props.showAlert("UPPERCASE ","was clicked");
        setText(newText);
    }

    const handleLow =()=>{
      console.log("Lowercase was clicked");
      let newText=text.toLowerCase();
      props.showAlert("lowercase ","was clicked");
      setText(newText);
  }



    const handleOnchange =(event)=>{
      console.log("Onchange"); 
      setText(event.target.value);
      
  }


    const [text,setText] = useState('');
  return (
<>
    <div>
        <h1 style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
<div className="mb-3">
  <textarea  value= {text} onChange={handleOnchange} className="form-control" id="exampleFormControlTextarea1" rows="8" style={{backgroundColor : props.mode==='light'?'white':'#310833',
color : props.mode==='dark'?'white':'black'} }></textarea>
</div>
<button type="button" className="btn btn-primary me-1" onClick={handleUpclick}>Convert to UPPERCASE</button>
<button type="button" className="btn btn-primary me-1" onClick={handleLow}>Convert to lowercase</button>

    </div>
    </>
  )
}
