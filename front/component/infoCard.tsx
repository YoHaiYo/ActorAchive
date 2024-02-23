import React from 'react';
import "./style/infoCard/style.css";

// Define an interface for the component props
interface InfoCardProps {
  index: number | string;
  title: string;
  desc: string;
}

const InfoCard = ({ index, title, desc }: InfoCardProps) => {
  return (
    <div className="infocard">
      <div className="infocard-container">
        <div className="infocard-width">
          <div className="infocard-index">{index}</div>
          <div className="infocard-content">
            <div className="infocard-title">{title}</div>
            <div className="infocard-description">
              {desc}
            </div>
          </div>
        </div>
      </div>
      <div className="infocard-divider"></div>
    </div>
  );
}

export default InfoCard;
