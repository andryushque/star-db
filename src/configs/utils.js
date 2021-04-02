module.exports = {
  getResourse: async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    const body = await res.json();
    return body;
  },
};
