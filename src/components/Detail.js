import React from 'react'
import styled from 'styled-components'
import playBtn from "../assets/images/play-icon-black.png"
import TrailerBtn from "../assets/images/play-icon-white.png"
import groupImg from "../assets/images/group-icon.png"
function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={playBtn}/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src={TrailerBtn}/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>
                        +
                    </span>
                </AddButton>
                <GroupWatchButton>
                    <img src={groupImg}/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            The film is about an aging and lonely Chinese-Canadian mother, suffering from empty nest syndrome, who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life. The film won the Oscar for the Best Animated Short Film at the 91st Academy Awards.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vh + 5px);
    position: relative;
`

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`

const ImageTitle = styled.div `
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div `
    display: flex;
    align-items: center;

`

const PlayButton = styled.button `
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;


    &:hover {
        background: rgb( 198, 198, 198);

    }
`
const TrailerButton = styled(PlayButton) `
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    
`
const AddButton = styled.button `
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0,0,0,0.6);
    border:2px solid white; 
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
`
const GroupWatchButton = styled(AddButton) `
    background: rgb(0,0,0);

`

const SubTitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`
const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 750px;
`