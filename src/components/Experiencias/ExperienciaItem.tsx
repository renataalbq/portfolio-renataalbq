import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  company,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <span>{company}</span>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
