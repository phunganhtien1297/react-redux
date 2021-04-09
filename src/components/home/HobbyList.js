import React from 'react';
import './HobbyList.css';

const HobbyLists = (props) => {
    const { hobbyLists, activeID, onHobbyClick } = props;

    const handClick = (hobby) => {
        if(onHobbyClick) {
            onHobbyClick(hobby);
        }
    }
    return (
        <ul className="hobby-list">
            {hobbyLists.map(hobby => (
                <li
                    key={hobby.id}
                    className = {hobby.id === activeID ? 'active' : ''}
                    onClick = {() => handClick(hobby)}
                >
                    {hobby.title}
                </li>
            ))}
        </ul>
    )
}

export default HobbyLists
