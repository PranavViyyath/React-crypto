import React from 'react'
import { Container,Row,Coins,CoinData,CoinImg,CoinName,CoinSymbol,CoinPrice,CoinVolume,LowRed,HighGreen,CoinCap} from './coinStyle'


const Coin = ({image,name,symbol,price,volume,priceChange,marketCap}) => {
    return (
        <Container>
            <Row>
                <Coins>
                    <CoinImg src={image} alt='crypto'/>
                    <CoinName>{name}</CoinName>
                    <CoinSymbol>{symbol}</CoinSymbol>
                </Coins>   
                <CoinData>
                    <CoinPrice>${price}</CoinPrice>
                    <CoinVolume>${volume}</CoinVolume>
                    {priceChange<0 ?
                     <LowRed>{priceChange.toFixed(2)}%</LowRed>:
                     <HighGreen>{priceChange.toFixed(2)}%</HighGreen>
                     }
                     <CoinCap>Mkt Cap: {marketCap}</CoinCap>
                   
                </CoinData>         
            </Row>
        </Container>
    )
}

export default Coin
