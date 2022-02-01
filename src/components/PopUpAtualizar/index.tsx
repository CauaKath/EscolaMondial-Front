import React, { useEffect, useState } from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify, successfulNotify } from '../../hooks/SystemToasts';

import api from '../../services/api';

/**
 * PopUp de atualização dos dados do aluno
 */

interface IAluno {
  matricula: number;
  nome: string;
  nascimento: string;
}

interface IPopupVerbaAtualizar {
    fechar: () => void;
    matricula: number;
}

let aluno: IAluno = {
  matricula: 0,
  nome: "",
  nascimento: ""
}

const Atualizar: React.FC<IPopupVerbaAtualizar> = ({ fechar, matricula }) => {
  const [alunoBD, setAlunoBD] = useState<IAluno>();

  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      aluno.nome = event.target.value;
    } else {
      aluno.nome = alunoBD ? alunoBD.nome : '';
    }
  }

  const handleNascimento = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      aluno.nascimento = event.target.value;
    } else {
      aluno.nascimento = alunoBD ? alunoBD.nascimento : '';
    }
  }

  const handleAluno = async() => {
    try {
      await api.get<IAluno>(`alunos/${matricula}`)
      .then((response => setAlunoBD(response.data)))
      .catch(() => errorfulNotify("Não foi possível encontrar o aluno."));
    } catch(e) {
      console.log(`Error: ${e}`);
      errorfulNotify("Erro ao buscar aluno.");
    }
  }

  async function editarAluno() {
    try {
      aluno.matricula ? '' : aluno.matricula = alunoBD ? alunoBD.matricula : 0;
      aluno.nome ? '' : aluno.nome = alunoBD ? alunoBD.nome : '';
      aluno.nascimento ? '' : aluno.nascimento = alunoBD ? alunoBD.nascimento : '';

      await api.put<IAluno>(`alunos/${matricula}`, aluno)
      .then(() => successfulNotify("Aluno editado com sucesso"))
      .catch((error) => errorfulNotify(error.response.data.titulo));

      fechar();
    } catch(e) {
      console.log(`Error: ${e}`);
      errorfulNotify('Erro ao editar aluno');
    }
  }

  useEffect(() => {
    handleAluno();
  }, []);

  return (
    <Container>
      <PopUp>
        <Title>
          <h1>Editar</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Scroll>
          <div>
              <label>Matrícula:</label>
              <input type="number" id="matricula" value={alunoBD?.matricula} disabled />
          </div>                 
          <div>
              <label>Nome:</label>
              <input type="text" id="nome" defaultValue={alunoBD?.nome} onChange={handleNome} />
          </div>
          <div>
              <label>Nascimento:</label>
              <input type="date" id="nascimento" defaultValue={alunoBD?.nascimento} onChange={handleNascimento} />
          </div>                      
          <div>
              <button onClick={() => editarAluno()}>Enviar</button>
          </div>                          
        </Scroll>
      </PopUp>
    </Container>
  );
}

export default Atualizar;