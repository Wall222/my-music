import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C; 
  }
`

export const HeaderLeft = styled.div`
    .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
    .item {
      height: 69px;
      &:hover, &.active {
      }
      a {
        display: inline-block;
        height: 69px;
        line-height: 69px;
        padding: 0 30px;
        color: #fff;

        &:hover , &.active  {
          text-decoration: none;
          background-color:#000;
        }
      }
    }
    .header-hot {
      width: 28px;
      height: 19px;
      background-position: -190px 0;
      margin-left: -30px;
    }
`

export const HeaderRight = styled.div`
  margin-left: 50px;
  .search {
    padding-left: 10px;
  }
  .ant-input {
    padding-left: 10px;
    width: 158px;
    height: 32px;
    border-radius: 16px;
  }
`