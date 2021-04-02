import { baseUrl } from "./configs/config";
import { getResourse } from "./configs/utils";

// test
const url = `${baseUrl}api/people/1`;

getResourse(url).then((body) => {
  console.log("test", body);
});
