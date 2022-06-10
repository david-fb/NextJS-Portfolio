import styles from './index.module.scss';
export default function ResumeButtonDownload() {
  const downloadFile = () => {
    let element = document.createElement('a');
    element.setAttribute('href', '/David_Basto-resume.pdf');
    element.setAttribute('target', '_blank');
    //element.setAttribute('download', '');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <button onClick={downloadFile} className={`primary-button ${styles['Button-download']}`}>
      Get Resume
    </button>
  );
}
