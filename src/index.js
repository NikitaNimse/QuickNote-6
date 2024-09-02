import ReactDOM from "react-dom/client";
import Home from "./Views/Home/Home.js"
import Add from "./Views/Add/Add.js"
import Show from "./Views/Show/Show.js"

import{
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
 const router = createBrowserRouter([   
    {
        path:"/",
        element:< Home/>
    },
    {
        path:"/add",
        element:<Add />
   },
    {
        path:"/show",
        element:<Show/>
    }
])
root.render(<div ><RouterProvider router={router}/> </div>)