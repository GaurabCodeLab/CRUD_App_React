import './style.css'
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./pages/update";
import { Routes, Route} from 'react-router-dom';

function App(){
  return (
    <>
    <Routes>
      <Route path="/CRUD_App_React" element={<Create/>} />
      <Route path="/CRUD_App_React/read" element={<Read/>} />
      <Route path="/CRUD_App_React/update/:id" element={<Update/>} />
      <Route path="*" element={<h1 className='text-center mt-4'>Page Not Found</h1>} />
    </Routes>
    </>
    
  )
}

export default App;
