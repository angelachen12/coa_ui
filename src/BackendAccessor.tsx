export function getData<T>(endpoint: string): Promise<T> {
  const DEV_BASE = "http://localhost:5000";
  const PROD_BASE = "http://coa-flask-app-prod.us-east-1.elasticbeanstalk.com";
  const url = process.env.NODE_ENV === "development" ? DEV_BASE : PROD_BASE;

  console.log(`getData url=${url}/${endpoint}`);

  return fetch(`${url}/${endpoint}`, {
    method: "GET",
    mode: "cors",
  })
    .then(response => response.json())
    .then(results => {
      console.log(`getData Results=${results}`);
      return results;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
