import { Link, useNavigate} from 'react-router-dom';
import { useState, useEffect} from 'react';

function Read(){
const [data, setData] = useState([]);
const [dark, setDark] = useState(false);
const navigate = useNavigate();

useEffect(()=>{
  readData();
}, [])

function deleteData(id){
  fetch(`https://6532c5f0d80bd20280f607a6.mockapi.io/users/${id}`, {
    method : "DELETE"
  })
  .then((result)=>{
    if(result.ok){
      return result.json();
    } else {
      throw new Error("something went wrong");
    }
  })
  .then((response)=>{
    alert("Data Deleted Successfully");
    readData();
  })
  .catch((error)=>console.log(error))
}

function readData(){
  fetch("https://6532c5f0d80bd20280f607a6.mockapi.io/users")
  .then((result)=>{
    if(result.ok){
      return result.json()
    } else{
      throw new Error("something went wrong")
    }
  })
  .then((response)=>setData(response))
  .catch((error)=>console.log(error))
}

function handleEdit(id){
   navigate(`/update/${id}`);
}
    return (
        <>
        <div className="mx-5 mt-3 primary"> 
        <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" style={{cursor:"pointer"}} onClick={()=>setDark(!dark)} />
</div>
        <div className="d-flex justify-content-between mt-3">
        <h1>Read Operation</h1>
        <Link to="/"><button type="button" className="btn btn-info">Create</button></Link>
        </div>
        <table className={dark?"table table-striped table-dark" : "table table-striped table-light"}>
  <thead>
    <tr>
      <th scope="col">Serial No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit Operation</th>
      <th scope="col">Delete Operation</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((value, index)=>(
        <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{value.name}</td>
      <td>{value.email}</td>
      <td><button type="button" className="btn btn-success" onClick={()=>handleEdit(value.id)}>Edit</button></td>
      <td><button type="button" className="btn btn-danger" onClick={()=>deleteData(value.id)}>Delete</button></td>
    </tr>
      ))
    }
  </tbody>
</table>
</div>
</>
    
    )
}

export default Read;
