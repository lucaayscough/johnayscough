import {useParams} from 'react-router-dom';

const portfolioData = [
  {
    page: 'painting',
    num_images: 12,
  },
  {
    page: 'scupture',
    num_images: 9,
  },
  {
    page: 'ots',
    id: 12,
  },
];

function Content()
{
  let { page, image } = useParams();

  if (image == null){
    image = '001';
  }

  const img_url = `/images/${page}/${image}.jpg`;

  return(
    <main>
      <center><h2>{page}</h2></center>

      <div id="imageGallery">
        <img src={img_url} id="galleryImage" />
          
        <div id="buttons" className="buttons">
          <button id="prevButton">Previous</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    </main> 
  );
};

export default Content;