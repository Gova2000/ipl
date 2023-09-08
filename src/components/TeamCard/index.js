// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TCard = props => {
  const {det} = props
  const {id, name, teamImageUrl} = det

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="li">
        <div className="row1">
          <img src={teamImageUrl} alt={name} className="img" />
          <p className="h1t">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TCard
