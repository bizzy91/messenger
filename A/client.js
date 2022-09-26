const ws = new WebSocket('ws://localhost:3000')

ws.on('open', () => {
    ws.send('something')
})

ws.on('message', data => {
    console.log(data)
})