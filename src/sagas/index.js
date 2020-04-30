
import { all } from 'redux-saga/effects'
import productos from './Productos'

export default function* rootSaga(){
  yield all([
    productos()
  ])
}