export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('response');
    }, 1000);
  });
  return promise;
}
