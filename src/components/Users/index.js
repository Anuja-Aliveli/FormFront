import {Component} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Popup from 'reactjs-popup'
import Loader from 'react-loader-spinner'
import {MdDeleteForever} from 'react-icons/md'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import Header from '../Header'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Users extends Component {
  state = {apiStatus: apiConstants.initial, userList: []}

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = async () => {
    this.setState({apiStatus: apiConstants.progress})
    try {
      const url = 'http://localhost:5000/users/'
      const response = await fetch(url)
      if (response.ok === true) {
        const data = await response.json()
        this.setState({apiStatus: apiConstants.success, userList: data.users})
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (err) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onDelete = async id => {
    this.setState({apiStatus: apiConstants.progress})
    try {
      const url = `http://localhost:5000/delete/${id}`
      const options = {
        method: 'DELETE',
      }
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        console.log(data)
        this.setState(prevState => ({
          userList: prevState.userList.filter(each => each.id !== id),
          apiStatus: apiConstants.success,
        }))
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (err) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="app-container-user">
      <Loader type="Oval" color="#ffffff" height={50} width={80} />
    </div>
  )

  renderPopup = user => (
    <Popup
      modal
      trigger={
        <button type="button" className="preview">
          Preview
        </button>
      }
    >
      {close => (
        <>
          <div className="modal-container">
            <AiOutlineCloseSquare
              className="icon-close"
              onClick={() => close()}
            />
            <p className="text-popup">Id: {user.id}</p>
            <p className="text-popup">Name: {user.name}</p>
            <p className="text-popup">Age: {user.age}</p>
            <p className="text-popup">Contact: {user.contact}</p>
          </div>
        </>
      )}
    </Popup>
  )

  renderSuccess = () => {
    const {userList} = this.state
    const isZero = userList.length === 0
    return (
      <>
        {isZero && (
          <div className="app-container-user">
            <h1 className="name">No Users!</h1>
          </div>
        )}
        {!isZero && (
          <ul className="app-container-user">
            <li className="list-item-user" key="column">
              <p className="text height">Name</p>
              <p className="text height">Age</p>
              <p className="text height">Contact</p>
              <p className="text height">Preview</p>
              <p className="text height">Delete</p>
            </li>
            {userList.map(eachUser => (
              <li className="list-item-user" key={eachUser.id}>
                <p className="text">{eachUser.name}</p>
                <p className="text">{eachUser.age}</p>
                <p className="text">{eachUser.contact}</p>
                {this.renderPopup(eachUser)}
                <MdDeleteForever
                  color="#ffffff"
                  size={20}
                  className="icon"
                  onClick={() => this.onDelete(eachUser.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }

  renderFailure = () => (
    <div className="app-container-user">
      <h1 className="name">Something went wrong.Try Again</h1>
      <button className="button-retry" type="button" onClick={this.getUsers}>
        Retry
      </button>
    </div>
  )

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderSuccess()
      case apiConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderResult()}
      </>
    )
  }
}
export default Users
