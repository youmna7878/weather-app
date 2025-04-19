import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
  let routing = createBrowserRouter([
    {
      path: "", element: <Layout></Layout>, children: [
        { index: true, element:<Home></Home>  },
        { path: '*', element: <NotFound></NotFound> },
      ]
    }
  ])
  return (
    <>
            <RouterProvider router={routing}></RouterProvider>

    </>
  )
}

export default App
