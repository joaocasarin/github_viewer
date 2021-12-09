import { List, ListItem, Pagination } from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ResponseData } from '../../interfaces/interfaces';

const ReposList = ({ userRepos }: { userRepos: ResponseData[] }) => {
    const pageLimit = 4;
    const pages = Math.ceil(userRepos.length / pageLimit);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <List sx={{ maxHeight: '150px', overflow: 'auto' }}>
                {userRepos
                    .slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
                    .map((repo: ResponseData) => (
                        <ListItem key={uuid()} disableGutters>
                            <a href={repo.html_url} target='_blank' rel='noreferrer'>
                                {repo.full_name}
                            </a>
                        </ListItem>
                    ))}
            </List>
            {pages > 1 && (
                <Pagination
                    count={pages}
                    defaultPage={currentPage}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            )}
        </div>
    );
};

const Repos = ({ user, loading }: { user: ResponseData[]; loading: boolean }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    return user.length > 0 ? <ReposList userRepos={user} /> : null;
};

export default Repos;
