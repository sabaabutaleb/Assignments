import React from "react";
import Button from "./button";
import "react-icons";
export default function ButtonsList() {
  return (
    <div class="btn-div">
      <div className="btn-div">
        <Button
          className="following-report-btn btn"
          name="تقارير المتابعة"
          icon={<i className="bi bi-journal-text"></i>}
        />
        <Button
          className="power-bi-report-btn btn"
          name="Power BI تقارير"
          icon={<i className="bi bi-file-earmark-ppt"></i>}
        />
        <Button
          className="mobile-report-btn btn"
          name="تقارير الموبايل"
          icon={<i className="bi bi-phone"></i>}
        />
      </div>
    </div>
  );
}
