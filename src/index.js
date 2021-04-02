import { baseUrl } from "./configs/config";
import { getResourse } from "./configs/utils";

// test
const url = `${baseUrl}api/people/155555`;

getResourse(url)
  .then((body) => {
    console.log("test", body);
  })
  .catch((err) => {
    console.error('Could not fetch!', err);
  });
