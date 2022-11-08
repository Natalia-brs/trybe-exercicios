const florenceAlbuns = ['Dance Fever', 'How Big, How Blue, How Beautiful', 'Ceremonials', 'Lungs', 'High as Hope'];
const florenceSongs = ['Morning Elvis', 'Dream Girl Evil', 'Choreomania', 'Free', 'Queen of Peace', 'What Kind of Man', 'Pure Feeling', 'Various Storms and Saints',
 'What the Water Gave Me', 'Shake it Out', 'Spectrum', 'Drum Song', 'June', 'The End of Love'];

 const songsAndAlbuns = (Albuns, Songs) => {
    const mix = [...florenceAlbuns, ...florenceSongs];
    return mix;
 };

 console.log(songsAndAlbuns(florenceAlbuns, florenceSongs));