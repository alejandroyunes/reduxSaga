import React, {useState} from 'react'



import { useDispatch, useSelector } from 'react-redux'
import { crearNuevoProductoAction } from '../actions/ProductoActions';

const NuevoProducto = ({history}) => {

  const [ nombre, guardarNombre] = useState('');
  const [ precio, guardarPrecio] = useState(0);

  //REDUX
  const dispatch = useDispatch();

  // const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) )

const submitProductoNuevo = e => {
  e.preventDefault();

  if(nombre.trim() === '' || precio <= 0){
    return
  }

  // agregarProducto({
  //   nombre,
  //   precio
  // });

  history.push('/');

}

  return (
    <div>
      <div className=" row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-b font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitProductoNuevo}
            >
              <div className="form-group">
                <label>Nombre del producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={nombre}
                  onChange={ e => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio del producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                  value={precio}
                  onChange={ e => guardarPrecio( Number(e.target.value))}
      
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NuevoProducto
