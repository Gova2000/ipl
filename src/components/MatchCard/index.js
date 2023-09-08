// Write your code here
import './index.css'

const MAtcard = props => {
  const {match} = props

  const {
    empires,
    result,
    manoftheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamlogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = match

  const col = matchStatus === 'Lost' ? ' fs3 col1' : 'fs3 col2'

  return (
    <li className="li2">
      <img
        src={competingTeamlogo}
        alt={`competing team ${competingTeam}`}
        className="liimg"
      />
      <p className="fs1">{competingTeam}</p>
      <p className="fs2">{result}</p>
      <p className={col}>{matchStatus}</p>
    </li>
  )
}
export default MAtcard
