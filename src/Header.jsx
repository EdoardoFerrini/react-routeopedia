import logo from "./images/logo512.png"
import {Link, NavLink} from "react-router-dom"

const Header = () =>{
    return(
        <div className="py-2 pl-2" style={{borderBottom: "1px solid #777"}}>
           
            <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
  <div class="container-fluid">
  <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className={({isActive})=> isActive ? "nav-link active":"nav-link"} aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={({isActive})=> isActive ? "nav-link active":"nav-link"} to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={({isActive})=> isActive ? "nav-link active":"nav-link"} to="/cryptodetail/EUR/1">Crypto Detail</NavLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul class="dropdown-menu">
            <li><NavLink className="dropdown-item" to="product/create">Create Product</NavLink></li>
            <li><NavLink className="dropdown-item" to="product">Product</NavLink></li>
            <li><NavLink className="dropdown-item" to="product/details">ProductDetails</NavLink></li>
            <li><NavLink className="dropdown-item" to="product/list">ProductList</NavLink></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header;