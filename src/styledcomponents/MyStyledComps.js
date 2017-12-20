import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MDiv = styled.div`
	position: justify;
	font-size: 20px;
	text-align: left;
	margin: 10px;
	padding: 5px;
	height: 180px;
`;

export const Pstyled = styled.p`
	color: #888888;
	margin-right: 140px;
	text-align: left;
`;

export const Header1 = styled.h1`
	text-align: center;
	size: 200px;
`;

export const Title = styled.h3`
	text-align: left;
`;

export const LiLi = styled.li`
	list-style: none;
	position: relative;
	background: #d2d2d2;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
`;

export const Img = styled.img`
	position: absolute;
	right: 10px;
	width: 100px;
	margin: 20px;
`;

export const SimpleLi = styled.li`
	list-style: none;
	position: justify;
	padding: 10px;
	color: #888888;
	background: #222222;
	right: 10px;
`;

export const MenuDiv = styled.div`
	height: 100%; /* 100% Full-height */
	width: 200px; /* 0 width - change this with JavaScript */
	position: fixed; /* Stay in place */
	z-index: 1; /* Stay on top */
	top: 0; /* Stay at the top */
	left: 0;
	background-color: #111; /* Black*/
	overflow-x: hidden; /* Disable horizontal scroll */
	padding-top: 10px; /* Place content 60px from the top */
	transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;

export const BodyDiv = styled.div`
	margin-left: 200px; /* Same as the width of the sidenav */
	padding: 20px;
`;

export const FlexDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: left;
	align-content: left;
	justify-content: left;
	align-items: left;
`;

export const HeaderImage = styled.img`
	position: relative;
	height: 180px;
	align: center;
	margin-left: 200px;
`;

export const Image = styled.img`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
`;

export const MenuHeaderImage = styled.img`
	height: 180px;
	align: center;
`;

export const MenuLink = styled(Link)`
	color: #777;
	text-decoration: none;
	position: justify;
`;

export const UlStyled = styled.ul`
	margin-left: 0px;
`;
