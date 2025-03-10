import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useParams, useNavigate } from 'react-router-dom';

const portfolio_data = [
  {
    page: 'home',
    num_images: 1,
  },
  {
    page: 'painting',
    num_images: 14,
  },
  {
    page: 'sculpture',
    num_images: 11,
  },
  {
    page: 'performance',
    num_images: 2,
  },
  {
    page: 'ots',
    num_images: 26,
  }
];

function Content()
{
  let { page, image } = useParams();
  const navigate = useNavigate();

  if (page == null) {
    page = 'home';
  }

  if (image == null){
    image = '001';
  }

  const img_url = `/images/${page}/${image}.jpg`;

  const portfolio_item = portfolio_data.find(item => item.page === page);
  const num_images = portfolio_item.num_images;

  const goToNextImage = () => {
    let next_image_number = Number(image) + 1;
    next_image_number = String(next_image_number).padStart(3, 0);

    if (next_image_number <= num_images) {
      navigate(`/${page}/${next_image_number}`);
    }

    else {
      next_image_number = String(1).padStart(3, 0);
      navigate(`/${page}/${next_image_number}`); 
    }
  };

  const goToPrevImage = () => {
    let prev_image_number = Number(image) - 1;

    if (prev_image_number >= 1) {
      prev_image_number = String(prev_image_number).padStart(3, 0);
      navigate(`/${page}/${prev_image_number}`);
    }
    
    else {
      prev_image_number = String(num_images).padStart(3, 0);
      navigate(`/${page}/${prev_image_number}`); 
    }
  };

  let showButtons = true;

  if (page === "home") {
    showButtons = false;
  }

  return(
    <main>
      <div class="imageGallery">
        {showButtons && 
          <div className="buttons">
            <button className="prevButton" onClick={goToPrevImage}></button>
            <button className="nextButton" onClick={goToNextImage}></button>
          </div>
        }

        <div className="galleryImageContainer">
          <TransitionGroup>
            <CSSTransition key={img_url} classNames="fade" timeout={300}>
              <img alt="" src={img_url} className="galleryImage" />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </main> 
  );
};

export default Content;