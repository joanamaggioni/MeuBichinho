import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import catMapIcon from '../utils/catMapIcon';
import dogMapIcon from '../utils/dogMapIcon';

interface IAnimalProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  specie: string;
}

export function GetAnimalData() {
  const [animals, setAnimals] = useState<IAnimalProps[]>([
    {
      id: 10,
      latitude: -27.1024667,
      longitude: -52.6342728,
      name: 'Doge armadurado',
      specie: 'dog',
    },
    {
      id: 3,
      latitude: -27.1163136,
      longitude: -52.6278108,
      name: 'Gato ninja',
      specie: 'cat',
    },
  ]);

  return (
    <div>
      {animals.map((animals) => {
        return (
          <Marker
            key={animals.id}
            icon={animals.specie === 'dog' ? dogMapIcon : catMapIcon}
            position={[animals.latitude, animals.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {animals.name}
              <Link to={`/orphanages/${animals.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}
