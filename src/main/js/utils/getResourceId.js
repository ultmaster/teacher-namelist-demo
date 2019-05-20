export default function getResourceId(resourceUrl) {
  const idx = resourceUrl.lastIndexOf("/");
  console.log(resourceUrl);
  console.log(idx);
  return parseInt(resourceUrl.slice(idx + 1));
}