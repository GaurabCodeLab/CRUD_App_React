import Create from "./pages/create";
import Update from "./pages/update";
import Read from "./pages/read";
import { Routes, Route} from 'react-router-dom';

function App(){
  return(
    <>
    <Routes>
      <Route path="/CRUD_App_React" element={<Create/>} />
      <Route path="/read" element={<Read/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
    </>
  )
}

export default App;
