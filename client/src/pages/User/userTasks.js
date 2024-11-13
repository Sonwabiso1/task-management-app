import React from "react";
import '../../styles/User/userTasks.css';

export default function Tasks() {
    return (
        <div class="board">
            <div class="column">
                <div class="header todo">To do</div>
                <div class="box">
                    <h4>
                     Task name
                    </h4>
                    <p>Task description</p>
                    <h5>Date due: </h5>
                </div>
            </div>
            <div class="column">
                <div class="header in-progress">In Progress</div>
                <div class="box">
                    <h4>
                      Task name
                    </h4>
                    <p>Task description</p>
                    <h5>Date due: </h5>
                </div>
                <div class="box"></div>
            </div>
            <div class="column">
                <div class="header done">Done</div>
                <div class="box">
                    <h4>
                     Task name
                    </h4>
                    <p>Task description</p>
                    <h5>Date due: </h5>
                </div>
            </div>
        </div>
    );
}
