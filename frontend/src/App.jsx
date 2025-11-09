import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [personId, setPersonId] = useState(null);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (!personId) {
      setPerson(null);
      return;
    }

    fetch(`/api/people/${personId}`)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, [personId]);

  return (
    <>
      <div>
        <button onClick={() => setPersonId(1)}>Person 1</button>
        <button onClick={() => setPersonId(2)}>Person 2</button>
        <button onClick={() => setPersonId(null)}>Clear</button>
      </div>
      <div>
        <h1>
          {person?.firstName} {person?.lastName}
        </h1>
        {person && (
          <>
            <p>{person?.age}</p>
            <p>{person?.city}</p>
            <p>{person?.country}</p>
            <p>{person?.email}</p>
            <p>{person?.phone}</p>
            <p>{person?.website}</p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
