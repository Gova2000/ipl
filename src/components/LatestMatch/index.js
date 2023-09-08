// Write your code here

import './index.css'

const LMatch = props => {
  const {latst} = props
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
  } = latst

  return (
    <div className="latst">
      <div className="linkcol1">
        <div className="linkcol">
          <p>{competingTeam}</p>
          <p className="h1">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamlogo} alt={competingTeam} className="imgli" />
      </div>
      <hr />
      <div className="linkcol">
        <h1 className="h1">First Innings</h1>
        <p>{firstInnings}</p>
        <h1 className="h1">Second Innings</h1>
        <p>{secondInnings}</p>
        <h1 className="h1">Man Of The Match</h1>
        <p>{manoftheMatch}</p>
        <h1 className="h1">Umpires</h1>
        <p>{empires}</p>
      </div>
    </div>
  )
}

export default LMatch
