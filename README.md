# rtsp-to-hls-sample
With Node.js, FFmpeg

### 1. Install
```
git clone https://github.com/kebi3477/rtsp-to-hls-sample.git
npm install
```
### 2. Setting
Edit to server.js
```
8      const port = {your-port}
18     '-i', `{your-rtsp-url}`,
```

### 3. Start
```
npm run start
```

### 4. Start Stream
Open the URL in your browser
```
localhost:{your-port}/start-stream
localhost:{your-port}
```
