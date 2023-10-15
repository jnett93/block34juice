import { Link } from "react-router-dom";

export default function Navbar({ token }) {

    return (
      <div id="navbar">
        <div id="navbar-header">
            Welcome to the Juicebox
        </div>
        <Link to={"/"}>HOME</Link>
        <Link to={"/posts"}>POSTS</Link>

        { token ?
          <Link to={"/account/logout"}>LOGOUT</Link> :
          <Link to={"/account/login"}>LOGIN</Link>
        }
      </div>
    );
  }