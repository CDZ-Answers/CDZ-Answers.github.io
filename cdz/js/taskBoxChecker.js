/* Created by CDZ-Answers 2021 */

function taskBoxChecker(elementId, taskId) {
    var chbox = document.getElementById(elementId);
    var taskLabel = document.getElementById(taskId);

    if (chbox.checked) {
        taskLabel.className = taskLabel.className.replace('task', 'task success');
    } else {
        taskLabel.className = taskLabel.className.replace('task success', 'task');
    }
}
