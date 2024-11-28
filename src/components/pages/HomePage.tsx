import React from "react";
import Layout from "../Layout/Layout";
import Hero from "./Hero";
import Programs from "./Programs";
import Faculty from "./Faculty";
import Admissions from "./Admissions";
import Research from "./Research";
import NewsEvents from "./NewsEvents";
import CampusLife from "./CampusLife";
import Testimonials from "./Testomonials";
import Contact from "./Contact";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Programs />
      <Faculty />
      <Admissions />
      <Research />
      <NewsEvents />
      <CampusLife />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default HomePage;
