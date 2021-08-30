import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import { Sidebar } from '../../../components/Sidebar';
import mapIcon from '../../../utils/mapIcon';
import api from '../../../services/api';
import {
  Button,
  Container,
  Details,
  DetailsContent,
  Footer,
  Images,
  Main,
  MapContainerDiv,
} from '../style/styles';

interface INgoProps {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface INgoParams {
  id: string;
}

export function Bichinho() {
  const params = useParams<INgoParams>();
  const [ngo, setNgo] = useState<INgoProps>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setNgo(response.data);
    });
  }, [params.id]); //array de dependencias, todos as variaveis que usamos dentro do useEffect, colocamos nesse array de dependencias também, porque queremos que ela execute de novo

  if (!ngo) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <Details>
          <img src={ngo.images[activeImageIndex].url} alt={ngo.name} />

          <Images>
            {ngo.images.map((image, index) => {
              return (
                <Button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={ngo.name} />
                </Button>
              );
            })}
          </Images>

          <DetailsContent>
            <h1>{ngo.name}</h1>
            <p>{ngo.about}</p>

            <MapContainerDiv>
              <MapContainer
                center={[ngo.latitude, ngo.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[ngo.latitude, ngo.longitude]}
                />
              </MapContainer>

              <Footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${ngo.latitude},${ngo.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </Footer>
            </MapContainerDiv>
          </DetailsContent>
        </Details>
      </Main>
    </Container>
  );
}
