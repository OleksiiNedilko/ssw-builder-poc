import './App.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Editor from './components/Editor.tsx'
import CreatorPage from './components/CreatorPage.tsx'
import Preview from './components/Preview.tsx'
import PreviewContent from './components/PreviewContent.tsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <header>
            <Nav>Home</Nav>
            <button type={'button'} onClick={() => {
              sessionStorage.clear()
              localStorage.clear()
              window.location.reload()
            }}>Clear state
            </button>
          </header>
          <CreatorPage/>
        </>
      ),
    },
    {
      path: 'editor',
      element: (
        <>
          <header>
            <Nav>Editor</Nav>
          </header>
          <Editor/>
        </>
      )
    },
    {
      path: 'preview',
      element: (
        <Preview/>
      ),
      children: [
        {
          path: '',
          element: (
            <PreviewContent/>
          )
        },
        {
          path: 'agenda',
          element: (
            <div>
              <h1>Agenda</h1>
            </div>
          )
        },
        {
          path: 'speakers',
          element: (
            <div>
              <h1>Speakers</h1>
            </div>
          )
        },
        {
          path: ':slug',
          element: (
            <PreviewContent/>
          )
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
