function getCurrentTime() {
    const time = new Date();
    return time.toLocaleDateString()
}

exports.getCurrentTime = getCurrentTime