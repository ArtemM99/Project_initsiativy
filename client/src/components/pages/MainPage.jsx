import { useEffect, useState } from 'react';

import InitCard from '../ui/InitCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function MainPage() {
  const [init, setInit] = useState([]);
  const [tema, setTema] = useState('');

  useEffect(() => {
    axios.get('/api/init')
      .then(({ data }) => setInit(data))
      .catch((error) => console.log('Ошибка загрузки:', error));
  }, []);

  const handleFilterSelect = (value) => setTema(value);

  const filteredInit = init.filter((initItem) => {
    const isTemaMatch = tema ? initItem.tema === tema : true;
    return isTemaMatch;
  });

  return (
    <div>
      <h2 className="text-center mt-4">Список инициатив</h2>
      <div className="row mt-4 m-4">
        {filteredInit.length > 0 ? (
          filteredInit.map((initItem) => (
            <div key={initItem.id} className="col-3">
              <InitCard init={initItem} />
            </div>
          ))
        ) : (
          <p className="text-center">Нет данных для отображения</p>
        )}
      </div>
    </div>
  );
}