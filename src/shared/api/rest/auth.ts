import { createEffect } from "effector";

import { AuthError, Email } from "./common";

export const signInWithEmailFx = createEffect<
  { email: Email },
  void,
  AuthError
>(async ({ email }) => {
  console.log({ email });

  return;
});
