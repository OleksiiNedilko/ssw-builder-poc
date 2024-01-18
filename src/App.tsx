import './App.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from './components/Nav.tsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <header>
            <Nav>Home</Nav>
          </header>
          {/*<BuilderPage/>*/}
        </>
      ),
    },
    {
      path:'editor',
      element:(
        <>
          <header>
            <Nav>Editor</Nav>
          </header>
          {/*<PreviewPage/>*/}
        </>
      )
    },
    {
      path:'preview',
      element:(
        <>
          <header>
            <Nav>Preview</Nav>
          </header>
          {/*<PreviewPage/>*/}
        </>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App
