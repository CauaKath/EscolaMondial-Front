import React from 'react';
import { Link } from "react-router-dom";

import { Bg, Container, Header, Banner, Content } from './styles';

import banner from "../../assets/banner.jpg";

/**
 * Tela de início da escola
 */

const Home: React.FC = () => {
  return (
    <>
      <Bg>
        <Container>
          <Header>
            <h1>Escola Mondial</h1>
          </Header>
          <Banner src={banner} />
          <Content>
            <Link to={"alunos"}>
              <button>Lista de Alunos</button>
            </Link>
            <Link to={"chamada"} >
              <button>Chamada</button>
            </Link>
          </Content>
        </Container>
      </Bg>
    </>
  )
}

export default Home;