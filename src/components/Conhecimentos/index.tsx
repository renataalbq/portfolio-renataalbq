import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { IoLogoAngular, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { DiPostgresql, DiJava, DiPython } from 'react-icons/di';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="tecnologias" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<IoLogoCss3 />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Angular" icon={<IoLogoAngular />} />
        <ConhecimentoItem title="Java" icon={<DiJava />} />
        <ConhecimentoItem title="Python" icon={<DiPython />} />
        <ConhecimentoItem title="PostgreSQL" icon={<DiPostgresql />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
