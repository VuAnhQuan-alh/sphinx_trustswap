import React from 'react';
import { NewStickerWidgetWrapper } from './StickerWidget.styles';

export default function({ fontColor, bgColor, width, icon, number, text, fontSize = 16, lineWidth = 130, index }) {
  // const textColor = {
  //   color: fontColor,
  //   fontSize: '0.75rem',
  //   fontWeight: '500',
  //   letterSpacing: '0.08333em',
  //   textTransform: 'uppercase'
  // };
  const widgetStyle = {
    backgroundColor: bgColor,
    width: width,
    padding: "0px 20px 0px 0px"
  };
  const iconStyle = {
    color: '#e6e5e8',
  };

  // const fontSizeStyle = {
  //   fontSize: fontSize
  // };

  // const line = {
  //   width: lineWidth
  // };
  const numberColor = {
    display: 'block',
    fontSize: '1.85em',
    color: '#e6e5e8',
    fontWeight: '500',
  }

  return (
    <NewStickerWidgetWrapper className="isoStickerWidget" style={widgetStyle}>

      <div className="isoContent">
        <span className="isoText">
          {text}
        </span>
        <h3 className="isoStatNumber" style={numberColor}>
          {number !== undefined ? (index === 0 ? `$ ${number}`: number) : 0}
        </h3>
      </div>

      <div className="isoIconWrapper">
        <i className={icon} style={iconStyle}></i>
      </div>
      {/* <div className="isoIconWrapper">
        <i className={icon} style={iconStyle} />
      </div>

      <div className="isoContentWrapper">
        <h3 className="isoStatNumber" style={textColor}>
          {number}
        </h3>
        <span className="isoLabel" style={{...textColor, ...fontSizeStyle, ...line}}>
          {text}
        </span>
      </div> */}
    </NewStickerWidgetWrapper>
  );
}
