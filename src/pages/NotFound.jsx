import { Link } from "react-router-dom"
const NotFound = () => {
  return(
    <div>
    <h2> Not Found</h2>
    <Link to="/" className="btn btn-dark"> Volver al Inicio</Link>
</div>
  )
}
export default NotFound