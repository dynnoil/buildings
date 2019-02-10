import * as React from 'react';

export interface Props {
    mapId?: string;
    center?: number[];
    zoom?: number;
    size?: {
        width?: string;
        height?: string;
    },
    objects?: { name: string, location: number[] }[];
}

interface State {
    isInitialized: boolean;
}

export default class YandexMap extends React.PureComponent<Props, State> {
    static readonly DEFAULT_MAP_ID = `map-${Math.random().toString(36).substr(2, 9)}`;

    static defaultProps = {
        mapId: YandexMap.DEFAULT_MAP_ID,
        center: [55.76, 37.64],
        zoom: 10,
        size: { height: '450px' },
        objects: []
    };

    private map: ymaps.Map = null;

    constructor(props: Props) {
        super(props);
        this.state = { isInitialized: false };
        if (!window['ymaps']) {
            throw new Error('Yandex Maps are not defined');
        }
    }

    componentDidMount() {
        ymaps.ready(() => {
            this.map = new ymaps.Map(this.props.mapId, {
                center: this.props.center,
                zoom: this.props.zoom
            });
            this.props.objects.forEach(object => {
                this.map.geoObjects.add(new ymaps.Placemark(object.location, {
                    iconContent: object.name
                }));
            });
            //this.map.setBounds(this.map.geoObjects.getBounds());
            this.setState({ isInitialized: true });
        });
    }

    componentWillUnmount() {
        this.map.destroy();
    }

    render() {
        return (
            <div className="container-fluid" id={this.props.mapId} style={{ ...this.props.size }}></div>
        );
    }
}