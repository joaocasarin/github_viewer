import React, { SyntheticEvent, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from '../../services/Api';
import { ResponseData } from '../../interfaces/interfaces';
import Repos from '../Repos/Repos';

const GithubUser = () => {
    const [user, setUser] = useState<ResponseData[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const changeSearchValue = (event: SyntheticEvent) => {
        event.preventDefault();
        setSearchValue((event.target as HTMLInputElement).value);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const { data }: { data: ResponseData[] } = await axios.get(
                `/users/${searchValue}/repos`
            );
            setUser(data);
        } catch (e) {
            setUser([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Typography variant='h6'>Github User Search</Typography>
            <div>
                <TextField
                    variant='outlined'
                    label='User'
                    type='search'
                    onChange={changeSearchValue}
                />
                <Button
                    disabled={!searchValue}
                    variant='contained'
                    onClick={() => handleSearch()}
                    sx={{ marginLeft: '1rem', height: '100%' }}
                >
                    Search
                </Button>
            </div>
            <Repos user={user} loading={loading} />
        </>
    );
};

export default GithubUser;
