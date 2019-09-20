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

class FormModal extends React.Component {
  state = {
    isOpenAlert: false
  };

  onClickSuscribe = () => {
    const { email, phone, name, toggle } = this.props;
    if (email.length <= 0 || phone.length <= 0 || name.length <= 0) {
      toast.error('Asegurate que todos los campos esten rellenos');
    } else {
      toast.success('Felicidades, te has suscrito');
      toggle();
    }
  };

  render() {
    const { email, name, phone, isOpen, toggle, handleChange } = this.props;
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
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  required
                  id='email'
                  onChange={handleChange}
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
                  onChange={handleChange}
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
