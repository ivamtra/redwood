import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>{article.body}</p>
    </article>
  )
}
