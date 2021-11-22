import React from 'react'
import { Container } from './CidadeStyle'
const Cidade = () => {
    let recife = 'https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/brazil/recife/recife-banner-mobile-1024x553.jpg'
    return (
        <Container>
            <h1>Cidade favorita?</h1>
            <div>
                <img src={recife} alt='Recife' />
                <p><span>Recife</span> obviamente, não só por ser a capital do meu estado,
                mas tambem por ser um lugar de uma beleza incrivel, e de uma historia muito interessante
                O Recife existe como porto antes mesmo de se tornar cidade. Desde o século XVI, quando
                Duarte Coelho tomou posse da capitania de Pernambuco, os arrecifes de arenito que protegem
                a bacia dos rios Capibaribe, Beberibe e Tejipió tornaram-se o porto natural de escoadouro
                das riquezas aqui produzidas.</p>
            </div>
        </Container>
    )
}

export default Cidade