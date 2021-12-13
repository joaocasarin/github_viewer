import React from 'react';
import { Divider, Box, Link } from '@mui/material';
import { User, UserRepo } from '../../interfaces/interfaces';
import { Wrapper, Info, BoxStyle } from './Github.styles';
import Repos from '../Repos/Repos';

const Github = ({ user, repos }: { user: User | undefined; repos: UserRepo[] }) => (
    <Wrapper>
        <Box style={BoxStyle}>
            <Link href={user?.html_url} target='_blank' rel='noreferrer'>
                <img
                    src={user?.avatar_url}
                    alt='avatar'
                    style={{ height: '180px', width: '180px', borderRadius: '50%' }}
                />
            </Link>
            <Box>
                <Info variant='subtitle2'>Username: {user?.login}</Info>
                <Info variant='subtitle2'>Followers: {user?.followers}</Info>
                <Info variant='subtitle2'>Following: {user?.following}</Info>
                <Info variant='subtitle2'>Repos: {user?.public_repos}</Info>
            </Box>
        </Box>
        <Divider variant='middle' orientation='vertical' flexItem />
        <Repos repos={repos} />
    </Wrapper>
);

export default Github;
