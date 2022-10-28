const pilotsAlbuns = ['Vessel', 'Blurryface', 'Trench', 'Scaled and Icy'];
const pilotSongs = ['Car Radio', 'Choker', 'Leave the City', 'Heathens', 'Migraine', 'Guns for Hands', 'The Run and Go', 'Jumpsuit', 'Lane Boy']
const museAlbuns = ['Showbiz', 'Absolution', ' The 2nd Law', 'Origin of Symmetry', 'Drones', 'The resistance', 'Will of the People']
const targDragons = ['Vhagar', 'Balerion', 'Meraxes', 'Vermithor', 'Caraxes', 'Syrax', 'Seasmoke', 'Meleys', 'Arrax', 'Vermax', 'Dreamfyre', 'Sunfyre']

const various = (...args) => {
    return 'meus args:', args
}

console.log((various(pilotSongs, pilotsAlbuns, museAlbuns, targDragons)));