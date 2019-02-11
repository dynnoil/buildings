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

    static readonly GEO_OBJECTS = {
        name: "Известные памятники",
        style: "islands#redIcon",
        items: [
            {
                center: [50.426472, 30.563022],
                name: "Монумент &quot;Родина-Мать&quot;"
            },
            {
                center: [50.45351, 30.516489],
                name: "Памятник &quot;Богдану Хмельницкому&quot;"
            },
            {
                center: [50.454433, 30.529874],
                name: "Арка Дружбы народов"
            }
        ]
    };

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
            this.map.controls.remove('searchControl');
            this.map.controls.remove('trafficControl');

            const collection = new ymaps.GeoObjectCollection(null, { preset: YandexMap.GEO_OBJECTS.style });
            YandexMap.GEO_OBJECTS.items.forEach(item => {
                collection.add(
                    new ymaps.Placemark(item.center, { balloonContent: item.name })
                )
            });
            this.map.geoObjects.add(collection);
            this.map.setBounds(this.map.geoObjects.getBounds());
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