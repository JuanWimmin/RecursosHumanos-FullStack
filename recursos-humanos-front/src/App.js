import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListadoEmpleados from './empleados/ListadoEmpleados';
import AgregarEmpleado from './empleados/AgregarEmpleado';
import EditarEmpleado from './empleados/EditarEmpleado';
import Navegacion from './plantilla/Navegacion';

function App() {
  return (
    <div className="container text-center">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListadoEmpleados/>} />
          <Route path="/Agregar" element={<AgregarEmpleado />} />
          <Route path="/editar-empleado/:id" element={<EditarEmpleado/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
