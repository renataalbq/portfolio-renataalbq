import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="experiência" />

      <section>
        <ExperienciaItem
          year="2021"
          title="Estagiária de desenvolvimento"
          company="CAGEPA - Cia de Água e Esgotos da Paraíba"
          description="Melhoria no front-end das aplicações, utilizando a biblioteca de mapeamento Leaflet. Além de adicionar novas funcionalidades às aplicações."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
