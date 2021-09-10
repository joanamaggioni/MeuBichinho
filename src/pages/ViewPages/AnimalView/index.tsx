import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import Switch from "react-switch";
import {RiWhatsappLine} from 'react-icons/ri';

import { Sidebar } from '../../../components/Sidebar';
import mapIcon from '../../../utils/mapIcon';
import api from '../../../services/api';
import Logo from '../../../assets/logo.svg'

import {
  Button,
  Container,
  Description,
  Details,
  DetailsContent,
  Footer,
  Images,
  Main,
  MapContainerDiv,
  PhoneButton,
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

  function handleAnimal() {
    
  }

  // useEffect(() => {
  //   api.get(`orphanages/${params.id}`).then((response) => {
  //     setNgo(response.data);
  //   });
  // }, [params.id]); //array de dependencias, todos as variaveis que usamos dentro do useEffect, colocamos nesse array de dependencias também, porque queremos que ela execute de novo

  // if (!ngo) {
  //   return <p>Carregando...</p>;
  // }

  return (
    <Container>
      <Sidebar />

      <Main>
        <Details>
          <img src={Logo} alt="Teste" />
          {/* <img src={ngo.images[activeImageIndex].url} alt={ngo.name} /> */}

          <Images>
                {/* <Button
                  // key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                > */}
                  <img src={Logo} alt="Teste" />
                {/* </Button> */}
            {/* {ngo.images.map((image, index) => {
              return (
              );
            })} */}
          </Images>

          <DetailsContent>
            {/* <h1>{ngo.name}</h1>
            <p>{ngo.about}</p> */}
            <h1>Doge armadurado</h1>
            <p>Cachorro altamente periculoso. Treinado no estilo de vida samurai. “I do not wish to be horny anymore, I just want to be happy.</p>

            <MapContainerDiv>
              <MapContainer
                center={[-27.1024667, -52.6342728]}
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
                  position={[-27.1024667, -52.6342728]}
                />
              </MapContainer>

              <Footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${-27.1024667},${-52.6342728}`}
                >
                  Ver rotas no Google Maps
                </a>
              </Footer>
            </MapContainerDiv>
            <p>Possui alguma necessidade especial?</p>
            <Description>
              <label>Sim</label>
              <label>Não</label>
            </Description>
           <Switch
            disabled
            onChange={handleAnimal}
            checked={false}
            checkedIcon={false}
            uncheckedIcon={false}
            width={540}
            height={24}
            onColor="#fe6363"
            offColor="#07d174"
          />
        <PhoneButton> <RiWhatsappLine size={30}/>Entrar em contato</PhoneButton>
          </DetailsContent>
        </Details>
      </Main>
    </Container>
  );
}
