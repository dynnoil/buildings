import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.scss';
import { Building } from '../types/Building';
import Card from '../components/Card';

const BUILDINGS: Building[] = [
    { name: 'Quia', description: 'Est aut libero ad consequatur quia accusamus harum enim et.', image: 'http://lorempixel.com/640/480' },
    { name: 'Velit', description: 'Voluptate non quo.', image: 'http://lorempixel.com/640/480' },
    { name: 'Sed', description: 'Voluptas quo accusamus aut ut qui itaque.', image: 'http://lorempixel.com/640/480' },
    { name: 'Optio', description: 'Minima impedit pariatur exercitationem autem quia voluptatibus dolores molestiae beatae.', image: 'http://lorempixel.com/640/480' },
    { name: 'Consequatur', description: 'Reiciendis voluptas rerum sed nemo.', image: 'http://lorempixel.com/640/480' },
    { name: 'Nemo', description: 'Voluptatibus et ut neque.', image: 'http://lorempixel.com/640/480' }
];

export default class Home extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <div className="container">
                <div className="card-columns">
                    {BUILDINGS.map((building, index) => (
                        <Card key={index} title={building.name}
                            text={building.description} imageUrl={building.image} />
                    ))}
                </div>
            </div>
        );
    }
}