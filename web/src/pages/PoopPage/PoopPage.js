import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import pizza from './images/pizza.jpg'

const PoopPage = () => {
  return (
    <>
      <MetaTags title="Poop" description="Poop page" />

      <h1>PoopPage</h1>
      <h2>This is the home of poop</h2>
      <p>
        <Link to={routes.home()}> Home </Link>
      </p>
      <img src={pizza} alt="pizza" />
    </>
  )
}

export default PoopPage
