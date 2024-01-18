import './App.scss'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Editor from './components/Editor.tsx'
import CreatorPage from './components/CreatorPage.tsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <header>
            <Nav>Home</Nav>
            <Link to={'/preview'}>Preview</Link>
          </header>
          <CreatorPage/>
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
          <Editor />
        </>
      )
    },
    {
      path:'preview',
      element:(
        <>
          <header className={'preview'}>
            <Nav classname={'preview'}>Preview</Nav>
          </header>
          {/*<PreviewPage/>*/}
          <footer>
            <Link to={'/'}>Home</Link>
            <p>ssw meetings</p>
          </footer>
        </>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App
