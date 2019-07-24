import React from 'react';

function Current(props) {
    console.log(props)
    return ( 
        <div>
            <h2>Current Members</h2>
            {/* {props.members.map(member => (
                <div>
                <h2>{member.name}</h2>
                <h3>{member.email}</h3>
                <h4>{member.role}</h4>
                </div>
            ))}; */}
        </div>
     );
}

export default Current;