import axios from 'axios'

export const apiGithubUser = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const apiGithubSearch = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

export const apiGithubIssues = axios.create({
  baseURL: 'https://api.github.com/repos',
})
