import './style.css'
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./pages/update";
import { Routes, Route} from 'react-router-dom';

function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<Create/>} />
      <Route path="/read" element={<Read/>} />
      <Route path="/update/:id" element={<Update/>} />
      <Route path="*" element={<h1 className='text-center mt-4'>Page Not Found</h1>} />
    </Routes>
    </>
    
  )
}

export default App;
























































// import './App.css';
// import './style.css'
// import aar from './custom.module.css';
// import React from 'react';
// function App() {
//   const styleItem={color:'red',backgroundColor:'black'}
//   console.log(aar, "aar hai");
//   return (
//     <div className="App">
//       <h1 className="primary">Style type 1 in React js</h1>
//       <h1 style={styleItem}>Style type 2 in React js</h1>
//       <h1 id={aar.laura} >Style type 3 in React js</h1>
//     </div>
//   );
// }

// export default App;

