function sendNotification(title, message) {
    chrome.notifications.create({
        type: "basic",
        title: title,
        message: message,
        iconUrl: "https://raw.githubusercontent.com/M2Sky/About-Me-SRC/main/LuvU.png"
    })
}

chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
    console.log(res)
    if (res.type == "notification") {
        sendNotification(res.title, res.message)
        sendResponse(true)
        return true
    }
})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, { url }) => {
    if (changeInfo.status !== 'complete' || !/https:\/\/.+roblox.com\//g.test(url)) return

    await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["css/style.css"],
    })

    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["js/jquery.js", "load.js"],
    })
})
