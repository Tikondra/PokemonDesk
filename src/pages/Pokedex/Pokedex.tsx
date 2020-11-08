import React from 'react';
import Heading, {HeaderType} from "../../components/Heading/Heading";
import s from "../Home/Home.module.scss";
import Header from "../../components/header";
import Layout from "../../components/Layout";
import Footer from "../../components/footer/Footer";

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <Heading type={HeaderType.h1} >
          Pokedex
        </Heading>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;