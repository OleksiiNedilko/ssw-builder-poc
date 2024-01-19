import {FC} from 'react'
import {useParams} from 'react-router-dom'

const PreviewContent: FC = () => {
  const {slug} = useParams()
  const homepageSlug = JSON.parse(sessionStorage.getItem('pages') || '[]')[0].slug

  const pageKey = slug || homepageSlug

  const pageContent = JSON.parse(localStorage.getItem(pageKey) || '')

  if (!pageContent) {
    return <h1>Page not found</h1>
  }

  return (
    <>
      <style>
        {pageContent.css}
      </style>
      <script>
        {pageContent.js}
      </script>
      <div dangerouslySetInnerHTML={{__html: pageContent.body}}/>
    </>
  )
}

export default PreviewContent
