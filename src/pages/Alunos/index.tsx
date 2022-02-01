import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Container, Lista, PopupModal, Bg  } from './styles'

import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

import Cadastro from '../../components/PopUpCadastro';
import Atualizar from '../../components/PopUpAtualizar';

import { errorfulNotify } from '../../hooks/SystemToasts';

import api from '../../services/api';

/**
 * Tela de Listagem de alunos com CRUD completo
 */

interface IAlunos {
  matricula: number;
  nome: string;
  nascimento: string;
}

const Alunos: React.FC = () => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);

  const handleAlunos = async() => {
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
    handleAlunos();
  });

  async function deletarAluno(matricula: number) {
    try {
      await api.delete<IAlunos[]>(`alunos/${matricula}`)
      .then((response => {
        setAlunos(response.data); 
      })).catch(() => errorfulNotify("Não foi possível deletar o aluno."));
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <Bg>
        <Container>
          <div id="menu">
            <Link to={"/"}>
              <button>Voltar</button>
            </Link>
            <h1>Alunos</h1>
            <div>
              <PopupModal closeOnEscape trigger={<button>Cadastrar</button>} modal>
                {(close: any) => (
                  <Cadastro fechar={close} />
                )}
              </PopupModal>
            </div>
          </div>
          <Lista>
            <div id="table">
              <h1>Matrícula</h1>
              <h1>Nome</h1>
              <h1>Nascimento</h1>
              <h2>Atualizar</h2>
              <h2>Deletar</h2>
            </div>
            {
              alunos && alunos.length ?
                alunos.map((aluno) => (
                  <div id="lista" key={aluno.matricula}>
                    <p>{aluno.matricula}</p>
                    <p>{aluno.nome}</p>
                    <p>{aluno.nascimento}</p>
                    <PopupModal closeOnEscape trigger={<button><BiEdit size={25} id={"edit"} /></button>} modal>
                      {(close: any) => (
                        <Atualizar fechar={close} matricula={aluno.matricula} />
                      )}
                    </PopupModal>
                    <button><AiFillDelete size={25} onClick={() => deletarAluno(aluno.matricula)}/></button>
                  </div>
                ))
              : ''
            }
          </Lista>
        </Container>
      </Bg>
    </>
  );
};

export default Alunos;