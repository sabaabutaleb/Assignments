import React from "react";
import Item from "./item";

export default function Container() {
  return (
    <div className="mobile-report-div flex  container container-1">
      <Item
        className="image-box"
        src="Images/M_img_7.png"
        alt="tabadul "
        name="تبادل"
      />
      <Item
        className="image-box"
        src="Images/M_img_6.png"
        alt="tabadul "
        name="دائرة التسجيل العقاري"
      />
      <Item
        className="image-box"
        src="Images/M_img_5.png"
        alt="takhtet omrani "
        name="مجلس الشارقة للتخطيط العمراني"
      />
      <Item
        className="image-box"
        src="Images/M_img_4.png"
        alt="takhtet wa masaha "
        name="دائرة التخطيط و المساحة"
      />
      <Item
        className="image-box"
        src="Images/M_img_3.png"
        alt="tanmeyea eqtesadeya "
        name="دائرة التنمية الاقتصادية"
      />
      <Item
        className="image-box"
        src="Images/M_img_2.png"
        alt="sewa "
        name="تبادل>هيئة كهرباء ومياه الشارقة SEWA"
      />
      <Item
        className="image-box"
        src="Images/M_img_1.png"
        alt="baladeyet ashareqa "
        name="بلدية الشارقة</"
      />
    </div>
  );
}
