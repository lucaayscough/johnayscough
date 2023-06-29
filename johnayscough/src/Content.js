function Content({page})
{
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

  return(
    <content>
      <center><h2>{page}</h2></center>

      <div id="imageGallery">
        <img src="images/painting/001.jpg" id="galleryImage" />
          
        <div id="buttons" class="buttons">
          <button id="prevButton">Previous</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    </content> 
  );
};

export default Content;