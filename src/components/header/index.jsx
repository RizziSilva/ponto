import React from 'react'
import { Link, NavLink } from 'react-router'
import { HEADER_MENU_OPTIONS, ROUTES } from 'app-constants'
import { HeaderLogo, LogoutIcon } from 'app-statics'
import style from './style.module.scss'

export function Header() {
  function handleLogoutClick() {}

  function renderMenuOptions() {
    return HEADER_MENU_OPTIONS.map(({ label, route }) => (
      <div className={style['container-option']}>
        <NavLink
          to={route}
          className={isActive =>
            `${style['option']} ${isActive ? style['active'] : ''}`
          }
        >
          {label}
        </NavLink>
      </div>
    ))
  }

  return (
    <div className={style['container-header']}>
      <div className={style['container-content']}>
        <div className={style['container-options']}>
          <Link className={style['link']} to={ROUTES.HOME.path}>
            <img
              className={style['image']}
              alt="Image do logo da empresa."
              src={HeaderLogo}
            />
          </Link>
          {renderMenuOptions()}
        </div>
        <div className={style['container-logout']}>
          <span className={style['name']}>William Rizzi da Silva</span>
          <button className={style['button']} onClick={handleLogoutClick}>
            <img alt="Ícone de logout" src={LogoutIcon} className="image" />
          </button>
        </div>
      </div>
    </div>
  )
}
