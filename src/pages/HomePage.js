import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import HobbyLists from '../components/home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby'

const HomePage = () => {
    const hobbyLists = useSelector(state => state.hobby.list);
    const activeID = useSelector(state => state.hobby.activeID);

    console.log('HobbyList: ', hobbyLists);

    const dispatch = useDispatch();

    const randomID = () => {
        return 1000 + Math.trunc((Math.random() * 9000));
    }

    const handleAddHobbyClick = () => {
        //new list hobby
        const newID = randomID();
        const newHobby = {
            id: newID,
            title: `Hobby ${newID}`,
        }
        //Dispatch action to add a hobby
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }


    return (
        <div>
            <h1>Home Page Redux</h1>

            <button onClick={handleAddHobbyClick}>Add Hobby</button>
            <HobbyLists
                hobbyLists={hobbyLists}
                activeID={activeID}
                onHobbyClick={handHobbyClick}
            />
        </div>
    )
}

export default HomePage
