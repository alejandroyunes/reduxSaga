import React, { useEffect } from 'react'
import Producto from './Producto'

//redux
import { useSelector,useDispatch } from 'react-redux';
import { descargarProductos } from '../actions/ProductoActions';

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector( state => state.productos.productos )
  // const error = useSelector(state => state.productos.error)
  // const cargando = useSelector(state => state.productos.loading)

  useEffect( () => {
     const cargarProductos = () => dispatch( descargarProductos() );
     cargarProductos();


    //eslint-disable-next-line
  }, []);


  return (
    <>
    <h2 className="text-center my-5">Listado de Productos</h2>
    {/* { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">
        hubo un error
      </p>: null } */}

      {/* { cargando ? <p className="text-center">
        cargando....
      </p>: null } */}
    <table className="table table-striped">
      <thead className="bg-primary table-dark">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
       {productos.length === 0 ? 'no hay productos': (
            productos.map(producto =>(
              <Producto
                key={producto.id}
                producto={producto}
              />
            ))
          )} 

      </tbody>

    </table>
  </>
  )
}

export default Productos
