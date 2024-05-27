/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import * as C from './styles'


function Main() {
    return (
        <C.Section>
            <span>Dev <br />
                ADVOGADO
            </span>
            <div>
                <a href='#sobre'>Sobre min</a>
                <a href='#atuacao'>Atuações</a>
                <a href='#depoimentos'>Depoimentos</a>
            </div>

        </C.Section>
    )
}

export default Main