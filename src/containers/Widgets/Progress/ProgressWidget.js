import React from 'react';
import Progress from '@iso/components/uielements/progress';
import { ProgressWidgetWrapper } from './ProgressWidget.styles';
import { NewStickerWidgetWrapper } from '../Sticker/StickerWidget.styles';

export default function ProgressWidget({
  label,
  icon,
  iconcolor,
  details,
  percent,
  barHeight,
  status,
}) {
  const iconStyle = {
    color: iconcolor,
  };

  return (
    <ProgressWidgetWrapper className="isoProgressWidget">
      <div className="isoProgressWidgetTopbar">
        <h3>{label}</h3>
        <i className={icon} style={iconStyle} />
      </div>

      <div className="isoProgressWidgetBody">
        <p className="isoDescription">{details}</p>
        <Progress
          percent={percent}
          strokeWidth={barHeight}
          status={status}
          showInfo={false}
        />
      </div>
    </ProgressWidgetWrapper>
  );
}

export function NewProgressWidget({
  text,
  percent,
  barHeight,
  status,
  bgColor,
}) {

  const widgetStyle = {
    backgroundColor: bgColor,
    padding: "0px 20px 0px 0px"
  };

  return (
    <NewStickerWidgetWrapper className="isoProgressWidget" style={widgetStyle}>
      <div className="isoContent">
        <h3 id="isoText">{text}</h3>
      </div>

      <div className="isoProgressWidgetBody">
        <Progress
          percent={percent}
          strokeWidth={barHeight}
          status={status}
          showInfo={false}
        />
      </div>
    </NewStickerWidgetWrapper>
  );
}
