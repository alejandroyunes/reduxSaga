import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


import { editarProductoAction } from '../actions/ProductoActions'


const EditarProducto = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [ producto, guardarProducto ] = useState({
    nombre: '',
    precio: ''
  })

  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const { nombre, precio } = producto

  const submitEditarProducto = e =>{
    e.preventDefault();
  
  //  dispatch(  editarProductoAction(producto) )
   history.push('/')
  }


  return (
    <div className=" row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-b font-weight-bold">
            Editar  Producto
          </h2>
          <form onSubmit={ submitEditarProducto } >
            <div className="form-group">
              <label>Nombre del producto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del producto"
                name="nombre"
                value={nombre}
                onChange={onChangeFormulario}
         
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
                onChange={onChangeFormulario}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditarProducto
