// import NetworkSpeed from "network-speed"; // ES5
// const testNetworkSpeed = new NetworkSpeed();
//
// async function getNetworkDownloadSpeed() {
//     const baseUrl = "http://eu.httpbin.org/stream-bytes/50000000";
//     const fileSizeInBytes = 50000000;
//     const speed = await testNetworkSpeed.checkDownloadSpeed(
//         baseUrl,
//         fileSizeInBytes
//     );
//     return speed;
// }
//
// async function getNetworkUploadSpeed() {
//     const options = {
//         hostname: "www.google.com",
//         port: 80,
//         path: "/catchers/544b09b4599c1d0200000289",
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };
//     const fileSizeInBytes = 2000000;
//     const speed = await testNetworkSpeed.checkUploadSpeed(
//         options,
//         fileSizeInBytes
//     );
//     return speed;
// }
// export default () => {
//     let downloadSpeed = getNetworkDownloadSpeed(),
//         uploadSpeed = getNetworkUploadSpeed();
//     return {
//         downloadSpeed,
//         uploadSpeed
//     };
// };
//
//
//
// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import speedTest from "./speedTest";
// export default function App() {
//     const [speed, setSpeed] = useState({
//         uploadSpeed: 0,
//         downloadSpeed: 0
//     });
//     useEffect(() => {
//         let { uploadSpeed, downloadSpeed } = speedTest();
//     }, []);
//     return (
//         <div className="App">
//             <h1>Hello CodeSandbox</h1>
//             <h2>Start editing to see some magic happen!</h2>
//         </div>
//     );
// }
//
