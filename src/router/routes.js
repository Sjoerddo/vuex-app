import ItemList from '../components/ItemList'
import ItemView from '../components/ItemView'

const routes = [
  { path: '*', redirect: '/list' },
  { path: '/list', component: ItemList },
  { path: '/view', component: ItemView }
]

export default routes
