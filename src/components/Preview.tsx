import {Link, Outlet} from 'react-router-dom'

const Preview = () => {
  const getHeaderLinks = () => {
    const pages = JSON.parse(sessionStorage.getItem('pages') || '[]')
    const agenda = JSON.parse(sessionStorage.getItem('agenda') || 'false')
    const speakers = JSON.parse(sessionStorage.getItem('speakers') || 'false')

    const navItems = pages.map((page: { name: string; slug: string }, index: number) => {
      return <Link key={page.slug}
                   to={`/preview${index === 0 ? '' : `/${page.slug}`}`}>{index === 0 ? 'Home' : page.name}</Link>
    })
    if (agenda) {
      navItems.push(<Link key={'agenda'} to={`/preview/agenda`}>Agenda</Link>)
    }
    if (speakers) {
      navItems.push(<Link key={'speakers'} to={`/preview/speakers`}>Speakers</Link>)
    }

    return navItems
  }

  return (
    <div className={'preview-container'}>
      <header className={'preview'}>
        <div className={`nav-wrapper preview`}>
          <Link to={'/'} className={'link'}>Awesome event</Link>
          {getHeaderLinks()}
        </div>
      </header>
      <div className={'preview-content'}>
        <Outlet/>
      </div>
      <footer>
        <Link to={'/'} className={'link'}>Awesome event</Link>
        <p>ssw meetings</p>
      </footer>
    </div>
  )
}

export default Preview
