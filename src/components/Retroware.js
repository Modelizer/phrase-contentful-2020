import { useState, useEffect } from "react";
import Card from "./Card";
const contentful = require("contentful");

const Retroware = () => {
  const [retroware, setRetroware] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken:
        process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: "retroware" })
      .then(({ items }) => setRetroware(items));
  }, []);

  return (
    <div className="columns is-multiline">
      {retroware.map((r) => (
        <div key={r.sys.id} className="column is-one-third">
          <Card {...r.fields} />
        </div>
      ))}
    </div>
  );
};

export default Retroware;
