import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: aliceblue;

  h1{
      padding: 15px 0;
  }

  div{
        display: flex;
        flex-direction: column;
        width: 100vw;
    img{
        width: 50vw;
        margin: auto;
        border-radius: 15px;
    }
    p{
        width: 50vw;
        text-align: center;
        margin: auto;
        font-size: 20px;
        font-weight: 500;
        
        span{
            font-weight: bolder;
            font-size: 25px;
        }
    }
  }
`;
