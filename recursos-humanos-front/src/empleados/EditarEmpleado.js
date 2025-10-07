import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


export default function EditarEmpleado() {

    const urlBase = "http://localhost:8080/rh-app/empleados";

    let navegacion= useNavigate();

    const{id}= useParams();

    const [empleado, setEmpleado] = useState({
        nombre: '',
        departamento: '',
        sueldo: ""
    })

    const{nombre, departamento, sueldo} = empleado

    useEffect(() => {
        cargarEmpleado();
    },[])

    const cargarEmpleado = async () => {
        const response = await axios.get(`${urlBase}/${id}`)
        setEmpleado(response.data);
    }

    const onInputChange = (e) => {
        //spread operator... (...empleado) para copiar todo lo que ya tiene
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empleado);
        //redireccionar a la pagina principal
        navegacion("/");
    }

  return (
    <div className ="container">
        <div className="container text-center" style={{margin: "30px"}}>
            <h3> Editar Empleado  </h3>
        </div>

    <form onSubmit={(e)=> onSubmit(e)}>  
  <div className="mb-3">
    <label htmlFor="nombre " className="form-label">Nombre Empleado</label>
    <input type="text" className="form-control" 
    id="nombre" name ='nombre' required ={true}
    value={nombre} onChange={(e)=>onInputChange(e)}/>

  </div>
  <div className="mb-3">
    <label htmlFor="departamento" 
    className="form-label">departamento</label>
    <input type="text" className="form-control" 
    id="departamento" name ='departamento' required ={true}
    value={departamento} onChange={(e)=>onInputChange(e)}/>
  </div>
 

   <div className="mb-3">
    <label htmlFor="sueldo" 
    className="form-label">Sueldo</label>
    <input type="number" step="any" className="form-control" 
    id="sueldo" name ='sueldo' required ={true} 
    value={sueldo} onChange={(e)=>onInputChange(e)}/>
  </div>



  <div className='text-center'>
     <button type="submit" 
        className="btn btn-warning btn-sm me-3">Guardar</button>
    <a href='/' className="btn btn-danger btn-sm">Regresar</a>
  </div>
</form>



    </div>
  )
}

