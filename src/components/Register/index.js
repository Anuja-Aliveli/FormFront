import {Component} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuid} from 'uuid'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

class Register extends Component {
  state = {
    name: '',
    age: '',
    contact: '',
    password: '',
    isError: false,
    errorMsg: '',
    isLoading: false,
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onAge = event => {
    this.setState({age: event.target.value})
  }

  onContact = event => {
    this.setState({contact: event.target.value})
  }

  onForm = async event => {
    event.preventDefault()
    this.setState({isLoading: true})

    const {name, age, contact, password} = this.state
    const formDetails = {
      name,
      age: parseInt(age),
      contact,
      password,
      id: uuid(),
    }

    const url = 'http://localhost:5000/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDetails),
    }
    try {
      const response = await fetch(url, options)

      if (response.ok === true) {
        this.setState({
          isLoading: false,
          name: '',
          password: '',
          age: '',
          contact: '',
          isError: false,
          errorMsg: '',
        })
      } else {
        const data = await response.json()
        const {message} = data

        this.setState({
          isError: true,
          errorMsg: message,
          isLoading: false,
        })
      }
    } catch (error) {
      this.setState({
        isError: true,
        errorMsg: 'Something went wrong. Please try again later.',
        isLoading: false,
      })
    }
  }

  renderInitial = () => {
    const {isError, errorMsg} = this.state
    return (
      <>
        <button className="button" type="submit">
          Submit
        </button>
        {isError && <p className="error">{errorMsg}</p>}
      </>
    )
  }

  renderLoader = () => (
    <button className="button back" type="button" disabled>
      <Loader type="Oval" color="#ffffff" height={25} width={25} />
    </button>
  )

  renderButton = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case false:
        return this.renderInitial()
      case true:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {name, age, contact, password} = this.state
    return (
      <div className="bg-container">
        <Header />
        <div className="app-container">
          <form className="form-container" onSubmit={this.onForm}>
            <h1 className="head">Register</h1>
            <input
              className="input"
              type="text"
              placeholder="Enter username"
              onChange={this.onName}
              value={name}
            />
            <input
              className="input"
              type="password"
              placeholder="Enter password"
              onChange={this.onPassword}
              value={password}
            />
            <input
              className="input"
              type="text"
              placeholder="Enter Age"
              onChange={this.onAge}
              value={age}
            />
            <input
              className="input"
              type="text"
              placeholder="+91 "
              onChange={this.onContact}
              value={contact}
            />
            {this.renderButton()}
          </form>
        </div>
      </div>
    )
  }
}
export default Register
