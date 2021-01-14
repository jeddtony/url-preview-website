import React, {useEffect, useState, useRef} from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button, Input } from 'antd';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Page2() {
  const [inputData, setInputData] = useState("");
  const [currentText, setCurrentText] = useState("Copy");
  const inputEl = useRef(null);
  const parsedData = useFetchDataComponent({input: inputData});

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }
  
const handleCopyText = () => {
  setCurrentText("Copied");
  setTimeout(() => {
    setCurrentText("Copy");
  }, 3000);
}

  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        
        <h2> <span>Basic Example</span></h2>
        <div className="title-line-wrapper ">
          <div className="title-line" />
        </div>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <h3 key="p" className="page-content" style={{textAlign: 'left', marginBottom: "0px"}}>
             API Request(Get):
            </h3>
            <div key="code1" className="home-code">
              <div>
                {/* $ <span>git clone</span>  */}
              </div>
              <div>http://api.url-previewer.com/?q=https://www.google.com</div>
             
            </div>

            <h3 key="p" className="page-content" style={{textAlign: 'left', marginBottom: "0px"}}>
             API Response:
            </h3>
            <div key="code2" className="home-code">
              <div>
                {/* $ <span>git clone</span>  */}
              </div>
              <div>{'{'} </div>
<div>"title":"Google", </div>
<div>"description":"Search webpages, images, videos and more.",</div>
<div>"image":"https:\/\/www.google.com\/images\/logo.png",</div>
<div>"url":"https:\/\/www.google.com\/"</div>
<div>{'}'}</div>
              
            </div>
            {/* <p key="p2" className="page-content">
              需要帮助？请先阅读
              <a> 开发文档 </a>
              和
              <a> 常见问题 </a>， 如果未能解决，可以到 GitHub 上
              <a href="https://github.com/ant-design/ant-design-pro/issues"> 进行提问 </a>。
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <a href="http://github.com/ant-design/ant-design-pro" target="_blank" rel="noopener noreferrer">
                <Button type="primary">下载 Pro</Button>
              </a>
            </div> */}

              <h2> <span>Try It</span></h2>

              <div key="code1" className="home-code">
              <div>
                {/* $ <span>git clone</span>  */}
              </div>
              <div>
              https://youtube.com
              <CopyToClipboard text={"https://youtube.com"} 
              onCopy={() => handleCopyText()}>
              <span  size="small" style={{float: "right", cursor: "pointer", color: "#0b3abe"}} > {currentText}</span>
              </CopyToClipboard>
              </div>
              
              
            </div>
            
            <div key="code2" className="home-code">
              <div>
                Paste url here
              </div>
              <div>
              <Input style={{minHeight: "50px", fontSize: "20px"}} onChange={(e) => handleInputChange(e)}/>
              </div>
            </div>
            

            <div key="code2" className="home-code">
              <div>
                {/* $ <span>git clone</span>  */}
              </div>
              <div style={{minHeight: "100px"}}> 
              {`{`}
              {Object.keys(parsedData).map(dat => (
                <div>
                {`"${dat}"`} : {`"${parsedData[dat]}"`}
                </div>
              
              ))}

            {`}`}
              </div>
            </div>

          </QueueAnim>

          
        
      </div>
    </div>
  );
}

export default Page2;


function useFetchDataComponent ({input}) {

  let containsFullStop = input.indexOf(".");
  const [dataFetched, setDataFetched] = useState({});

  // if(!(containsFullStop > 0 && (input.length - containsFullStop )> 3)){
  //   return (
  //     <>
  //     </>
  //   )
  // }

  useEffect(() => {
    // effect
   

    const fetchData = async() => {
      let results = await axios.get(`http://api.url-previewer.com?q=${input}`);
      // let results = await axios.get(`http://localhost:4001?q=${input}`);
      let status = results.status;

      if(status == 200) {
        let data = results.data;
        console.log(data);
        setDataFetched(data);
      }
    }

    if(containsFullStop > 0 && (input.length - containsFullStop )> 3){
      fetchData();
    }
     return () => [dataFetched]
  }, [input])


  return dataFetched;
}