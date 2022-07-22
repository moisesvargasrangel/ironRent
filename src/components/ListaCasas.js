import React from 'react'
import Card from './Card'
import { Flex } from '@chakra-ui/react';
import NoData from './NoData';


const ListaCasas = (props) => {
  const {data} = props;
  return (
    <Flex flexWrap={"wrap"} justifyContent="center">
        {/* <Button colorScheme='blue' onClick={toggleShow}>Completado</Button> */}

      {/* Thruthy condicion && mostrarEsto */}
      {/* {show === true && ( */}
        {/* <Spinner color='red.500' size='xl' speed='2s' /> */}
      {/* )} */}

      {/* arreglo.map((dato) =>{
        return <componente props key/>
      }) */}

      {
        data.map((casa, i) => {
          return <Card key={i} info={casa}/>; 
      })} 
      
      {/* Operador ternario condicion ? Verdadero : Falso */}
      {/* {Thruthy - condicion && mostrar} */}

      {data.length === 0 && <NoData /> }
      
      </Flex>
  )
}

export default ListaCasas