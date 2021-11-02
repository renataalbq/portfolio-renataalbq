import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/eunobg2.png';

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
            <span className="purple">Infos</span> {'\u007B'} 
            <div>
              Nome: <span className="blue">Renata,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Albuquerque</span>
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
              Faculdade: <span className="blue">IFPB</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>

      </div>
    </Container>
  );
};

export default Principal;
