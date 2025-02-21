import { useEffect, useState } from 'react';
import axios from 'axios';
import InitCard from '../ui/InitCard';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MainPage() {
  const [init, setInit] = useState([]);
  const [tema, setTema] = useState('');

  useEffect(() => {
    axios('/api/init')
      .then(({ data }) => setInit(data))
      .catch((error) => console.log(error));
  }, []);

  const handleFilterSelect = (value) => setTema(value);

  const filteredInit = init.filter((initItem) => {
    const isTemaMatch = tema ? initItem.tema === tema : true;
    return isTemaMatch;
  });

  return (
    <div>
      <div className="row mt-4 m-4">
        {filteredInit.length > 0 ? (
          filteredInit.map((initItem) => (
            <div key={initItem.id} className="col-3">
              <InitCard init={initItem} />
            </div>
          ))
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>
      </div>
    
  );
}
