import React, { ReactNode } from 'react';
import styled from 'styled-components';

const CardEl = styled.div`
    background-color: #ede7f6;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 800px;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = ({ children }: { children: ReactNode }) => <CardEl>{children}</CardEl>;

export default Card;
