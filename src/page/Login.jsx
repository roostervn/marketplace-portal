import Nav from "../component/nav";
import Footer from "../component/footer";

export default function Login() {
  return (
    <div>
      <div id="wrapper">
        <div id="page" className="clearfix">
          <Nav />
          {/* title page */}
          <section className="flat-title-page inner">
            <div className="overlay" />
            <div className="themesflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading mg-bt-12">
                    <h1 className="heading text-center">Login</h1>
                  </div>
                  <div className="breadcrumbs style2">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                      </li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tf-login tf-section">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12">
                  <h2 className="tf-title-heading ct style-1">Login To NFTs</h2>
                  <div className="flat-form box-login-social">
                    <div className="box-title-login">
                      <h5>Login with social</h5>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="sc-button style-2 fl-button pri-3"
                        >
                          <i className="icon-fl-google-2" />
                          <span>Google</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="sc-button style-2 fl-button pri-3"
                        >
                          <i className="icon-fl-facebook" />
                          <span>Facebook</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flat-form box-login-email">
                    <div className="box-title-login">
                      <h5>Or login with email</h5>
                    </div>
                    <div className="form-inner">
                      <form action="#" id="contactform">
                        <input
                          id="name"
                          name="name"
                          tabIndex={1}
                          defaultValue
                          aria-required="true"
                          required
                          type="text"
                          placeholder="Your Full Name"
                        />
                        <input
                          id="email"
                          name="email"
                          tabIndex={2}
                          defaultValue
                          aria-required="true"
                          type="email"
                          placeholder="Your Email Address"
                          required
                        />
                        <div className="row-form style-1">
                          <label>
                            Remember me
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </label>
                          <a href="#" className="forgot-pass">
                            Forgot Password ?
                          </a>
                        </div>
                        <button className="submit">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          {/* Bottom */}
        </div>
        {/* /#page */}
      </div>
      {/* /#wrapper */}
    </div>
  );
}
