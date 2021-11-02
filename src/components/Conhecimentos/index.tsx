import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoPython} from 'react-icons/io5';
import { BsBootstrapFill } from 'react-icons/bs';
import {GrMysql} from 'react-icons/gr'
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="tecnologias" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Bootstrap" icon={<BsBootstrapFill />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Mysql" icon={<GrMysql />} />
        <ConhecimentoItem title="Python" icon={<IoLogoPython />} />

      </section>
    </Container>
  );
}

export default Conhecimentos;