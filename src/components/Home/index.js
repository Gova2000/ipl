// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {list: [], toggle: true}

  componentDidMount() {
    this.get()
  }

  get = async () => {
    const fech = await fetch('https://apis.ccbp.in/ipl')
    const data = await fech.json()
    const {teams} = data
    const format = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({list: format, toggle: false})
  }

  render() {
    const {list, toggle} = this.state

    return (
      <div className="mainbg">
        {toggle ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <div className="heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="mainimg"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="unorderlist">
              {list.map(each => (
                <TCard det={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
