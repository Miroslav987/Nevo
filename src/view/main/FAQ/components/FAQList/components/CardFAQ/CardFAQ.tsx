// "use client";

// import { Collapse } from "antd";
// import styles from './CardFAQ.module.scss'
// import { FC } from "react";
// import { CardFAQType } from "views/main/FAQ/model/faq";

// const {Panel} = Collapse

// export type CardFAQProps = {
//   card:CardFAQType
//   key:number
// };

// const CardFAQ: FC<CardFAQProps> = ({card,key}:CardFAQProps) => {
//   return (
// <Collapse className={styles.cardFAQ} expandIcon={({ isActive }) => <span className={styles.plus} style={isActive? {transform:'rotate(90deg)'}:{}}>+</span>}>
//   <Panel  header={card.title} key={key}>
//   <p>{card.description}</p>
//   </Panel>
// </Collapse>
//   );
// };

// export default CardFAQ;