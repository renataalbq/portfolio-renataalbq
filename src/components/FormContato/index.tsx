import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            deseja entrar em
            <br />
            contato comigo?
          </>
        }
        description={
          <>preencha o formulário abaixo que irei retornar em breve</>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;
