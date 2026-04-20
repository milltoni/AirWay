export const getYaml = () => {
  const link =
    "https://raw.githubusercontent.com/milltoni/Programming-Languages-Yaml/refs/heads/main/languages.yml";
  let request = new XMLHttpRequest();
  request.open("GET", link, false); // `false` makes the request synchronous
  request.setRequestHeader("accept", "application/vnd.github.VERSION.raw");
  request.send(null);
  if (request.status === 200) {
    return request.responseText;
  }

  return "";
};