import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

async function fetchData() {
  const response = await fetch("/data.json"); 
  const data = await response.json();
  return data;
}

const CatLayout = ({ layout }) => {
  const [content, setContent] = useState({}); 

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      if (layout === 'layout1') {
        setContent(data[0]); 
      } else {
        setContent(data[1]); 
      }
    };

    getData();
  }, [layout]);

  return (
    <div className={`adventure ${layout}`}>
      <div className="cat-image-wrapper">
        <img className="cat-image" src={content.image} alt={content.headline} />
      </div>
      <div className="cat-content">
        <h1>{content.headline}</h1>
        <h2>{content.tagline}</h2>
        <p>{content.text}</p>
      </div>
    </div>
  );
};

CatLayout.propTypes = {
  layout: PropTypes.string.isRequired, 
};

export default CatLayout;
