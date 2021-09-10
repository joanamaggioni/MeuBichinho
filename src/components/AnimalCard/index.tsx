import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';

import { Card, Img, Name } from './styles'

interface IAnimalCardProps {
    id: number;
    name: string;
    image: string;
}

export function AnimalCard({name, image, id}: IAnimalCardProps){ 
    return (
        <Card href={`/manager/animal?${id}`}>
            <Img src={image} alt={name}/>
            <Name>{name}</Name>
            {/* <Button> */}
                <BiArrowToRight size={30} color='#4D6F80'/>
            {/* </Button> */}
        </Card>
    )
}