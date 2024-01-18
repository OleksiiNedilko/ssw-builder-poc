import {useEffect, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'

const CreatorPage = () => {
  const [setAgenda, setSetAgenda] = useState(false)
  const [setSpeakers, setSetSpeakers] = useState(false)
  const [pages, setPages] = useState<{ name: string; slug: string }[]>([])

  const navigate = useNavigate()
const [params] = useSearchParams()

  useEffect(() => {
    if(params.toString()){
      const name = params.get('name')
      const slug = params.get('slug')
      if(name&&slug) {
        setPages([...pages, {name, slug}])
      }
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
      {pages.map(page => <p>{page.name}</p>)}
      <button type={'button'}
              onClick={() => {
                const page = {name: `Page${pages.length}`, slug: `page-${pages.length}`}
                navigate(`/editor?slug=${page.slug}&name=${page.name}`)
              }}>add page
      </button>
    </div>
  )
}

export default CreatorPage
