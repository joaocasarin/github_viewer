import React from 'react';
import { Box, BoxProps, Divider } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';
import { User, UserRepo } from '../../interfaces/interfaces';
import Repos from '../Repos/Repos';

const NewBox = muiStyled(Box)<BoxProps>(() => ({
    width: '100%',
    height: '325px',
    display: 'flex',
    justifyContent: 'space-around'
}));

const Info = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #373737;
    font-family: 'Fira Sans', sans-serif;
    padding: 0.5rem;
`;

const Github = ({ user, repos }: { user: User | undefined; repos: UserRepo[] }) => (
    <NewBox>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <a href={user?.html_url} target='_blank' rel='noreferrer'>
                <img
                    src={user?.avatar_url}
                    alt='avatar'
                    style={{ height: '200px', width: '200px', borderRadius: '50%' }}
                />
            </a>
            <div>
                <Info>Username: {user?.login}</Info>
                <Info>Followers: {user?.followers}</Info>
                <Info>Following: {user?.following}</Info>
                <Info>Repos: {user?.public_repos}</Info>
            </div>
        </div>
        <Divider variant='middle' orientation='vertical' flexItem />
        <Repos repos={repos} />
    </NewBox>
);

export default Github;
