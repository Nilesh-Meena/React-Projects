import React, { useState } from 'react';
// from the ./data we are exporting default
// we can name anything in the import
import data from './data';
import List from './List';
function App() {
  // state value
  // useStae allows to add state to functional components
  const [people, setPeople] = useState(data);

  return <main>
    <section className="container">
      <h3> {people.length} Birthday's Today</h3>
      {/* send props people equal to people state value */}
      <List people={people}/>
      {/* setPeople is arrar, when btn clicked we pass empty array */}
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
  </main>;
}

export default App;
