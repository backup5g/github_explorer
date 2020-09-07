import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import api from '../../services/api'
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories'
    )

    return storagedRepositories ? JSON.parse(storagedRepositories) : []
  })

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories', 
      JSON.stringify(repositories)
    )
  }, [repositories])

  async function handleAddRepository(e: FormEvent): Promise<void> {
    e.preventDefault()

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório')

      return
    }

    try {
      const { data: repository } = await api.get<Repository>(`repos/${newRepo}`)

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch {
      setInputError('Erro na busca pelo repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="github_explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)} 
          placeholder="Digite o nome do repositório" 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{inputError}</Error> }

      <Repositories>
        {repositories.map(repo => (
          <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
            <img 
              src={repo.owner.avatar_url}
              alt={repo.owner.login} 
            />

            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={24} />
          </Link>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;