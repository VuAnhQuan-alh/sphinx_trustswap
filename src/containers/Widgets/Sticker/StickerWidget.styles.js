import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '@iso/lib/helpers/style_utils';

const StickerWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  ${borderRadius('5px')};

  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.1);

    i {
      font-size: 30px;
    }
  }

  .isoContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;

    .isoStatNumber {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.1;
      margin: 0 0 5px;
    }

    .isoLabel {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }
  }
`;

const NewStickerWidgetWrapper = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.24);
  ${borderRadius('5px')};

  .isoContent {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;

    .isoStatNumber {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.1;
      margin: 0 0 5px;
    }

    .isoLabel {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }
    .isoText {
      font-size: 0.75rem;
      font-weight: 500;
      color: #e6e5e8;
      margin-bottom: 10px;
      line-height: 1.2;
      text-transform: uppercase;
    }
    .isoProgressWidgetBody {
    p {
      font-size: 14px;
      color: ${palette('text', 3)};
      font-weight: 300;
      width: 100%;
      margin: 0 0 5px;
    }
  }
  }

  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #4686FF;

    i {
      font-size: 20px;
    }
  }
`;

export { StickerWidgetWrapper, NewStickerWidgetWrapper };
