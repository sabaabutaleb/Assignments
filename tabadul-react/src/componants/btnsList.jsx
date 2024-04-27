import React from "react";
import Button from "./button";
import "react-icons";
export default function ButtonsList() {
  return (
    <div class="btn-div">
      <div className="btn-div">
        <Button className="following-report-btn btn">
          تقارير المتابعة
          <i className="bi bi-journal-text"></i>
        </Button>
        <Button className="power-bi-report-btn btn">
          {" "}
          Power BI تقارير
          <i className="bi bi-file-earmark-ppt"></i>
        </Button>

        <Button className="mobile-report-btn btn">
          {" "}
          تقارير الموبايل
          <i className="bi bi-phone"></i>
        </Button>
      </div>
    </div>
  );
}
