import React, { useState, useEffect, useCallback } from 'react';
import './Routes.css';
import Notification from '../components/Notification';
import DefaultProfileImage from '../icons/photo.svg';
import CrossImage from '../icons/cross.svg';

function Bonus() {
    const [bonuses, setBonuses] = useState([]);
    const username = localStorage.getItem('username');

    useEffect(() => {
        const fetchUserBonuses = async () => {
            try {
                const response = await fetch('/https://api.glimshop.ru/getBonus', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        login: username
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBonuses(data);

                console.log('Bonuses: ', bonuses);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchUserBonuses();
    }, [username]);
}

export default Bonus;