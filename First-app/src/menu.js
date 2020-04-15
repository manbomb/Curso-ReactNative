import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/multi'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: () => <Flex/>,
        navigationOptions: {
            title: 'Flex Exerc.'
        }
    },
    ListaFlex: {
        screen: () => <ListaFlex/>,
        navigationOptions: {
            title: 'Lista de Alunos'
        }
    },
    ComunicacaoIndireta: {
        screen: () => <TextoSincronizado/>,
        navigationOptions: {
            title: 'Com. Indireta'
        }
    },
    ComunicacaoDireta: {
        screen: () => <Avo nome='João' sobrenome='Silva'></Avo>,
        navigationOptions: {
            title: 'Com. Direta'
        }
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label={'Ano -> '} ano={19}></ValidarProps>
    },
    Contador: {
        screen: () => <Contador></Contador>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {
            title: 'Mega Sena'
        }
    }
}, { drawerWidth: 300 })