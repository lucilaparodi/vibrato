// // src/pages/AgendarFinalForm.jsx
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// function AgendarFinalForm() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const service = queryParams.get("service") || "clase";
//   const hours = queryParams.get("hours") || "1";
//   const date = queryParams.get("date") || "";
//   const time = queryParams.get("time") || "";

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí harías la llamada a tu backend o a la API de Google Calendar
//     console.log({
//       name,
//       email,
//       message,
//       service,
//       hours,
//       date,
//       time,
//     });
//     alert("¡Tu reserva ha sido agendada (ficticiamente)!");
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Agendar - Paso 3: Completa tus datos</h2>
//       <p>Servicio: {service}</p>
//       <p>Cantidad de horas: {hours}</p>
//       <p>
//         Fecha y hora: {date} {time && `- ${time}`}
//       </p>

//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label>Nombre:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label>Mensaje:</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>

//         <button type="submit">Confirmar Agenda</button>
//       </form>
//     </div>
//   );
// }

// export default AgendarFinalForm;

// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "0 auto",
//     padding: "20px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   inputGroup: {
//     marginBottom: "10px",
//   },
// };
