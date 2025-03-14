import { Link } from "react-router-dom";




const Main = () => {
    return (
        <div className="container text-center bg-light ">
            <h1>Main</h1>
            <h4> .... </h4>
            <div>
                <Link to={'/sample'}> 용기시안 </Link>
            </div>
        </div>
    )
}

export default Main;