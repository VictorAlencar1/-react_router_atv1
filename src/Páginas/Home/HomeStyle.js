import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url(${(props)=>props.imgUrl});
    background-color: hsl(225, 100%, 94%);
    padding: 50px 0;
  
  main{

    background: aliceblue;
    height: 80vh;
    border-radius: 20px;

    div{
        .dance{
            width: 45vw;
            border-radius: 50px;
            padding: 0 20px;
        }
    }

    div{
      margin: 20px 0;
  }
  }
  
`;
