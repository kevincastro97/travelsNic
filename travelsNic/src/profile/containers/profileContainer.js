import React, {Component} from 'react';

import Profile from './../components/profile';

class ProfileContainer extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Profile/>
        );
    }
}

export default ProfileContainer;