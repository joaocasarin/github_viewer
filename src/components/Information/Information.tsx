/* eslint-disable react/jsx-no-bind */
import {
    TextField,
    Button,
    ButtonProps,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    CircularProgress
} from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { User, UserRepo } from '../../interfaces/interfaces';
import Github from '../Github/Github';
import api from '../../services/Api';

const NewButton = muiStyled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#9575cd'),
    backgroundColor: '#9575cd',
    '&:hover': {
        backgroundColor: '#65499c'
    },
    marginLeft: '10px'
}));

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Information = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const [inputData, setInputData] = useState('');

    const [user, setUser] = useState<User | undefined>(undefined);
    const [repos, setRepos] = useState<UserRepo[]>([]);

    const [loading, setLoading] = useState(false);

    function onUpdateInput(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        setInputData(event.target.value);
    }

    async function requestData(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        try {
            const { data } = await api.get<User>(`/users/${inputData}`);
            setUser(data);

            const { data: reposData } = await api.get<UserRepo[]>(
                `/users/${inputData}/repos?per_page=100`
            );
            if (reposData.length > 0) {
                setRepos(reposData);
            }
        } catch {
            setDialogOpen(true);
        } finally {
            setLoading(false);
            setInputData('');
        }
    }

    function showContent() {
        if (loading) {
            return <CircularProgress sx={{ color: '#9575cd', margin: 'auto' }} />;
            // eslint-disable-next-line no-else-return
        } else if (user) {
            return <Github user={user} repos={repos} />;
        }

        return null;
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <Form onSubmit={requestData}>
                <TextField
                    label='User'
                    focused
                    value={inputData}
                    onChange={onUpdateInput}
                    sx={{ width: '400px' }}
                />
                <NewButton type='submit' variant='contained'>
                    Search
                </NewButton>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                    <DialogTitle id='alert-dialog-title'>User Not Found</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            The user you are looking for does not exist.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDialogOpen(false)}>OK</Button>
                    </DialogActions>
                </Dialog>
            </Form>
            <Divider variant='middle' sx={{ marginTop: '20px', marginBottom: '20px' }} />
            {showContent()}
            {/* <Github user={user} repos={repos} /> */}
        </div>
    );
};

export default Information;
