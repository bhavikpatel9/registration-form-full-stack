import { useState } from 'react'


import './App.css'

function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    number: '',
    password: ''
  })

  //handling onchange values
  const handleOnChange = (e) => {
    // console.log(e)
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value
    })

  }

  //handling form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch('http://localhost:5000/api/user/registration', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        setUser({
          username: '',
          email: '',
          number: '',
          password: ''
        })
      }

      console.log(response);

    } catch (error) {
      console.log("register front-end", error)
    }

  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder='enter your name'
            name="username"
            id='username'
            value={user.username}
            onChange={handleOnChange}
            autoComplete='off'
            required
          />
        </div>

        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            placeholder='enter your email'
            name="email"
            value={user.email}
            onChange={handleOnChange}
            autoComplete='off'
            required
          />
        </div>

        <div>
          <label htmlFor="username">Number</label>
          <input
            type="number"
            placeholder='enter your number'
            name="number"
            value={user.number}
            onChange={handleOnChange}
            autoComplete='off'
            required
          />
        </div>

        <div>
          <label htmlFor="username">Password</label>
          <input
            type="password"
            placeholder='enter your password'
            name="password"
            value={user.password}
            onChange={handleOnChange}
            autoComplete='off'
            required
          />
        </div>

        <button type='submit'>Register now</button>
      </form>
    </>
  )
}

export default App
