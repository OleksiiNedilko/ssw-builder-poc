import {FC, PropsWithChildren} from 'react'
import {Link} from 'react-router-dom'

const Nav:FC<PropsWithChildren<{classname?: string}>> = ({classname,children}) => {
  return (
    <div className={`nav-wrapper${classname?` ${classname}`:''}`}>
      <span>{children}</span>
      <Link to={'/'}>Home</Link>
      <Link to={'/preview'}>Preview</Link>
    </div>
  )
}

export default Nav
