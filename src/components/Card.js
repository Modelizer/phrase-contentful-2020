const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          imageUrl={props.image.fields.file.url}
          altText={props.model}
        />
      </div>

      <div
        className="card-content"
        style={{ backgroundColor: "#F5FFFE" }}
      >
        <div className="content">
          <Header text={props.model} />

          <Subheader text={props.manufacturer} />

          <Description text={props.description} />

          <div className="columns">
            <div className="column">
              <Price price={props.priceInCents} />
            </div>

            <div className="column has-text-right">
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Image = ({ imageUrl, altText }) => (
  <figure
    className="image has-text-centered"
    style={{ height: "200px", overflow: "hidden" }}
  >
    <img
      src={imageUrl}
      alt={altText}
      style={{ margin: "0 auto" }}
    />
  </figure>
);

const Header = ({ text }) => (
  <h3 className="title" style={{ margin: "0 0 0.5rem 0" }}>
    {text}
  </h3>
);

const Subheader = ({ text }) => (
  <p
    className="is-size-6"
    style={{ marginBottom: "0.5rem" }}
  >
    {text}
  </p>
);

const Description = ({ text }) => (
  <p
    className="is-size-7"
    style={{ minHeight: "2.5rem", marginBottom: "0.25rem" }}
  >
    {text}
  </p>
);

const Price = ({ price }) => {
  const formattedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  }).format(price / 100);

  return (
    <p
      style={{
        marginBottom: "0",
        marginTop: "0.5em",
      }}
    >
      {formattedPrice}
    </p>
  );
};

const CallToAction = () => (
  <button className="button is-primary">Buy</button>
);

export default Card;
