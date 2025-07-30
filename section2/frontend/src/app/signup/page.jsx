import React from 'react'

const Signup = () => {
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        *{\n            font-family: Roboto;\n        }\n        .card{\n            /* border: 2px solid red; */\n            width: 30%;\n            border-radius: 10px;\n            padding: 30px;\n            box-sizing: border-box;\n            box-shadow:3px 3px 10px 0 #00000073 ;\n            background-color: white;\n        }\n        body\n        {\n           \n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            /* background-image: linear-gradient(0deg, rgb(210, 88, 88),rgb(89, 89, 231) ); */\n            background-image:url(https://m.media-amazon.com/images/I/81V2hzNkcsL.jpg) ;\n        }\n        .form-title{\n            text-align: center;\n            margin: 30px 0 ;\n        }\n        .text-input{\n            display: block;\n            width: 400px;\n            padding: 10px 5px;\n            box-sizing: border-box;\n            border: 1px solid black;\n            margin-top: 5px;\n            margin-bottom: 20px;\n        }\n        .signup-btn{\n            display: block;\n            width: 100%;\n            padding: 10px;\n            border-radius: 5px;\n            background-color: blueviolet;\n            color: white;\n            border: none;\n            margin-top: 30px;\n        }\n        .link\n        {\n            color: blueviolet;\n            text-decoration: none;\n            display: block;\n        }\n        .forgot-link\n        {\n            text-align: right;\n            margin-top: 20px;\n\n        }\n        .signup-link{\n\n            text-align: center;\n            margin-top: 30px;\n            text-decoration: none;\n            display: block;\n        }\n        .google-btn{\n            display: block;\n            width: 100%;\n            padding: 10px;\n            border-radius: 5px;\n            border: 1px solid black;\n            margin-top: 30px;\n        }\n    "
    }}
  />
  <div className="card">
    <h2 className="form-title">Sign up </h2>
    <form action="">
      <label htmlFor="">Name</label>
      <input type="text" className="text-input" />
      <label htmlFor="">Email Address</label>
      <input type="email" className="text-input" />
      <label htmlFor="">Password</label>
      <input type="password" className="text-input" />
      <a href="" className="link forgot-link">
        Forgot Password
      </a>
      <button className="signup-btn">Sign up </button>
      <a href="" className="signup-link">
        <span style={{ color: "black" }}>Already have an account?</span>{" "}
        <span style={{ color: "blueviolet" }}>Login</span>{" "}
      </a>
      <p style={{ textAlign: "center" }}>or</p>
      <button className="google-btn">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
          alt=""
          style={{ width: 15, height: 15 }}
        />
        Sign up with Google
      </button>
    </form>
  </div>
</>


  )
}

export default Signup