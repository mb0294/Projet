import React from 'react'

const register = () => {
  return (
    <div>
        <div className="col-md-12">
  <div className="login_page">
    <div className="form">
      <form className="register_form"> <input type="text" placeholder="username" /> <input type="password" placeholder="password" /> <input type="email" placeholder="email" />
        <div style={{marginBottom: 9}}> <textarea id="bio_id" placeholder="Tell us about yourself" rows={13} cols={35} maxLength={500} defaultValue={""} /> </div> <button>Create</button>
        <p className="message">Already Registered? <a href="#">Login</a></p>
      </form>
      <form className="login_form"> <input type="text" placeholder="Username" /> <input type="password" placeholder="password" /> <button>login</button>
        <p className="message">Not Registered? <a href="#">Register Now!</a></p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default register