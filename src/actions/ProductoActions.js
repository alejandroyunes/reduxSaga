
export const COMENZAR_DESCARGA_PRODUCTOS = 'COMENZAR_DESCARGA_PRODUCTOS';
export const DESCARGA_PRODUCTOS_EXITO = 'DESCARGA_PRODUCTOS_EXITO';
export const DESCARGA_PRODUCTOS_ERROR = 'DESCARGA_PRODUCTOS_ERROR';

export const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
})

export const descargaProductosExitosa = productos => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
})

export const descargaProductosError = () =>({
  type: DESCARGA_PRODUCTOS_ERROR
})
