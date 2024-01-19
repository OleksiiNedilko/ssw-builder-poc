import {useEffect, useRef, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'

const CreatorPage = () => {
  const [setAgenda, setSetAgenda] = useState(sessionStorage.getItem('agenda') === 'true')
  const [setSpeakers, setSetSpeakers] = useState(sessionStorage.getItem('speakers') === 'true')
  const [pages, setPages] = useState<{
    name: string;
    slug: string
  }[]>(sessionStorage.getItem('pages') ? JSON.parse(sessionStorage.getItem('pages')!) : [])

  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const firstRender = useRef(true)

  useEffect(() => {
    if (params.toString() && firstRender.current) {
      const name = params.get('name')
      const slug = params.get('slug')
      if (name && slug) {
        setPages(prev => [...prev, {name, slug}])
        setParams({}, {replace: true})
      }
      firstRender.current = false
    }
  }, [params])

  return (
    <div className={'creator-container'}>
      <h1>Creator Page</h1>
      <label className={'checkbox-wrapper'}>
        <input type="checkbox" checked={setAgenda} onChange={e => setSetAgenda(e.target.checked)}/>
        <span>add agenda page</span>
      </label>
      <label className={'checkbox-wrapper'}>
        <input type="checkbox" checked={setSpeakers} onChange={e => setSetSpeakers(e.target.checked)}/>
        <span>add speakers page</span>
      </label>
      {pages.map(page => <p key={page.slug}>{page.name}</p>)}
      <button type={'button'}
              onClick={() => {
                const page = {name: `Page${pages.length}`, slug: `page-${pages.length}`}
                sessionStorage.setItem('pages', JSON.stringify(pages))
                sessionStorage.setItem('agenda', JSON.stringify(setAgenda))
                sessionStorage.setItem('speakers', JSON.stringify(setSpeakers))
                navigate(`/editor?slug=${page.slug}&name=${page.name}`)
              }}>add page
      </button>
    </div>
  )
}

export default CreatorPage
