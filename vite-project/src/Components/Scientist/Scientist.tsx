import React, { useState } from "react";

interface Scientist {
  name: string;
  birth: number;
  death: number;
  img: string;
}

const initialScientists: Scientist[] = [
  { name: "Albert Einstein", birth: 1879, death: 1955, img: "#" },
  { name: "Isaac Newton", birth: 1643, death: 1727, img: "#" },
  { name: "Galileo Galilei", birth: 1564, death: 1642, img: "#" },
  { name: "Marie Curie", birth: 1867, death: 1934, img: "#" },
  { name: "Johannes Kepler", birth: 1571, death: 1630, img: "#" },
  { name: "Nicolaus Copernicus", birth: 1473, death: 1543, img: "#" },
  { name: "Max Planck", birth: 1858, death: 1947, img: "#" },
  { name: "Katherine Blodgett", birth: 1898, death: 1979, img: "#" },
  { name: "Ada Lovelace", birth: 1815, death: 1852, img: "#" },
  { name: "Sarah E. Goode", birth: 1855, death: 1905, img: "#" },
  { name: "Lise Meitner", birth: 1878, death: 1968, img: "#" },
  { name: "Hanna Hammarström", birth: 1829, death: 1909, img: "#" },
];

export function Scientist() {
  const [list, setList] = useState<Scientist[]>(initialScientists);

  const sortByLivedYears = () => {
    const sorted = [...list].sort(
      (a, b) => b.death - b.birth - (a.death - a.birth),
    );
    setList(sorted);
  };

  const findLatestBorn = () => {
    const latest = Math.max(...initialScientists.map((s) => s.birth));
    setList(initialScientists.filter((s) => s.birth === latest));
  };

  const filterSameInitials = () => {
    const filtered = initialScientists.filter((s) => {
      const [first, last] = s.name.split(" ");
      return first?.[0] === last?.[0];
    });
    setList(filtered);
  };

  const findEinstein = () => {
    const einstein = initialScientists.find((s) => s.name.includes("Einstein"));
    setList(einstein ? [einstein] : []);
  };

  const filterLastNameNotC = () => {
    const filtered = initialScientists.filter((s) => {
      const last = s.name.split(" ").slice(-1)[0];
      return !last.startsWith("C");
    });
    setList(filtered);
  };

  const removeNameStartsWithA = () => {
    const filtered = initialScientists.filter((s) => !s.name.startsWith("A"));
    setList(filtered);
  };

  const findShortestLived = () => {
    const minLived = Math.min(
      ...initialScientists.map((s) => s.death - s.birth),
    );
    setList(initialScientists.filter((s) => s.death - s.birth === minLived));
  };

  const filter19thCentury = () => {
    const filtered = initialScientists.filter(
      (s) => s.birth >= 1801 && s.birth <= 1900,
    );
    setList(filtered);
  };

  const resetList = () => {
    setList(initialScientists);
  };

  return (
    <div>
      <h2>Вчений</h2>

      <div>
        <button onClick={sortByLivedYears}>
          Відсортувати за кількістю прожитих років
        </button>
        <button onClick={findLatestBorn}>
          Знайти вченого, який народився найпізніше
        </button>
        <button onClick={filterSameInitials}>
          Перші літери імені = прізвищу
        </button>
        <button onClick={findEinstein}>Знайти рік народження Ейнштейна</button>
        <button onClick={filterLastNameNotC}>Прізвища не на "C"</button>
        <button onClick={removeNameStartsWithA}>
          Видалити вчених з іменем на "A"
        </button>
        <button onClick={findShortestLived}>Прожив найменше</button>
        <button onClick={filter19thCentury}>Народились у 19 ст.</button>
        <button onClick={resetList}>Скинути</button>
      </div>

      <hr />

      <div>
        {list.map((sci, idx) => (
          <div key={idx}>
            <div>
              <strong>{sci.name}</strong>
              <br />
              {sci.birth} – {sci.death}
            </div>
            <img src={sci.img} alt={sci.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
