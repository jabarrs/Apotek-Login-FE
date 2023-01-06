import gambar from './../asset/img/apotek.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      history('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div class="navbar-brand">
          <img src={gambar} alt="logo" width="112" height="28" />

          <a href="/" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="/" class="navbar-item">
              Home
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button onClick={Logout} class="button is-light">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
