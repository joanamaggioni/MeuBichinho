import React, { useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import { MapSidebar } from '../../components/MapSidebar';
import { Container } from './styles';

import 'leaflet/dist/leaflet.css';

import { GetNgoData } from '../../hooks/GetNgoData';
import { GetAnimalData } from '../../hooks/GetAnimalsData';

export function MapPage() {
  return (
    <Container>
      <MapSidebar />
      <MapContainer
        center={[-27.1024667, -52.6342728]}
        zoom={12.5}
        style={{ width: '90%', height: '100%', zindex: '-5' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <GetNgoData />
        <GetAnimalData />
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  );
}
