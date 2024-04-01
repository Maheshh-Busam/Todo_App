import React from 'react';

function CompletedTasks({ completedTasks }) {
    return (
        <div>
            <ul>
                {completedTasks.map((task, index) => (
                    <li key={index} style={{backgroundColor: "lightGreen", padding: "8px"}}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default CompletedTasks;
