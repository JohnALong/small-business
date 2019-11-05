import html from "./dom.js"
console.log("linked")
const api = {
    allInfo: () => {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
            .then(info => info.json())
            .then(parsedInfo => {
                console.log("parsed info", parsedInfo)
                parsedInfo.forEach(employee => {
                    console.log("employee", employee)
                    html.cardsToDom(employee)
                    console.log("parsedInfo", employee)
                    console.log("employee", employee.name)
                })
            })
    }
}
api.allInfo()