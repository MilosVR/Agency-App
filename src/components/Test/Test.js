import React, {useEffect, useState} from "react";
import testData from './testData.json'


function Test() {

  const [teams, setTeams] = useState(testData);
  const [search, setSearch] = useState("");

  const sortAccsending = e => {
    let mapData = [...teams].sort((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
       setTeams(mapData)
  }
  const sortDescending = e => {
    let mapData = [...teams].reverse((a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
       setTeams(mapData)
  }

  return (
    <div className="container">
      <input
        onChange={e => {
          const filteredTeams = testData.filter(team => {
            return team.name.toLowerCase().includes(e.target.value.toLowerCase());
          });

          setTeams(filteredTeams);
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
      />
      <button onClick={sortAccsending}>Sort accsending</button>
      <button onClick={sortDescending}>Sort By Descending</button>
      {teams.map(team => (
        <p key={team.id}>{team.name}</p>
      ))}
    </div>
  );
}

export default Test
