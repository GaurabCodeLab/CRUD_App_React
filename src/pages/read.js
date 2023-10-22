import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Read() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("table table-light");
  useEffect(()=>{
    readData();
  },[]);
  function readData(){
    fetch("https://6532c5f0d80bd20280f607a6.mockapi.io/users", {
      method : "GET",
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((result)=>{
      if(result.ok){
        return result.json();
      } else{
        throw new Error("Something Went Wrong");
      }
    }).then((response)=>{
      setData(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  function handleClick(id){
    fetch(`https://6532c5f0d80bd20280f607a6.mockapi.io/users/${id}`, {
      method : "DELETE"
    }).then((result)=>{
      if(result.ok){
        return result.json()
      } else{
        throw new Error("Something went wrong")
      }
    }).then((result)=>{
      console.log(result);
      readData();
    }).catch((error)=>{
      console.log(error);
    })
  }

  function themeHandler(){
    theme=="table table-light"?setTheme("table table-dark"):setTheme("table table-light")
  }
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={themeHandler}
          style={{cursor: "pointer"}}
        />
      </div>
      <div className="header my-3">
        <h1>Read Operation</h1>
        <Link to="/">
        <button type="button" className="btn btn-info btn-lg">
          Create
        </button>
        </Link>
        
      </div>
      <table className={theme}>
        <thead>
          <tr>
            <th scope="col">Serial No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit Operation</th>
            <th scope="col">Delete Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key)=>(
              <tr key={key}>
            <th scope="row">{key+1}</th>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>
              <Link to={`/update/${value.id}`}>
              <button className="btn btn-success">Edit</button>
              </Link>
            </td>
            <td>
              <button className="btn btn-danger" onClick={()=>handleClick(value.id)}>Delete</button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Read;


