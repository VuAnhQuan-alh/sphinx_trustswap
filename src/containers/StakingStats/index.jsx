import clone from 'clone';
import React from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import { dataList } from '../Tables/AntTables/AntTables';
import IsoWidgetsWrapper from '../Widgets/WidgetsWrapper';
// import IsoWidgetBox from '../Widgets/WidgetBox';
// import CardWidget from '../Widgets/Card/CardWidget';
// import ProgressWidget from '../Widgets/Progress/ProgressWidget';
import StickerWidget from '../Widgets/Sticker/StickerWidget';
// import * as rechartConfigs from '../Charts/Recharts/config';
// import { isServer } from '@iso/lib/helpers/isServer';
// import StackedAreaChart from '../Charts/Recharts/Charts/StackedAreaChart';
// import IntlMessages from '@iso/components/utility/intlMessages';
import LineChart from '../Charts/ReactChart2/Components/Line/Line';

const tableDataList = clone(dataList);
tableDataList.size = 5;
const styles = {
  widgetPageStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
};

const STICKER_WIDGET = [
  {
    number: '$1.87',
    text: 'SWAP PRICE',
    icon: 'ion-cash',
    fontColor: '#ffffff',
    bgColor: '#7266BA',
  },
  {
    number: '12,108',
    text: 'NUMBER OF STAKERS',
    icon: 'ion-person-stalker',
    fontColor: '#ffffff',
    bgColor: '#42A5F6',
  },
  {
    number: '88%',
    text: 'NUMBER OF STAKERS',
    icon: 'ion-person-stalker',
    fontColor: '#ffffff',
    bgColor: '#42A5F6',
  },
  {
    number: '44,093,853',
    text: 'STAKED SWAP',
    icon: 'ion-flash',
    fontColor: '#ffffff',
    bgColor: '#7ED320',
  }
];

// const CARD_WIDGET = [
//   {
//     icon: 'ion-android-chat',
//     iconcolor: '#42A5F5',
//     number: 'widget.cardwidget1.number',
//     text: 'widget.cardwidget1.text',
//   },
//   {
//     icon: 'ion-music-note',
//     iconcolor: '#F75D81',
//     number: 'widget.cardwidget2.number',
//     text: 'widget.cardwidget2.text',
//   },
//   {
//     icon: 'ion-trophy',
//     iconcolor: '#FEAC01',
//     number: 'widget.cardwidget3.number',
//     text: 'widget.cardwidget3.text',
//   },
// ];

// const PROGRESS_WIDGET = [
//   {
//     label: 'widget.progresswidget1.label',
//     details: 'widget.progresswidget1.details',
//     icon: 'ion-archive',
//     iconcolor: '#4482FF',
//     percent: 50,
//     barHeight: 7,
//     status: 'active',
//   },
//   {
//     label: 'widget.progresswidget2.label',
//     details: 'widget.progresswidget2.details',
//     icon: 'ion-pie-graph',
//     iconcolor: '#F75D81',
//     percent: 80,
//     barHeight: 7,
//     status: 'active',
//   },
//   {
//     label: 'widget.progresswidget3.label',
//     details: 'widget.progresswidget3.details',
//     icon: 'ion-android-download',
//     iconcolor: '#494982',
//     percent: 65,
//     barHeight: 7,
//     status: 'active',
//   },
// ];


function StakingStats() {
  const { rowStyle, colStyle, titleStyle } = basicStyle;

  // const stackConfig = {
  //   ...rechartConfigs.StackedAreaChart,
  //   width: !isServer && window.innerWidth < 450 ? 300 : 500,
  // };
  return (
    <LayoutWrapper>
      <div style={styles.widgetPageStyle}>

      <h2 style={titleStyle}>Overall Staking Statistics</h2>

        <Row style={rowStyle} gutter={0} justify="start">
          {STICKER_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={widget.number}
                  text={widget.text}
                  icon={widget.icon}
                  fontColor={widget.fontColor}
                  bgColor={widget.bgColor}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <LineChart />
        </Row>

        {/* <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            {CARD_WIDGET.map((widget, idx) => (
              <IsoWidgetsWrapper key={idx} gutterBottom={20}>
                <CardWidget
                  icon={widget.icon}
                  iconcolor={widget.iconcolor}
                  number={<IntlMessages id={widget.number} />}
                  text={<IntlMessages id={widget.text} />}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>

          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            {PROGRESS_WIDGET.map((widget, idx) => (
              <IsoWidgetsWrapper key={idx} gutterBottom={20}>
                <ProgressWidget
                  label={<IntlMessages id={widget.label} />}
                  details={<IntlMessages id={widget.details} />}
                  icon={widget.icon}
                  iconcolor={widget.iconcolor}
                  percent={widget.percent}
                  barHeight={widget.barHeight}
                  status={widget.status}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>

          <Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={448} style={{ overflow: 'hidden' }}>
                <StackedAreaChart {...stackConfig} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row> */}


      </div>
    </LayoutWrapper>
  )
}

export default StakingStats