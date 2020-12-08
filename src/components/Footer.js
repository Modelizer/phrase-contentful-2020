const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#F5FFFE" }}
    >
      <div className="content has-text-centered">
        <p
          style={{
            borderBottom: "1px solid #adf4ea",
            width: "66.7%",
            margin: "0 auto",
            paddingBottom: "2rem",
          }}
        >
          <strong>RBrite</strong> by{" "}
          <a href="https://phrase.com/blog">
            The Phrase Blog
          </a>
          . Made with{" "}
          <a href="https://www.contentful.com/">
            Contentful
          </a>
          , <a href="https://www.phrase.com">Phrase</a>,{" "}
          <a href="https://reactjs.org">React</a>, &amp;{" "}
          <a href="https://bulma.io/">Bulma</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
