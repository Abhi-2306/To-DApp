// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TaskContract {
    struct Task {
        uint256 id;
        string title;
        string description;
        bool completed;
        uint256 createdAt;
    }

    mapping(address => Task[]) private userTasks;
    mapping(address => mapping(uint256 => uint256)) private taskIndexById;

    event TaskCreated(address indexed user, uint256 indexed id, string title);
    event TaskToggled(address indexed user, uint256 indexed id, bool completed);
    event TaskDeleted(address indexed user, uint256 indexed id);

    function createTask(string memory _title, string memory _description) external {
        uint256 taskId = userTasks[msg.sender].length;
        Task memory newTask = Task({
            id: taskId,
            title: _title,
            description: _description,
            completed: false,
            createdAt: block.timestamp
        });
        
        userTasks[msg.sender].push(newTask);
        taskIndexById[msg.sender][taskId] = userTasks[msg.sender].length - 1;
        
        emit TaskCreated(msg.sender, taskId, _title);
    }

    function toggleTask(uint256 _taskId) external {
        uint256 index = taskIndexById[msg.sender][_taskId];
        require(index < userTasks[msg.sender].length, "Task not found");
        
        userTasks[msg.sender][index].completed = !userTasks[msg.sender][index].completed;
        
        emit TaskToggled(msg.sender, _taskId, userTasks[msg.sender][index].completed);
    }

    function deleteTask(uint256 _taskId) external {
        uint256 index = taskIndexById[msg.sender][_taskId];
        require(index < userTasks[msg.sender].length, "Task not found");
        
        // Move the last task to the deleted position
        if (index != userTasks[msg.sender].length - 1) {
            userTasks[msg.sender][index] = userTasks[msg.sender][userTasks[msg.sender].length - 1];
            taskIndexById[msg.sender][userTasks[msg.sender][index].id] = index;
        }
        
        userTasks[msg.sender].pop();
        emit TaskDeleted(msg.sender, _taskId);
    }

    function getTasks() external view returns (Task[] memory) {
        return userTasks[msg.sender];
    }
} 