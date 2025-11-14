// "use client";

// import { FC } from "react";
// import styles from "./CardService.module.scss";
// // import { CardServiceType } from "views/main/OurServices/model/OurServices";

// export type CardServiceProps = {
//   service: CardServiceType;
// };

// const CardService: FC<CardServiceProps> = ({ service }) => {
//   const image = service.image.src ? { ["--bg" as any]: `url(${service.image.src})` }  : {};
//   const hasFullSize = service.hasFullSize ? { width: "100%",height:"464px" } : {};
//   const style = { ...image, ...hasFullSize };

//   return (
//     <div style={style} className={styles.cardService}>
//       <div className={styles.infoText}>
//         <h2>{service.title}</h2>
//         <p>{service.description}</p>
//       </div>
//     </div>
//   );
// };

// export default CardService;
