import { LoaderFunctionArgs, redirect } from "react-router-dom";

export const urlVerification = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  console.log(url.searchParams.get("q"));
  if (url.searchParams.get("q") == "") {
    throw redirect("/");
  }

  return null;
};