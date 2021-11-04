import React from 'react'
import styled from "styled-components";
import logo from "../assets/images/logo.svg"
import homelogo from "../assets/images/home-icon.svg"
import searchlogo from "../assets/images/search-icon.svg"
import watchlistlogo from "../assets/images/watchlist-icon.svg"
import originallogo from "../assets/images/original-icon.svg"
import movielogo from "../assets/images/movie-icon.svg"
import serieslogo from "../assets/images/series-icon.svg"



function Header() {
    return (
        <Nav>
            <Logo src={logo}/>
            <NavMenu>
            <a>
                <img src={homelogo}/>
                <span>HOME</span>
            </a>
            <a>
                <img src={searchlogo}/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src={watchlistlogo}/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src={originallogo}/>
                <span>ORIGINAL</span>
            </a>
            <a>
                <img src={movielogo}/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src={serieslogo}/>
                <span>SERIES</span>
            </a>
            


            </NavMenu>
            <UserImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MCM_2013_-_Batman_%288979342250%29.jpg/1200px-MCM_2013_-_Batman_%288979342250%29.jpg"/>

        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 35px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display:flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
            padding 0 5px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`