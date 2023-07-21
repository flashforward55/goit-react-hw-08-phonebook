import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const AuthListItem = styled.li`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.15);
        text-shadow: 0px 5px 10px bisque;
    }
    &:not(:last-child) {
        margin-right: 16px;
    }
`;

export const AuthTitle = styled(NavLink)`
    display: flex;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    &.active {
        color: bisque;
    }
`;
