const getResourse = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

const url = 'https://swapi.dev/api/people/1';

getResourse(url)
  .then((body) => {
    console.log(body);
  })
