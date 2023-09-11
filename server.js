// RTSP TO HLS
const express = require('express');
const http = require('http');
const { spawn } = require('child_process');

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/start-stream', (req, res) => {
    const ffmpeg = spawn('C:/web/laby_streaming_transfer/ffmpeg.exe', [
        '-i', 'rtsp://192.168.0.153/video1',
        '-c:v', 'copy',
        '-c:a', 'aac',
        '-strict', 'experimental',
        '-f', 'hls',
        '-hls_time', '4',
        '-hls_list_size', '6',
        '-hls_wrap', '10',
        'public/live/stream.m3u8'
    ]);

    ffmpeg.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ffmpeg.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ffmpeg.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    res.send('Stream started');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
