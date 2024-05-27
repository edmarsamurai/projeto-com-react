import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import Foto from '../../img/foto.jpg'
import Mulher from '../../img/mulher.jpg'
import Homem from '../../img/homem.jpg'

import * as C from './styles'

function SectionThree() {
    return (
        <C.Section id='depoimentos'>

            <h3>Confiaram em meu trabalho</h3>
            <span>Confira abaixo depoimentos de clientes que confiaram em meu trabalho.</span>


            <C.Container>
                <C.Divs>
                    <img src={Homem} alt="homem " />
                    <C.P>Não conhecia o Dev e tive uma grata surpresa ao encontrá-lo
                        durante a minha busca por um advogado que me auxiliasse na área tributária.
                        Recomendo!</C.P>

                    <span>Paulo Marcos</span>

                    <div>
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                    </div>

                </C.Divs>

                <C.Divs>
                    <img src={Foto} alt="foto mulher loira" />
                    <C.P>Dev é um advogado excelente,
                        sempre bastante focado e muito empenhado em garantir
                        a satisfação total dos clientes. Ótimo trabalho!</C.P>

                    <span>Fernanda Caetano</span>
                    <div>
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                    </div>

                </C.Divs>

                <C.Divs>
                    <img src={Mulher} alt="mulher morena clara" />
                    <C.P>Dev é um profissional extremamente cuidadoso e atencioso,
                        me auxiliou em todas as fases do meu processo. Muito obrigado.</C.P>

                    <span>Ana Paula</span>
                    <div>
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                    </div>

                </C.Divs>
            </C.Container>

        </C.Section>

    )
}

export default SectionThree