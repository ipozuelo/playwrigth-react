
import {useRouteError, Link} from 'react-router-dom'

const NotFound = () => {

    const error = useRouteError()
    console.log(error)
  return (
    <>
    <h1>404</h1>
    <h2>Error</h2>
    <h3>Página no encontrada</h3>
    <Link to="/">Volver a Home</Link>
    </>
  )
}

export default NotFound