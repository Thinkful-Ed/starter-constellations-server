axios
  .get(constellationsUrl)
  .then(({ data }) => {
    const exists = data.find(({ name }) => name === leo.name);
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(constellationsUrl, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log);