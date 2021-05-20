import clone from 'clone';
import React from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import { dataList } from '../Tables/AntTables/AntTables';
import IsoWidgetsWrapper from '../Widgets/WidgetsWrapper';
import StickerWidget from '../Widgets/Sticker/StickerWidget';

const tableDataList = clone(dataList);
tableDataList.size = 5;
const styles = {
  widgetPageStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'hidden',
  }
};

const STICKER_WIDGET = [
  {
    number: 0,
    text: 'SWAPSCORE',
    icon: 'ion-stats-bars',
  },
  {
    number: 0,
    text: 'STAKED',
    icon: 'ion-locked',
  },
  {
    number: 0,
    text: 'REWARDS',
    icon: 'ion-wineglass',
  },
  {
    number: 0,
    text: 'ACCUMULATED REWARDS',
    icon: 'ion-wineglass',
  },

  {
    number: 0,
    text: 'HOLDINGS',
    icon: 'ion-home',
  },
];


function SwapStats() {
  const { rowStyle, colStyle, titleStyle } = basicStyle;

  return (
    <LayoutWrapper>
      <div style={styles.widgetPageStyle}>
        <h2 style={titleStyle}>Your Trustswap Statistics</h2>
        <Row style={rowStyle} gutter={0} justify="start">
          {STICKER_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={widget.number}
                  text={widget.text}
                  icon={widget.icon}
                  fontColor={'#adb0bb'}
                  bgColor={'#15161B'}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

      </div>
    </LayoutWrapper>
  )
}

export default SwapStats
