import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 86px;
    height: 48px;
    margin-right: 90px;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 30px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
    padding: 8px 8px 8px 14px;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      /* height: 200px; */
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: ${(props) => props.theme.text.primaryColor};

      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
      }
    }
  }
`
