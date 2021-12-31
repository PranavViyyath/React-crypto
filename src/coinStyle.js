import styled from "styled-components";

export const Container=styled.div`
display:flex;
justify-content:center;
`
export const Row=styled.div`
display:flex;
flex-direction:row;
justify-items:start;
align-items:center;
height:80px;
border-bottom: 1px solid #d7d7d7;
width:900px;
`

export const Coins=styled.div`
display:flex;
align-items:center;
padding-right:24px;
min-width:300px;
`

export const CoinImg=styled.img`
 height:30px;
 width:30px;
 margin-right:10px;
`

export const CoinName=styled.p`
font-size:16px;
width:150px;
`

export const CoinSymbol=styled.p`
text-transform: uppercase; 
`

export const CoinData=styled.div`
display:flex;
text-align: center;
justify-content:space-between;
width: 100%;
`

export const CoinPrice=styled.p`
width:110px;`

export const CoinVolume=styled.p`
width:230px;
`

export const CoinCap=styled.p`
width:155px;`

export const LowRed=styled.p`
width: 100px;
color: red;`

export const HighGreen=styled.p`
width: 100px;
color:green;
`