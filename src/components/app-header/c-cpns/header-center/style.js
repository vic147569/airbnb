import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 24px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);

    ${(props) => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }
`
