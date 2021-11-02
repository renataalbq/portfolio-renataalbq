import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() => handleRedirect('https://instagram.com/renata.albqrq')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/renataalbq')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com/in/renataalb')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;