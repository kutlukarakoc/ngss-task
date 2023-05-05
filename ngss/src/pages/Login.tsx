/* COMPONENTS */
import Button from "../components/ui/Button"
/* STYLE */
import "../styles/login.css"

const Login: React.FC = () => {
   return (
      <section className="login flex-center">
         <div className="login-form-wrapper flex-center">
            <figure className="ngss-logo">
               <img src="https://h8cc60.n3cdn1.secureserver.net/wp-content/uploads/2020/09/ngss-logo.png" alt="ngss" />
            </figure>
            <form action="" className="login-form flex-center">
               <div className="login-inputs flex-center">
                  <div className="form-input-wrapper">
                     <label htmlFor="username">Enter your username</label>
                     <input type="text" id="username" name="username" />
                  </div>
                  <div className="form-input-wrapper">
                     <label htmlFor="password">Enter your password</label>
                     <input type="password" id="password" name="password" />
                  </div>
               </div>
               {/* <button type="submit" className="login-submit">Login</button> */}
               <Button type="submit" classname="login-submit" children="Login" />
            </form>
         </div>
         <div>
         </div>
      </section>
   )
}

export default Login