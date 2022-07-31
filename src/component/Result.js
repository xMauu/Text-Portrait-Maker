import React from 'react';
import { MdDownload } from 'react-icons/md';
import html2canvas from 'html2canvas';

function Result({ txt, file, font, lineHeight }) {
  return (
    <>
      <div
        id="p"
        className="resultContainer"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
        }}
      >
        <p
          style={{
            fontSize: `${font}px`,
            backgroundImage: `url(${file})`,
            lineHeight: `${lineHeight}px`,
            position: 'relative',
            color: 'white',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            letterSpacing: '-0.05em',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {Array(200)
            .fill(0)
            .map(() =>
              txt
                ? `${txt}`
                : "Measurement is the first step that leads to control and eventually to improvement. If you can’t measure something, you can’t understand it. If you can’t understand it, you can’t control it. If you can’t control it, you can’t improve it. If you can't describe what you are doing as a process, you don't know what you're doing."
            )}
        </p>
      </div>
      <div
        className="download"
        onClick={() => {
          const element = document.getElementById('p');
          html2canvas(element, {
            allowTaint: true,
            useCORS: true,
          }).then((canvas) => {
            const base64image = canvas.toDataURL('image/png');
            var anchor = document.createElement('a');
            anchor.setAttribute('href', base64image);
            anchor.setAttribute('download', 'My-Text-Portrait');
            anchor.click();
            anchor.remove();
          });
        }}
      >
        <MdDownload />
      </div>
    </>
  );
}

export default Result;
