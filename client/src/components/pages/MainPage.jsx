import { useEffect, useState } from 'react';
import axios from 'axios';
import InitCard from '../ui/InitCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';


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
    <>
    <NavDropdown style={{ display:'flex', justifyContent: 'center'}} id="nav-dropdown-dark-example" title="Фильтр" menuVariant="dark">
              <NavDropdown.Item key="all" onClick={() => handleFilterSelect('')}>
                Все тематики
              </NavDropdown.Item>
              <NavDropdown.Item
                key="ecology"
                onClick={() => handleFilterSelect('Экология')}
              >
                Экология
              </NavDropdown.Item>
              <NavDropdown.Item
                key="healthcare"
                onClick={() => handleFilterSelect('Здравоохранение')}
              >
                Здравоохранение
              </NavDropdown.Item>
              <NavDropdown.Item
                key="transport"
                onClick={() => handleFilterSelect('Транспорт')}
              >
                Транспорт
              </NavDropdown.Item>
              <NavDropdown.Item
                key="education"
                onClick={() => handleFilterSelect('Образование')}
              >
                Образование
              </NavDropdown.Item>
              <NavDropdown.Item
                key="social"
                onClick={() => handleFilterSelect('Социальная защита')}
              >
                Социальная защита
              </NavDropdown.Item>
            </NavDropdown>
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
      </>
    
  );
}
