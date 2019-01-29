import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import './Home.scss';
import { Building } from '../types/Building';
import Card from '../components/Card';
import Page from '../components/Page';

const BUILDINGS: Building[] = [
    { id: '71e15471-c9d8-48f5-ba5b-bc93da7bbbe9', name: 'Quia', description: 'Est aut libero ad consequatur quia accusamus harum enim et.', image: 'http://lorempixel.com/640/480' },
    { id: '43d71f50-eb47-45a9-8513-99d542b378b1', name: 'Velit', description: 'Voluptate non quo.', image: 'http://lorempixel.com/640/480' },
    { id: '5e0f956b-ea60-4b54-817e-5bc04c84ee50', name: 'Sed', description: 'Voluptas quo accusamus aut ut qui itaque.', image: 'http://lorempixel.com/640/480' },
    { id: '45e737f0-cfb2-4132-a780-b146cecc20a5', name: 'Optio', description: 'Minima impedit pariatur exercitationem autem quia voluptatibus dolores molestiae beatae.', image: 'http://lorempixel.com/640/480' },
    { id: '090b5ff9-6588-4f03-8a60-331aa9b78415', name: 'Consequatur', description: 'Reiciendis voluptas rerum sed nemo.', image: 'http://lorempixel.com/640/480' },
    { id: 'dd4cc339-ea04-40ed-8623-2969fdaba685', name: 'Nemo', description: 'Voluptatibus et ut neque.', image: 'http://lorempixel.com/640/480' }
];

export default class Home extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <Page header="Home">
                <div className="card-columns">
                    {BUILDINGS.map(building => (
                        <Card key={building.id} title={building.name}
                            text={building.description} imageUrl={building.image}>
                            <Link className="btn btn-primary" to={`/buildings/${building.id}`} >Go somewhere</Link>
                        </Card> 
                    ))}
                </div>
            </Page>
        );
    }
}