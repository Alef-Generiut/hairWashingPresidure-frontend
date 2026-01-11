import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { store } from "../store/store";

export const urlVerification = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("q") == "") {
    throw redirect("/");
  }

  return null;
};
export const urlLoginSecurityVerification = () => {
  const state = store.getState();
  const { userId } = state.auth;

  if (!userId) {
    throw redirect("/login");
  }

  return null;
};
