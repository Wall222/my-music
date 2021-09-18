import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  padding: 0 10px 4px 34px;
  background-position: -225px -162px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keyword {
      display: flex;

      .item {
        font-size: 10px;
        .a {
          color: #666;
        }
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .more {
      font-size: 8px;
      color: #666;
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`