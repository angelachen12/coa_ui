export function getData(endpoint) {
    const url = process.env.NODE_ENV === "development" ?
        "http://localhost:5000" : "http://coa-flask-app-prod.us-east-1.elasticbeanstalk.com";

    console.log(`getData url=${url}/${endpoint}`);

    return fetch(`${url}/${endpoint}`,
                {"method": "GET", "mode": "cors"});

}
  export function postData(endpoint, body) {
      const url = process.env.NODE_ENV === "development" ?
          "http://localhost:5000" : "http://coa-flask-app-prod.us-east-1.elasticbeanstalk.com";

      console.log(`postData url=${url}/${endpoint}`);

      return fetch(`${url}/${endpoint}`,
                  {"method": "POST", "mode": "cors",body:JSON.stringify(body)});

  }
