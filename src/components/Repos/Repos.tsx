/* eslint-disable no-unsafe-optional-chaining */
import { List, ListItem, Pagination, Link, styled } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { UserRepo } from '../../interfaces/interfaces';

const NewLink = styled(Link)(() => ({
    fontFamily: 'Fira Sans',
    color: '#373737',
    fontWeight: 'bold',
    transitionDuration: '0.3s',
    transitionProperty: 'color',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
        color: '#65499c'
    }
}));

const Repos = ({ repos }: { repos: UserRepo[] }) => {
    const itemsPerPage = 7;
    const pages = Math.ceil(repos.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <List sx={{ overflow: 'clip' }}>
                {repos
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((repo: UserRepo) => (
                        <ListItem key={uuid()} disableGutters>
                            <NewLink
                                href={repo.html_url}
                                underline='none'
                                target='_blank'
                                color='#9575cd'
                            >
                                {repo.name.length > 20 ? `${repo.name.slice(0, 20)}...` : repo.name}
                            </NewLink>
                        </ListItem>
                    ))}
            </List>
            {pages > 1 && (
                <Pagination
                    count={pages}
                    size='medium'
                    defaultPage={currentPage}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='secondary'
                />
            )}
        </div>
    );
};

export default Repos;
