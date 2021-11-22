import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Musica from '../pages/Musica/Musica'
import Cidade from '../pages/Cidade/Cidade'
import { Menu } from './NavMenuStye'

const NavMenu = () => {
    return (
        <div>
            <Menu>
                <Link to='/'>Home</Link>
                <Link to='/musica'>Musica</Link>
                <Link to='/cidade'>Cidade</Link>
            </Menu>
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/musica' component={Musica} />
                    <Route path='/cidade' component={Cidade} />
                </Switch>
            </div>
        </div>
    )
}

export default NavMenu
