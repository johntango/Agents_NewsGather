
async function execute(task, data) {

    let response = sendRequest(task, data);
    return response;

    async function sendRequest(task, data) {
        // call the web server route "callAPI" with the task and data
        let response = await fetch("https://orange-palm-tree-4w74jwj6wvr2qr9w-4000.app.github.dev/callAPI",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({task: task, data: data}),
            mode: "cors",
        });

        if (response.ok) {
            let result = await response.json();
            return result;
        } else {
            return "Error calling API";
        }
    }
}


// Example usage:
// this api will call "Task 1" with data ["a","b","c"] and return "Task 1 is complete"
// 


const details = {
    "name": "callAPI",
    "parameters": {
        "type": "object",
        "properties": {
            "task": {
                "type": "string",
                "description": "The url to call"
            },
            "input": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "An array of strings to be passed to API."
            }
        },
    "required": ["task","input"],
    "description": "This function calls the named API with the list of strings."
    }
}
export { execute, details }