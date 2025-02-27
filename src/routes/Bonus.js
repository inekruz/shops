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
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchUserBonuses();
    }, [username]);

    return (
        <div className='route'>
            <h2 className='route_title'>Бонусы</h2>

            <ul className='main_products_list'>
                {bonuses.map((bonus, index) => (
                    <li key={index} className='delivery_list_item'>
                        <div className='fav_list_item_container'>
                            <div className='fav_list_item_desc'>
                            <div>
                                <p className='fav_product_name white'>{bonus.title}</p>
                                <p className='product_category orng'>{bonus.description}</p>
                            </div>
                            <p className='price white'>{bonus.date_end} ₽</p>
                            </div>
                            <div className='white'>
                            <p className='status_display'>{bonus.bonus_price}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

//title, description, date_end, bonus_price

export default Bonus;