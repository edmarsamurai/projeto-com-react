import React from 'react';

import * as C from './styles'

function Section() {
    return (
        <C.Section id='atuacao'>

            <h1>Áreas de Atuação</h1>
            <C.P>Minha missão é levar aos meus clientes soluções confiáveis e eficazes.</C.P>

            <C.Div>

                <C.Divs>
                    <span>Direito Civil</span>
                    <p>O escritório irá prestar toda a assistência necessária em termos de renegociação de dívidas,
                         de cobrança judicial e extrajudicial de créditos. 
                         Vou lhe orientar com eficiência no que tange seus direitos e obrigações.</p>
                </C.Divs>

                <C.Divs>
                    <span>Direito Tributário</span>
                    <p>O direito tributário garante o aconselhamento de forma preventiva a respeito
                         de todos os tipos de tributos, em todas as esferas (municipal, estadual e federal), 
                         assim como estudos sobre planejamento tributário.</p>
                </C.Divs>

                <C.Divs>
                    <span>Direito Empresarial</span>
                    <p>Prestado às empresas em termos de elaboração à disputas comerciais, 
                        ao planejamento e da celebração de todos os tipos de contratos comerciais
                         com aconselhamento de forma preventiva.</p>
                </C.Divs>

            </C.Div>

        </C.Section>
    )
}


export default Section