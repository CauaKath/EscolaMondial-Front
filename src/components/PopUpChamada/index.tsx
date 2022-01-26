import React, { useState, useEffect } from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify } from '../../hooks/SystemToasts';

import api from '../../services/api';

interface IAlunos {
  nome: string;
}

interface IPopupVerbaChamada {
    fechar: () => void;
}

const Chamada: React.FC<IPopupVerbaChamada> = ({ fechar }) => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);

  async function handleAluno() {
    try {
      await api.get<IAlunos[]>(`alunos`)
      .then((response => {
        setAlunos(response.data); 
      })).catch(() => errorfulNotify("Não foi possível encontrar os alunos."));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleAluno();
  });

    return (
        <Container>
            <PopUp>
                <Title>
                    <h1>Chamada</h1>
                    <span onClick={() => fechar()} />
                </Title>
                <Scroll>
                    <div id="table">
                        <h1>Nome:</h1>
                        <h1>Presença:</h1>
                    </div>
                    {
                        alunos && alunos.length ?
                            alunos.map((res) => (
                                <div id="lista">
                                    <p>{res.nome}</p>
                                    <input type="checkbox" id="status" />   
                                </div>
                            ))
                        : ''
                    }
                    <div id="enviar">
                        <button>Enviar</button>
                    </div>                                         
                </Scroll>
            </PopUp>
        </Container>
    );
}

export default Chamada;