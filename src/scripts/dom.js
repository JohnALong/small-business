import html from "./factory.js"
const htmlInfo = {
    cardsToDom: (entryObject) => {
        let htmlString = ""
        console.log("parsed info from dom.js", entryObject)
        // parsedInfo.forEach(entry => {
            htmlString += html.cardFactory(entryObject)
        // })
        document.querySelector("#display-container").innerHTML += htmlString
    }
}
export default htmlInfo