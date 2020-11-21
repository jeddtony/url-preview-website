import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
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
              <div>http://api.linkpreview.net/?key=123456&q=https://www.google.com</div>
             
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
          </QueueAnim>
        
      </div>
    </div>
  );
}

export default Page2;
