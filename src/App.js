import React, { useRef, useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaUndoAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './app.css';
import Inputs from './component/Inputs';
import Result from './component/Result';
import FileBase from 'react-file-base64';

function App() {
  const [txt, setTxt] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(10);
  const [file, setFile] = useState(null);
  const imageRef = useRef(null);

  const resetHandler = () => {
    setTxt('');
    setFontSize(16);
    setLineHeight(10);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="sidebar">
          <h2>Text Portrait Maker</h2>
          <button
            onClick={() => imageRef.current.click()}
            className="btn primary"
          >
            Choose Image
            <BsImage />
            <div className="filebase">
              <FileBase type="file" onDone={({ base64 }) => setFile(base64)} />
            </div>
          </button>
          <textarea
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            placeholder="Input Background Text"
          ></textarea>
          <Inputs sets={setFontSize} value={fontSize} label="Font Size" />
          <Inputs sets={setLineHeight} value={lineHeight} label="Line Height" />
          <button className="btn" onClick={() => resetHandler()}>
            Reset Setting
            <FaUndoAlt />
          </button>
          <div className="footer">
            <div>
              <a href="https://www.instagram.com/mauanimation/">
                <AiFillInstagram />
              </a>
              <a href="https://twitter.com/mauuxxix">
                <BsTwitter />
              </a>
              <a href="https://twitter.com/mauuxxix">
                <BsGithub />
              </a>
            </div>

            <p>All Rights Reserve &bull; xMau 2022</p>
          </div>
        </div>
        <div className="result">
          {file ? (
            <>
              <Result
                txt={txt}
                file={file}
                font={fontSize}
                lineHeight={lineHeight}
              />
            </>
          ) : (
            <div className="intro">
              <h1>
                Text Portrait Maker by{' '}
                <span
                  style={{
                    color: '#D1512D',
                  }}
                >
                  xMau
                </span>
              </h1>
              <h5>
                Select File
                <div className="filebase">
                  <FileBase
                    type="file"
                    onDone={({ base64 }) => setFile(base64)}
                  />
                </div>
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
