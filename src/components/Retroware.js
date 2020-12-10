import { useState, useEffect } from "react";
import Card from "./Card";

const Retroware = () => {
  const [retroware, setRetroware] = useState([]);

  useEffect(() => {
    setRetroware([
      {
        id: 1,
        model: "ZX Spectrum",
        manufacturer: "Sinclair Research",
        description:
          "Excellent condition. New power supply. Original parts otherwise.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/ZXSpectrum48k.jpg",
        priceInCents: 13999,
      },
      {
        id: 2,
        model: "Commodore 64",
        manufacturer: "Commodore International",
        description:
          "Very good condition. All original parts.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/e9/Commodore-64-Computer-FL.jpg",
        priceInCents: 14499,
      },
    ]);
  }, []);

  return (
    <div className="columns is-multiline">
      {retroware.map((item) => (
        <div key={item.id} className="column is-one-third">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default Retroware;
