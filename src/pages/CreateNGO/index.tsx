import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { Container, Form, Span, Title } from './styles';
import { LeafletMouseEvent } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import mapIcon from '../../utils/mapIcon';

export function CreateNGO() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  return (
    <Container>
      <Sidebar />
      <Form>
        <Title>Registre sua ONG</Title>
        <Input label="Nome da ONG" type="text" />
        <Input label="Email" type="text" />
        <Input label="Escolha uma senha" type="password" />
        <Input label="Confirme sua senha" type="password" />
        <Input label="Nome do responsável" type="text" />
        <Input label="Telefone" type="text" />
        <TextArea label="Sobre a ONG - máximo de 300 caracteres" />
        <Span>Selecione a localização no mapa:</Span>
        <MapContainer
          center={[-27.1024667, -52.6342728]}
          style={{ width: '100%', height: 280 }}
          zoom={12.5}
          onClick={handleMapClick}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {position.latitude !== 0 && (
            <Marker
              interactive={false}
              icon={mapIcon}
              position={[position.latitude, position.longitude]}
            />
          )}
        </MapContainer>

        <Button text="Registrar" />
      </Form>
    </Container>
  );
}
