import React from 'react'
import { MusicConatainer } from './MusicaStyle'
const Musica = () => {
    return (
        <MusicConatainer>

            <div>
                <h1>Dudu - LIMBO (Áudio Oficial)</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gEnlPIVRpSM"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen>
                    </iframe>

                    <aside>
                        <h3><span>Amor, caminhar só é um desafio, Eu tentei salvar o mundo, porém que efeito surtiu</span></h3>

                        <p>Por si só essa musica é auto explicativa, as vezes chego a achar
                        que vivo em um loop infinito onde meus dias são exatamente essa musica, <br /> 
                        mas as coisas não param... por isso ouço essa musica como energetico pra me dar uma força extra pra
                        sair do fundo do poço</p>
                    </aside>
            </div>

        </MusicConatainer>
    )
}

export default Musica
