// // src/pages/AgendarHome.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AgendarHome() {
//   const navigate = useNavigate();
//   const [serviceType, setServiceType] = useState("clase");
//   const [hours, setHours] = useState(1);

//   const handleContinue = () => {
//     // Pasamos los datos por query params o podrías usar Context
//     navigate(`/agendar/detalles?service=${serviceType}&hours=${hours}`);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Agendar - Paso 1</h1>
//       <div style={styles.inputGroup}>
//         <label>Tipo de Servicio:</label>
//         <select
//           value={serviceType}
//           onChange={(e) => setServiceType(e.target.value)}
//         >
//           <option value="estudio">Estudio de Grabación</option>
//           <option value="clase">Clases de Música</option>
//         </select>
//       </div>

//       <div style={styles.inputGroup}>
//         <label>Cantidad de Horas:</label>
//         <input
//           type="number"
//           min="1"
//           value={hours}
//           onChange={(e) => setHours(e.target.value)}
//         />
//       </div>

//       <button onClick={handleContinue}>Continuar</button>
//     </div>
//   );
// }

// export default AgendarHome;

// const styles = {
//   container: {
//     padding: "20px",
//     maxWidth: "400px",
//     margin: "0 auto",
//   },
//   inputGroup: {
//     marginBottom: "10px",
//   },
// };
