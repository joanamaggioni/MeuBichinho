import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import mapIcon from '../utils/mapIcon';

interface INgoProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export function GetNgoData() {
  const [ngos] = useState<INgoProps[]>([
    {
      id: 19,
      latitude: -27.0954643,
      longitude: -52.6146158,
      name: 'ONG de Konoha',
    },
  ]);

  return (
    <div>
      {ngos.map((ngo) => {
        return (
          <Marker
            key={ngo.id}
            icon={mapIcon}
            position={[ngo.latitude, ngo.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {ngo.name}
              <Link to={`/ong/${ngo.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}
