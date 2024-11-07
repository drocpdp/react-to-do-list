import { Outlet } from "react-router-dom";
import Header from "../header/header.component"

const MainPane = () => {
    return (
        <div>
        <Header />
        <Outlet />
        </div>
    )
}

export default MainPane;