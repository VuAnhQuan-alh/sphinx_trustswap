// import clone from 'clone';
import React from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import IsoWidgetsWrapper from '../Widgets/WidgetsWrapper';
import StickerWidget from '../Widgets/Sticker/StickerWidget';
import LineChart from '../Charts/ReactChart2/Components/Line/Line';
import { useAsync } from '../../hooks/useAsync';
import { getMarketBNB } from '../../services/apiCoingeko';
import { StakingComponent } from './StakingComponnent';
import { FormatNumber } from '../../hooks/FormatNumber';

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
    text: 'price',
    icon: 'ion-cash',
    fontColor: '#ffffff',
    bgColor: '#7266BA',
  },
  {
    text: 'NUMBER OF STAKERS',
    icon: 'ion-cash',
    fontColor: '#ffffff',
    bgColor: '#42A5F6',
  },
  {
    text: 'STAKINGPOOL FILLED',
    icon: 'ion-cash',
    fontColor: '#ffffff',
    bgColor: '#42A5F6',
  },
  {
    text: 'STAKED SWAP',
    icon: 'ion-cash',
    fontColor: '#ffffff',
    bgColor: '#7ED320',
  }
];

const NEW_ROW = [
  {
    key: 'max_cap',
    text: 'Max Cap',
    data: '0'
  },
  {
    key: 'total_rewards',
    text: 'Total Rewards',
    data: '0'
  },
  {
    key: 'address',
    text: 'Address',
    data: '0'
  },
  {
    key: 'total_supply',
    text: 'Total Supply',
    data: '0'
  },
  {
    key: 'total_burned',
    text: 'Total Burned',
    data: '0'
  },
  {
    key: 'un_staking',
    text: 'UnStaking Period',
    data: '0'
  },
]

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
  const { data: { array, max_cap, total_supply } , loading } = useAsync(getMarketBNB, [0, 0, 0, 0], true);

  const newMaxCap = FormatNumber(max_cap);
  const price = [
    {
      key: 'max_cap',
      value: newMaxCap
    },
    {
      key: 'total_supply',
      value: Math.ceil(total_supply)
    }
  ];

  NEW_ROW.forEach(item => {
    price.forEach(obj => {
      if (obj.key === item.key) {
        item.data = `${obj.value}`;
      }
    })
  })


  return (
    <LayoutWrapper>
      <div style={styles.widgetPageStyle}>

        <h2 style={titleStyle}>Overall Staking Statistics {loading && "LOADING"}</h2>

                {/* Sticker Widget */}
        <Row style={rowStyle} gutter={0} justify="start">
          {STICKER_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                <StickerWidget
                  index={idx}
                  number={array?.[idx]}
                  text={widget.text}
                  icon={widget.icon}
                  fontColor={widget.fontColor}
                  bgColor={'#15161b94'}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            <StakingComponent data={NEW_ROW} />
          </Col>
          <Col lg={18} md={36} sm={36} xs={72} style={colStyle}>
            <LineChart />
          </Col>
        </Row>
      </div>
    </LayoutWrapper>
  )
}

export default StakingStats
