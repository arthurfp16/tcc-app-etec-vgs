import styled from 'styled-components'


export const PostMain = styled.main`
  background-color: ${props => props.theme.colors.white100};
  min-height: calc(100vh - 78px - 69px);
  h1{
    text-align: center;
    margin-top: 41px;
    margin-bottom: 26px;
  }

  p {
    margin-top: 16px;
    word-break: break-all;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export const Author = styled.span`
  display: block;
  text-align: right;
  margin-top: 26px;
  align-self: flex-end;
`

export const ImageStyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 26px;
`
