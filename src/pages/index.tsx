import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Principal from '../components/Principal';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';

import { HomeContainer } from '../styles/HomeStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
    <Head>
      <title>Home | Meu portfólio</title>
      <meta
        name="description"
        content="Meu portfólio"
      />
      <meta property="og:image" content="/ogimage.png" />
      <meta property="og:image:secure_url" content="/ogimage.png" />
      <meta name="twitter:image" content="/ogimage.png" />
      <meta name="twitter:image:src" content="/ogimage.png" />
      <meta
        property="og:description"
        content="Meu portfólio"
      />
    </Head>

    <Header />

    <main className="container">
      <Principal />
      <Projetos projetos={projetos} />
      <Conhecimentos/>
      <FormContato />
    </main>
    
    <Footer />

  </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};