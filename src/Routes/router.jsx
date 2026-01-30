import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import MainIssueListing from "../Pages/MainIssueListing/MainIssueListing";

const router=createBrowserRouter([{
    path:"/",
    element:<Root/>,
    children:[{
        path:"/",
        element:<MainIssueListing/>
    }]

}])
export default router