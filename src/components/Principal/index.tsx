import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/euimg.png';

function Principal() {
  return (
    <Container>
      <img src={picture} alt="Foto" />
      <div>
        <TextContainer>
          <h2>Frontend/Mobile Developer</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            {/* \u007B unicode para abrir chaves */}
            <span className="purple">Sobre mim</span> {'\u007B'} 
            <div>
              Nome: <span className="blue">Renata Albuquerque,</span>
            </div>
            <div>
              Idade: <span className="blue">23,</span>
            </div>
            <div>
              Cidade: <span className="blue">João Pessoa - PB</span>
            </div>
            {'\u007D'}
            {/* \u007D unicode para fechar chaves */}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Formação</span> {'\u007B'}
            <div>
              Curso: <span className="blue">Sistemas para Internet,</span>
            </div>
            <div>
              Instituição: <span className="blue">IFPB</span>
            </div>
            {'\u007D'}
          </CodeItem>


        </InfosContainer>

      </div>
    </Container>
  );
};

export default Principal;
