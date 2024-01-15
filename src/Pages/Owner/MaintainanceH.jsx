import React from "react";

function MaintainanceH(props) {
  return (
    <div>
      <div className="maintainH">
        <div className="img">
          <img
            src={require("../../Assests/Maintainance/maintain-1.jfif")}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="info">
          <h2>
            Our Commitment to Exceptional <span>Property Maintenance</span>
          </h2>
          <p>
            At [Company Name], we pride ourselves on delivering meticulous and
            proactive property maintenance services to ensure that your house
            remains in impeccable condition. Our skilled maintenance team
            conducts regular inspections, swiftly addresses issues, and
            implements preventative measures to keep your property at its best.
            With a commitment to timely repairs, open communication, and
            budget-conscious solutions, we prioritize the longevity and value of
            your investment. Rest easy knowing that your property is in capable
            hands, receiving the attention and care it deserves.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MaintainanceH;
