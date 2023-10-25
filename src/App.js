import {useState} from 'react';
import { createPortal } from 'react-dom';
import Modal from "./components/Modal";

function App() {
  const [isOpenCentered, setIsOpenCentered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState('md');

  const handleChangeSize = (size) => () => {
    setSize(size);
    setIsOpen(!isOpen);
  };

  const handleCentered = () => {
    setIsOpenCentered(!isOpenCentered);
  };

  const Header = () => <div>This is a Custom Header</div>;
  const Footer = () => <div className="footer">This is a Custom Footer</div>;
  const sampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  return (
    <>
      <h1>React Modal</h1>
      <div className="test-centered">
        <button className="btn btn-primary" onClick={handleCentered}>Open centered modal</button>
        {isOpenCentered && createPortal(
          <Modal
            className="custom-modal"
            title="Center modal vertically"
            isOpen={isOpenCentered}
            onClose={() => setIsOpenCentered(false)}
            centered
            header={Header()}
            footer={Footer()}
          >
            <p>{sampleText}</p>
          </Modal>,
          document.body
        )}
      </div>

      <div className="test-size">
        <button className="btn btn-outline-primary" onClick={handleChangeSize('xs')}>xs</button>
        <button className="btn btn-outline-primary" onClick={handleChangeSize('sm')}>sm</button>
        <button className="btn btn-outline-primary" onClick={handleChangeSize('md')}>md</button>
        <button className="btn btn-outline-primary" onClick={handleChangeSize('lg')}>lg</button>
        <button className="btn btn-outline-primary" onClick={handleChangeSize('xl')}>xl</button>
        {isOpen && createPortal(
          <Modal
            title="Change Size"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size={size}
          >
            <p>{sampleText}</p>
          </Modal>,
          document.body
        )}
      </div>
    </>
  );
}

export default App;
