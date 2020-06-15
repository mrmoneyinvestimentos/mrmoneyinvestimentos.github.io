import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Button from '../components/Button';
import ParallaxBackground from '../components/ParallaxBackground';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import CardEvent from '../components/CardEvent';
import SectionTitle from '../components/styled/SectionTitle';

import bgParallaxTop from '../assets/img/bgheader.png';
import bgParallaxMiddle from '../assets/img/Office.png';
import Wall from '../assets/img/Wall.png';
import Buillding from '../assets/img/buillding.png';

export default () => {

  const queryEvents =  useStaticQuery(graphql`
  query {
    allContentfulEvento(
      filter: { 
        node_locale: {eq: "en-US"}
      }, 
      sort :{
        fields: date,
        order:DESC
      }) {
      edges {
        node {
          id
          title
          date(formatString: "DD/MM/YYYY - HH:mm")
          where
          link
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`);

  return(
    <Layout>
      <ParallaxBackground height={500} background={bgParallaxTop} />

      <SectionTitle className="container black-bg py-24 text-center">
        <div className="separator orange" />
        <h3 className="section-title text-5xl font-semibold uppercase">
          SEJA UM INVESTIDOR PROFISSIONAL
        </h3>
        <p className="section-subtitle mt-8 text-xl font-light">
          Já pensou a longo prazo em construir seu patrimônio de forma segura, rendendo mais que a
          poupança e obter seus lucros em todo cenário, seja ele em queda ou alta? Se é isso que
          procura, o Mr Money tem a solução perfeita pra você.
        </p>
        <p className="mt-8">{/* <Button size="xl">Get Started Now</Button> */}</p>
      </SectionTitle>

      <ParallaxBackground height={300} background={bgParallaxMiddle} />

      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-16 xl:pr-16">
            <h3 className="text-3xl font-semibold leading-tight text-white">
              QUEM PODE SER UM INVESTIDOR?
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed text-white">
              Ser investidor é a oportunidade para qualquer pessoa que quer mudar de vida, ter sua
              rotina de trabalho, seu negócio e ter a liberdade financeira que todos falam por aí,
              porém, poucos tem. Você poderia ser um desses poucos que existem. E sabe o que é mais
              interessante? Você não precisa ter uma faculdade para isso e não necessita ter muito
              dinheiro . Mas calma, para isso, você tem um caminho até chegar esse momento e aqui,
              irei dar todas dicas e os passos para você chegar lá. O Mr. Money está preparando
              pessoas para trabalhar com investimentos, seja para realizar suas negociações em bolsa
              de valores, mercado de câmbio, ações e fundos imobiliários.
            </p>
          </div>
        }
        secondarySlot={<img src={Wall} alt="" />}
      />

      <SectionTitle className="container black-bg text-center my-20">
        <div className="separator orange" />
        <h3 className="section-title text-5xl font-semibold uppercase mb-20">Próximos Eventos</h3>
        {queryEvents?.allContentfulEvento?.edges?.map(event => {
          return (
            <CardEvent
              key={event.node.id}
              imgEvent={event.node.image.file.url}
              title={event.node.title}
              date={event.node.date}
              description={event.node.where}
              btnLink={event.node.link}
              btnText="RSVP"
            />
          );
        })}
      </SectionTitle>
    </Layout>
  )
};
