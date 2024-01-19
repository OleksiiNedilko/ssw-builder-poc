import {FC, PropsWithChildren} from 'react'

const Nav:FC<PropsWithChildren<{classname?: string}>> = ({classname,children}) => {
  return (
    <div className={`nav-wrapper${classname?` ${classname}`:''}`}>
      <span>{children}</span>
    </div>
  )
}

export default Nav
