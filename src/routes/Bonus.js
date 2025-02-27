import { useState, useEffect } from 'react';
import './Routes.css';


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

                console.log('Bonuses: ', data.bonuses);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchUserBonuses();
    }, [username]);
}

export default Bonus;