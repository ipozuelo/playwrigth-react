import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import LayaoutPublic from "../layout/LayaoutPublic";
import LayoutPrivate from "../layout/LayoutPrivate";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([

  {
    path:'/',
    element:<LayaoutPublic/>,
    errorElement: <NotFound />,
    children:[
      {
        errorElement:<NotFound/>,
        children:[

          {
            index: true,
            element: <Home />
          },
          {
            path: '/login',
            element: <Login />
          },

          {
            path: '/register',
            element: <Register />
          },
        
          {
            path: "/search",
            element: <LayoutPrivate />,
            children:[
              {
                index:true,
                element:<Search/>
              }
            ]
          },

        ]

      }
        

      
    ]
  },
  
]);
