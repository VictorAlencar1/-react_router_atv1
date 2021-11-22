import styled from 'styled-components';

export const MusicConatainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div{
    text-align: center;
    
    h1{
        margin: 15px 0;
    }

    aside{
        margin: 15px 0;
        
        h3{
            span{
                text-decoration: underline;
            }
        }
    
        p{
            width: 40vw;
            margin: 10px auto;
            font-weight: 500;
        }

    }
  }
`;
