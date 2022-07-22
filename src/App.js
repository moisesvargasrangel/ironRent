//Hooks useState para acceder a la funcionalidad del estado de React
//Queremos decirle a React que reaccione a los cambios que se realizan en la App

import { useEffect, useState } from 'react';
import './App.css';
import { Button, Spinner, Image, Skeleton, Input } from '@chakra-ui/react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ListaCasas from './components/ListaCasas';
import Detalle from './components/Detalle';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";

function App() {
  //const [valor,setValor = useState(valor Inicial)]
  const [show, setShow] = useState(true);
  const [data,setData] = useState([]);
  const [dataCp, setDataCp] = useState([]); //Data Copy
  const [search,setSearch] = useState("");

  //Mount, Update, Unmount.
  //useEffect --> useEffect(() => {})
  //Si queremos que se ejecute en cada re-renderizado
  //useEffect(() => {
  //  console.log("Soy el UseEffect")
  // });

  //Si queremos que se ejecute una sola vez al montarse en nuestra app
  //Con este vamos a hacer nuestras peticiones GET
  useEffect(()=>{
    console.log("GET DATOS");
    fetch("https://ironbnb-m3.herokuapp.com/apartments")
    .then((datos) => {
      datos.json().then((casas) => {
        console.log("Datos de las casas:", casas);
        setData(casas);
        setDataCp(casas);
        setShow(false)
      });
    })
    .catch(console.log)
  }, []);

  const toggleShow = () => {
      setShow(!show)
      console.log("El valor de show es:", show)
  }

//Funcion para controlar lo que sucede con el input
const actualizarInput = (e) => {
  console.log("<----Actualizando!!!!!!!!!->", e.target.value)
  setSearch(e.target.value)
}

//useEffect este al pendiente del update del state del input
//.filter()
useEffect(() => 
  {console.log("Se esta actualizando")
  const dataFiltrada = dataCp.filter((casa) => {
    return casa.title.toLowerCase().includes(search.toLowerCase())
  });
  setData(dataFiltrada);
}, [search]);


  return (
    <div>
      <Router>
        <Navbar/>
          <Input 
            placeholder='Buscar propiedad...' 
            value={search} 
            onChange={actualizarInput}/>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/casas/:id" element={<Detalle />} />
            <Route path="/" element={<ListaCasas data={data}/>} />
          </Routes>

      </Router>
   </div>
  );
}

export default App;
