import variables from '../../../../../config/variables.js';

module.exports = [
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      { color: variables.$white }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      { color: variables.$white }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels.text',
    stylers: [
      { color: variables.$greenMuted }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { visibility: 'simplified' },
      { color: variables.$greenMuted }
    ]
  },
  {
    featureType: 'poi.government',
    elementType: 'geometry',
    stylers: [
      { color: variables.$white }
    ]
  },
  {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      { color: variables.$white }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      { color : variables.$grayLight },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text',
    stylers: [
      { color : variables.$grayMed },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      { color : variables.$grayLight },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      { color : variables.$grayMed },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      { color : variables.$grayLightest },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { color: variables.$blueMuted }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      { color: variables.$blue }
    ]
  }
];
