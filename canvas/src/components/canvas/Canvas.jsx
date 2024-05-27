/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import './Canvas.css'
const PenTool = () => {
    const [penColor, setPenColor] = useState("red");
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
    
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

    context.strokeStyle = penColor;
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.lineJoin = 'round';


    const handleMouseDown = (e) => {

        setIsDrawing(true);
        setLastX(p=>e.clientX);
        setLastY(p=>e.clientY);
        
    };
    
    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        context.beginPath();
        context.moveTo(lastX + scrollX, lastY + scrollY);
        context.lineTo(e.clientX + scrollX, e.clientY + scrollY);
        context.stroke();
        
        setLastX(p => e.clientX);
        setLastY(p => e.clientY);

    };
    
    const handleMouseUp = () => {
        setIsDrawing(false);
    };
    
    const handleMouseOut = () => {
        setIsDrawing(false);
    };
    
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isDrawing, lastX, lastY, penColor]);

  const h = Math.max(document.body.scrollHeight, document.body.offsetHeight,  document.documentElement.clientHeight, document.documentElement.offsetHeight);
  const w = Math.max(document.body.scrollWidth, document.body.offsetWidth,  document.documentElement.clientWidth, document.documentElement.offsetWidth);


  return (<>

    <div className="all" style={{position: "absolute", top: "0", left: '0', zIndex: "1"}}>
        <div className="colorPallate" style={{position: 'absolute', right: '0', display: 'flex'}}>
            <div className="box " style={{backgroundColor: 'red'}} onClick={()=> setPenColor(e=> 'red')}></div>
            <div className="box " style={{backgroundColor: 'black'}} onClick={()=> setPenColor(e=> 'black')}></div>
            <div className="box " style={{backgroundColor: 'blue'}} onClick={()=> setPenColor(e=> 'blue')}></div>
            <div className="box " style={{backgroundColor: 'green'}} onClick={()=> setPenColor(e=> 'green')}></div>
            <div className="box " style={{backgroundColor: 'yellow'}} onClick={()=> setPenColor(e=> 'yellow')}></div>
        </div>
        <canvas  ref={canvasRef} width={w} height={h} className='border'/>
    </div>
    
  </>)
};

export default PenTool;


// import React, {useState} from 'react'

// const Canvas = () => {
//     const [drawing, setDrawing] = useState(false);
//     const [path, setPath] = useState('');
//     const a = 30;

//     const handleMouseDown = (e) => {
//         setDrawing(true);
//         const {clientX , clientY} = e;
//         setPath(`M${clientX-a} ${clientY-a}`);
//     }

//     const handleMouseMove = (e)=>{
//         if(!drawing) return ;
        
//         const {clientX, clientY} = e;
//         setPath((prevPath) => `${prevPath} L${clientX-a} ${clientY-a}`)
//     }

//     const handleMouseUp = (e)=>{
//         setDrawing(false);
//     }

//     const handleMouseLeave = (e) => {
//         setDrawing(false);
//     }
//    return (
//     <svg width={window.innerWidth} height={window.innerHeight} style = {{border: '1px solid red'}} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
//         <path d={path} fill="none" stroke="black" strokeWidth="2" strokeLinecap='round'/>
//     </svg>
//   )
// }

// export default Canvas