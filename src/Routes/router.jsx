import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import MainIssueListing from "../Pages/MainIssueListing/MainIssueListing";
import IssueDetail from "../Pages/IssueDetail/IssueDetail";

const router=createBrowserRouter([{
    path:"/",
    element:<Root/>,
    children:[{
        path:"/",
        element:<MainIssueListing/>
    }
    ,{
        path:"/detail/:id",
        element:<IssueDetail/>
    }
]

}])
export default router