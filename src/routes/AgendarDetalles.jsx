// // src/pages/AgendarDetalles.jsx
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// function AgendarDetalles() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Obtenemos query params
//   const queryParams = new URLSearchParams(location.search);
//   const service = queryParams.get("service") || "clase";
//   const hours = queryParams.get("hours") || "1";

//   // Info ejemplo
//   const serviceInfo = {
//     clase: {
//       title: "Vibrato - Clase de instrumento",
//       address: "Guayaquí 2927",
//       price: 800,
//       description:
//         "Clase enfocada en técnica de guitarra, postura y ejercicios de vibrato.",
//       icon: "🎸",
//     },
//     estudio: {
//       title: "Estudio de Grabación",
//       address: "Guayaquí 2927",
//       price: 1200,
//       description:
//         "Espacio profesional para grabación de música con equipamiento de alta calidad.",
//       icon: "🎙️",
//     },
//   };

//   const info = serviceInfo[service] || serviceInfo["clase"];

//   const [date, setDate] = useState(new Date());
//   const [timeSlot, setTimeSlot] = useState("");

//   // Horarios de ejemplo
//   const availableTimeSlots = ["10:00", "11:00", "15:00", "16:00"];

//   const handleNext = () => {
//     const selectedDate = date.toISOString().split("T")[0];
//     // Llevamos la info al siguiente paso
//     navigate(
//       `/agendar/final?service=${service}&hours=${hours}&date=${selectedDate}&time=${timeSlot}`
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.leftPanel}>
//         <h2>{info.title}</h2>
//         <p>
//           <strong>Dirección:</strong> {info.address}
//         </p>
//         <p>{info.description}</p>
//         <p>
//           <strong>Precio:</strong> ${info.price}
//         </p>
//         <p>
//           <strong>Duración:</strong> {hours} hora(s)
//         </p>
//       </div>

//       <div style={styles.rightPanel}>
//         <h3>Selecciona el día y la hora</h3>
//         <Calendar onChange={setDate} value={date} />

//         <div style={styles.timeSlotContainer}>
//           <h4>Horarios disponibles:</h4>
//           <div style={styles.timeSlotList}>
//             {availableTimeSlots.map((slot) => (
//               <button
//                 key={slot}
//                 style={{
//                   ...styles.timeSlotButton,
//                   backgroundColor: timeSlot === slot ? "#4CAF50" : "#ccc",
//                 }}
//                 onClick={() => setTimeSlot(slot)}
//               >
//                 {slot}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button onClick={handleNext} disabled={!timeSlot}>
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AgendarDetalles;

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-around",
//     padding: "20px",
//   },
//   leftPanel: {
//     flex: 1,
//     border: "1px solid #ccc",
//     padding: "20px",
//   },
//   rightPanel: {
//     flex: 1,
//     border: "1px solid #ccc",
//     padding: "20px",
//   },
//   timeSlotContainer: {
//     marginTop: "20px",
//   },
//   timeSlotList: {
//     display: "flex",
//     gap: "5px",
//     flexWrap: "wrap",
//   },
//   timeSlotButton: {
//     padding: "8px",
//     border: "none",
//     cursor: "pointer",
//   },
// };
