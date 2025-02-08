
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout } from './layout/layout'
import Main from './components/main/main'
import "./assets/styles/main.scss"
import SeminarList from './components/seminarsList/seminarsList'
import { getSeminars } from './lib/loader'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Main/>
        },
        {
          path: 'list',
          element: <SeminarList/>,
          loader: getSeminars
        }
      ]
    }
  ])

  return (
    <div className='App'>
      <div className='container'>
          <RouterProvider router={router}/>
      </div>
    </div>
  )

}


export default App
