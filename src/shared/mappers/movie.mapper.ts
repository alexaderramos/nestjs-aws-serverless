const dictionary: { [key: string]: string } = {
  episode_id: 'id_episodio',
  title: 'titulo',
  director: 'director',
  producer: 'productor',
  opening_crawl: 'texto_apertura',
  release_date: 'fecha_lanzamiento',
  characters: 'personajes',
  planets: 'planetas',
  starships: 'naves_espaciales',
  vehicles: 'vehiculos',
  species: 'especies',
  created: 'creado',
  edited: 'editado',
  url: 'url',
};

function mapObject(object: any): any {
  const objectTranslate: any = {};
  for (const [key, value] of Object.entries(object)) {
    const keyTranslate = dictionary[key] || key;
    objectTranslate[keyTranslate] = value;
  }
  return objectTranslate;
}

export { mapObject };
