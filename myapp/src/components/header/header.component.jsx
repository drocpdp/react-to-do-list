import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div class="container text-left">
                <div class="row">
                    <div class="col-3">
                        <h1>Tasks 1.0</h1>
                    </div>
                    <div class="col-1">
                        <Link to="/about"
                            class="link-underline-light"
                        >
                            About
                        </Link>
                    </div>
                    <div class="col-1">
                        <Link to="/"
                            class="link-underline-light"
                        >
                            Tasks
                        </Link>
                    </div>     
                </div>               
            </div>
            <hr />
        </div>
    )
}

export default Header;