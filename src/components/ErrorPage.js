import React from 'react';
import { MdPadding } from 'react-icons/md';
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
  <>
  <div style={{
    fontSize:"25px",
    letterSpacing:"6px",
    fontWeight:"600",
    cursor:"pointer",
    padding:"10px",
    background:"#0a192f"
    }}>
  <Link to="/" style={{textDecoration:"none"}}>
    IQBAL
  </Link>
  </div>
  <div style={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    height:"80vh"
    }}>

    <div>
    <h1 style={{color:"white",fontSize:"120px"}}>4 <span style={{color:"blue"}}> 0 </span>4</h1>
    </div>
    
    <div>
      <p style={{color:"pink",fontSize:"30px"}}>Page Not Found</p>
    </div>
    </div>;
  </>
)
}

export default ErrorPage;
