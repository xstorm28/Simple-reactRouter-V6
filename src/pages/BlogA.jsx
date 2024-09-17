import { useFetch } from "../hooks/UseFetch";
import { Link, useParams } from "react-router-dom"
const BlogA = () => {

    const params = useParams()
    console.log(params.id);

    const { data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if (loading) return <p>Loading data...</p>
  if(error) return <p> Error</p>
    return(
        <>
        <h1>{data.id} - {data.title}</h1>
        <p> {data.body}</p>
        <Link to={"/blog"}> Volver</Link>
        </>
    )
  
}

export default BlogA
