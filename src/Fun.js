// import React, { useEffect, useState } from 'react'

// const Fun = () => {
//     const colaret=["red","blue","green","tomato","yellow","pink","gray","purple","black","chocolate","brown"]
//     const [colorNumber, setColorNumber] = useState(2)
//     const [ping, setPing] = useState(true)
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//              setColorNumber(Math.floor(Math.random()*colaret.length));
//              setCount(count + 1)
//         }, 50)
//         return () => clearInterval(interval);
//     },[count])
   
    
//   return (
//     <div className='plein-ecran' 
//           style={{backgroundColor:colaret[colorNumber]}}
//             // onClick={()=>setPing(!ping)}
//     >
//         <p>{count}</p>
//     </div>
//   )
// }

// export default Fun