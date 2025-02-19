import { useEffect, useState } from 'react';
import axios from 'axios';
import InitCard from '../ui/InitCard';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function MainPage() {
  const [init, setInit] = useState([]);
  useEffect(() => {
    axios('/api/init')
      .then(({ data }) => setInit(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="row mt-4 m-4">
      {init.map((init) => (
        <div key={init.id} className="col-3">
          <InitCard init={init} />
        </div>
      ))}
    </div>
  );
}
