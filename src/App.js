import React from 'react';
import FormModal from './components/modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';

import './App.css';

class App extends React.Component {
  state = {
    email: '',
    phone: '',
    name: '',
    isOpen: false,
    isOpenThanks: false
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  modalChange = () =>
    this.setState({
      isOpen: !this.state.isOpen,
      email: '',
      name: '',
      phone: ''
    });

  render() {
    return (
      <div className='App'>
        <ToastContainer />
        <nav class='navbar'>
          <div class='container'>
            <ul class='nav'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>Acerca de nosotros</a>
              </li>
            </ul>
          </div>
        </nav>
        <section class='section-a'>
          <div class='container'>
            <div>
              <h1>Cursos online de programación</h1>
              <p class='paragraph'>
                Conviertete en el siguiente creador de la aplicación que
                revolucionara el mercado aprendiendo acerca de las nuevas
                tecnologías web desde un simple layout de HTML y CSS hasta crear
                una aplicación fullstack usando un framework UI y creando una
                REST API que la interfaz consuma.
              </p>
              <Button color='primary' onClick={this.modalChange}>
                Suscribirme
              </Button>
            </div>

            <FormModal
              {...this.state}
              toggle={this.modalChange}
              handleChange={this.handleChange}
              modalThanksChange={this.modalThanksChange}
            ></FormModal>
          </div>
        </section>

        <section id='about' class='section-b'>
          <div class='overlay'>
            <div class='section-b-inner py-5'>
              <h3 class='text-2'>Aprende de los mejores</h3>
              <p class='text-5 mt-1'>
                Somos un equipo de programadores con el proposito de transmitir
                todo nuestro conocimiento
              </p>
              <p class='text-5 mt-1'>
                Sumate a esta oportunidad de entrar a un mundo
                extraordinariamente interesante y lleno de muchos retos
              </p>
            </div>
          </div>
        </section>

        <footer class='section-footer py-4 bg-primary'>
          <div class='container'>
            <div>
              <h2 class='text-2 mb-1'>Todos los derechos reservados</h2>
            </div>
            <div>
              <h3>Información adicional</h3>
              <ul>
                <li>
                  <a href='#'>Politicas de Privacidad</a>
                </li>
                <li>
                  <a href='#'>Terminos y Servicios</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
