import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { ClientContext } from "../context/ClientContext";

const Retroware = () => {
  const { client } = useContext(ClientContext);
  const [retroware, setRetroware] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "retroware" })
      .then((entries) => setRetroware(entries.items));
  }, [client]);

  return (
    <div className="columns is-multiline">
      {retroware.map((item) => (
        <div
          key={item.sys.id}
          className="column is-one-third"
        >
          <Card {...item.fields} />
        </div>
      ))}
    </div>
  );
};

export default Retroware;
