import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-white p-8 py-15 tracking-widest">
      <h1 className="font-jalnan h1 text-primary">
        <Link to={`/`}>Fontory</Link>
      </h1>
    </header>
  )
}
