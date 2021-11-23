import React, {useState} from 'react'
import Feed from './Feed'
import Alea from './Alea'

export default function Bunny() {

    const [isFeeded, setIsFeeded] = useState(false);

    const onFeed = (e) => {
        console.log('feeded');
        setIsFeeded(true);
    }

    return (
        isFeeded ?
        <Alea/>
        :
        <Feed onFeed={onFeed}/>
    )
}
