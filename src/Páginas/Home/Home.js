import React from 'react'
import { Container } from './HomeStyle'
import { Link } from 'react-router-dom'

import hero from '../../assets/img/illustration-hero.svg'
import musicLogo from '../../assets/img/icon-music.svg'
import backGround from '../../assets/img/pattern-background-desktop.svg'

const Home = () => {
    return (
        <Container imgUrl={backGround}>
           <main>

                <div>
                    <img className='dance' src={hero} alt='banner' />
                </div>

                <div>
                    <h1>Bem vindo(a) a minha página!</h1>
                    <p>Bora ver um pouco sobre minha musica e minha cidade favorita?</p>

                    <div>
                        <Link to='/musica'><img src={musicLogo} alt='Simbolo de musica' /></Link>
                    </div>

                </div>
           </main>
        </Container>
    )
}

export default Home
