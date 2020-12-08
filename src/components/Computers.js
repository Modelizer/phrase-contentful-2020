import { useState, useEffect } from "react";
import ComputerCard from "./ComputerCard";

const Computers = () => {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    setComputers([
      {
        id: 1,
        model: "ZX Spectrum",
        manufacturer: "Sinclair Research",
        description:
          "Excellent condition. New power supply. Original parts otherwise.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/ZXSpectrum48k.jpg",
        price: 13999,
      },
      {
        id: 2,
        model: "Commodore 64",
        manufacturer: "Commodore International",
        description:
          "Very good condition. All original parts.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/e9/Commodore-64-Computer-FL.jpg",
        price: 14499,
      },
    ]);
  }, []);

  return (
    <div className="columns is-multiline">
      {computers.map((computer) => (
        <div
          key={computer.id}
          className="column is-one-third"
        >
          <ComputerCard {...computer} />
        </div>
      ))}
    </div>
  );
};

export default Computers;
