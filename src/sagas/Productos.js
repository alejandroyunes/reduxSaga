import { put, call, takeLatest } from 'redux-saga/effects';

import clienteAxios from '../config/axios'

import { 
  COMENZAR_DESCARGA_PRODUCTOS, 
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR
 } from '../actions/ProductoActions'


export function* obtenerProductosAction(){
  
    try{
      
    const products = yield clienteAxios.get('./productos');
    //   yield console.log('its here');
      const data = products.data;
      yield put( {type: DESCARGA_PRODUCTOS_EXITO, payload: data}) 
      yield console.log('its called again')
    }
    catch(error){
      yield put( {type: DESCARGA_PRODUCTOS_ERROR, payload: true })
    }
  }


//watchers
export default function* productos(){
  yield takeLatest(COMENZAR_DESCARGA_PRODUCTOS, obtenerProductosAction);
}

