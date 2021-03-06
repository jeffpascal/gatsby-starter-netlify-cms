import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | AxACont România">
          <title>Blog despre antreprenoriat - articole, sfaturi, noutăți</title>
          <meta
            name="description"
            content="Vrei să citești articole despre antreprenoriat, să primești sfaturi și ghiduri pentru a realiza ceea ce îți dorești în afaceri? Blogul nostru e locul perfect pentru asta."
          />
        </Helmet>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/coperta.png')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #1b9ce3, -0.5rem 0 0 #1b9ce3",
              backgroundColor: "#1b9ce3",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
