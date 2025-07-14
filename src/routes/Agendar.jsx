// import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";

// export function Agendar() {
//   const login = useGoogleLogin({
//     flow: "auth-code", // Para obtener el auth code en vez del JWT, si así lo deseas
//     scope: "https://www.googleapis.com/auth/calendar",
//     onSuccess: (codeResponse) => {
//       console.log("Code response:", codeResponse);
//       // codeResponse puede ser un 'code' que debes intercambiar en tu backend
//       // por un access_token que te dé acceso a Calendar
//     },
//     onError: (errorResponse) => console.error("Login Failed:", errorResponse),
//   });

//   return (
//     <div>
//       <h1>Agendar con Google</h1>
//       <button onClick={() => login()}>
//         Iniciar sesión con Google (Calendar Scope)
//       </button>
//     </div>
//   );
// }
