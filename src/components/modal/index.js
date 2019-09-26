import React from 'react';
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

import { toast } from 'react-toastify';
import { firestore } from '../../firebase/utils';

class FormModal extends React.Component {
  state = {
    isOpenAlert: false,
    email: '',
    phone: '',
    name: ''
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = async e => {
    e.preventDefault();

    const status = await firestore.collection('users').add({
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    });

    // if (!status) {
    //   toast.error('Error 500');
    //   return;
    // }
  };

  onClickSuscribe = e => {
    const { email, phone, name } = this.state;
    const { toggle } = this.props;
    if (email.length <= 0 || phone.length <= 0 || name.length <= 0) {
      toast.error('Asegurate que todos los campos esten rellenos');
    } else {
      this.handleSubmit(e);
      toast.success('Felicidades, te has suscrito');
      toggle();
    }
  };

  render() {
    const { isOpen, toggle } = this.props;
    const { email, name, phone } = this.state;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {' '}
            Coloca tu información en el siguiente formulario{' '}
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='name'>Nombre Completo</Label>
                <Input
                  name='name'
                  id='name'
                  required
                  value={name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  required
                  id='email'
                  onChange={this.handleChange}
                  value={email}
                />
              </FormGroup>

              <FormGroup>
                <Label for='phone'>Numero telefonico</Label>
                <Input
                  name='phone'
                  id='phone'
                  value={phone}
                  required
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.onClickSuscribe}>
              Suscribirme
            </Button>{' '}
            <Button color='secondary' onClick={toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
