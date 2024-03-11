import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [filePath, setFilePath] = useState("ready")
  useEffect(() => {
    // 监听来自主进程的消息
    window.API.receive('open-file', (event, filePath) => {
      console.info(filePath); // 打印接收到的消息
      setFilePath(filePath)
    });

    // 在组件卸载时移除监听器
    return () => {
      // ipcRenderer.removeAllListeners('open-file');
    };
  }, []); // 仅在组件加载时执行

  return (
    <div className="App">
      <h1>你好！{ filePath }</h1>
    </div>
  );
}

export default App;
