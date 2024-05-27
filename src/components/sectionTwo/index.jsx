import React from 'react';
import { LiaArrowCircleRightSolid } from "react-icons/lia";

import * as C from './styles'


function SectionTwo() {
    return (
        <C.Section id='sobre'>

            <C.Container>
                <span>Mais de 1 décadas de experiência</span>
                <h2>Advogado Dev</h2>
                <p>Especialista em contratos com experiência no segmento de assessoria jurídica para empresas e para startups,
                    desenvolvendo compliance e assegurando a saúde comercial,
                    jurídica e administrativa dos negócios</p>

                <a href="https://wa.me/5543900099070" target="_blank" rel="noopener noreferrer">
                Agende seu horário <LiaArrowCircleRightSolid /></a>

                <div></div>
            </C.Container>

            <C.Wrapper>
                <C.Aside>
                    <p>Atendimento aos clientes fora do escritório, facilitando os encontros</p>
                </C.Aside>
                <C.Aside>
                    <p>Aprofundamento jurídico em cada caso, garantindo alta qualidade e excelência.</p>
                </C.Aside>
                <C.Aside>
                    <p>Advogo em todos os tribunais do Brasil</p>
                </C.Aside>
                <C.Aside>
                    <p>Mais de 10 anos de experiência na advocacia</p>
                </C.Aside>
                <C.Aside>
                    <p>Foco efetivamente em buscar os melhores resultados para meus clientes</p>
                </C.Aside>
                <C.Aside>
                    <p>Se necessário, possuo equipe ampla para antender simultâneamente várias causas.</p>
                </C.Aside>
            </C.Wrapper>

        </C.Section>
    )
}

export default SectionTwo