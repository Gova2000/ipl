// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LMatch from '../LatestMatch'

import MAtcard from '../MatchCard'

import './index.css'

class Tmatch extends Component {
  state = {list1: [], latestmatch: {}, banner: '', toggle: true}

  componentDidMount() {
    this.Lget()
  }

  Lget = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const fet = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data1 = await fet.json()
    console.log(data1)
    const update = {
      bannerUrl: data1.team_banner_url,
      latest: data1.latest_match_details,
      recent: data1.recent_matches,
    }

    const {bannerUrl, latest, recent} = update
    const formatLatest = {
      empires: latest.umpires,
      result: latest.result,
      manoftheMatch: latest.man_of_the_match,
      id: latest.id,
      date: latest.date,
      venue: latest.venue,
      competingTeam: latest.competing_team,
      competingTeamlogo: latest.competing_team_logo,
      firstInnings: latest.first_innings,
      secondInnings: latest.second_innings,
      matchStatus: latest.match_status,
    }

    const formatRecent = recent.map(each => ({
      empires: each.umpires,
      result: each.result,
      manoftheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamlogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      banner: bannerUrl,
      latestmatch: formatLatest,
      list1: formatRecent,
      toggle: false,
    })
  }

  render() {
    const {banner, latestmatch, list1, toggle} = this.state

    return (
      <div className="linkbg1">
        {toggle ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <ul className="linkbg">
              <img src={banner} alt="team banner" className="banner" />
              <h1 className="h1">Latest Matches</h1>

              <LMatch latst={latestmatch} key={latestmatch.id} />
            </ul>
            <ul className="linkunorder">
              {list1.map(each => (
                <MAtcard match={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Tmatch
