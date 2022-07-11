import { useEffect } from "react";

export default async function questions(stack) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 663964d20c630d677b0076da4a9a396efe878b70"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

    await fetch(
      `https://unicodeinterview.pythonanywhere.com/accounts/question/${stack}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log("error", error);
        return "Error";
      });
}
