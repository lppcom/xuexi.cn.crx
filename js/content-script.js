console.log('content script running...')

const script = document.createElement('script')
script.src = chrome.extension.getURL('js/inject-script.js')
document.body.appendChild(script)