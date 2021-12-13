/* eslint-disable no-unsafe-optional-chaining */
import React, { useState, ChangeEvent } from 'react';
import { List, ListItem, Pagination } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { NewLink, Wrapper } from './Repos.styles';
import { UserRepo } from '../../interfaces/interfaces';

const Repos = ({ repos }: { repos: UserRepo[] }) => {
    const itemsPerPage = 7;
    const pages = Math.ceil(repos.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Wrapper>
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
        </Wrapper>
    );
};

export default Repos;
