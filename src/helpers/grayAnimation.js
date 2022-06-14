const grayAnimation = () => {
  let timeout;

  const handleMouseEnter = (element) => {
    clearTimeout(timeout);
    element.classList.remove('gray');
    element.classList.remove('grayIn');
    element.classList.add('grayOut');
  };
  const handleMouseLeave = (element) => {
    element.classList.add('grayIn');
    timeout = setTimeout(() => {
      element.classList.add('gray');
      element.classList.remove('grayOut');
      element.classList.remove('grayIn');
    }, 400);
  };

  return { handleMouseEnter, handleMouseLeave };
};

export default grayAnimation;
