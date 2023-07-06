export const fetchData = async () => {
    const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200');
    const data = await response.json();
  
    return data.features.map((item: any) => ({
      place: item.properties.place,
      title: item.properties.title,
      type: item.properties.type,
      time: new Date(item.properties.time).toLocaleString()
    }));
  };