// put your custom js in the file

//  Store the data in the array

const array = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1664575196851-5318f32c3f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    alt: 'image',
    text: 'Coca Cola is a carbonated soft drink produced by The Coca-Cola Company. Originally intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton and was bought out by businessman Asa Griggs Candler, whose marketing tactics led Coca-Cola to its dominance of the world soft-drink market throughout the 20th century.',
    client: 'Build Ltd is a leading construction company in the UK with over 20 years of experience in the industry. We have a team of highly skilled and experienced professionals who are dedicated to providing the best services to our clients. We have a team of highly skilled and experienced professionals who are dedicated to providing the best services to our clients.',
    social_media: 'Social Media',
    schedule: '12 Jan 2020',
    campaign: 'This is a campaign',
    avatar: [
      {
        src: 'https://www.w3schools.com/howto/img_avatar.png',
        alt: 'alt text',
      },
    ],

    systemInfo: [
      {
        name: 'System Name',
        value: 'System Value',
        status: 'success',
      },
    ],

    clientName: [
      {
        name: 'Client Name',
      },
      {
        name: 'Client Name 2',
      }
    ],

    updateSchedule: '12 Jan 2020 to 22 Jan 2020',
    comments: 'This is a comment',
    replied: 'This is a reply',
    secondReplied: 'This is a second reply',

    reviseDefault: 'This is a revise default',
    previousDefault: 'This is a previous default',
    twitterDefault: 'This is a twitter default',
    facebookDefault: 'This is a facebook default',
  },

  {
    imageSrc: 'https://images.unsplash.com/photo-1669868704900-b13e09032908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    alt: 'image',
    text: 'Riham is a tech company that provides a wide range of services to its clients. We have a team of highly skilled and experienced professionals who are dedicated to providing the best services to our clients. We have a team of highly skilled and experienced professionals who are dedicated to providing the best services to our clients.',
    client: 'Batesa Entreprise Ltd',
    social_media: 'Social Media',
    schedule: '12 Jan 2020',
    campaign: 'This is a campaign',
    avatar: [
      {
        src: 'image.jpg',
        alt: 'alt text',
      },
    ],

    systemInfo: [
      {
        name: 'System Name',
        value: 'System Value',
        status: 'success',
      },
    ],

    clientName: [
      {
        name: 'Client Name',
      },
      {
        name: 'Client Name 2',
      }
    ],

    updateSchedule: '12 Jan 2020 to 22 Jan 2020',
    comments: 'This is a comment',
    replied: 'This is a reply',
    secondReplied: 'This is a second reply',

    reviseDefault: 'This is a revise default',
    previousDefault: 'This is a previous default',
    twitterDefault: 'This is a twitter default',
    facebookDefault: 'This is a facebook default',
  },

  {
    imageSrc: 'https://images.unsplash.com/photo-1669670875050-3ed51f4ac12e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    alt: 'image',
    text: 'Batesa Entreprise Ltd is a company that is into the production of food and beverages. They are into the production of soft drinks, energy drinks, and other beverages. They are also into the production of food items such as biscuits, snacks, and other food items. They are also into the production of food and beverages. They are into the production of soft drinks, energy drinks, and other beverages. They are also into the production of food items such as biscuits, snacks, and other food items.',
    client: 'Batesa Entreprise Ltd',
    social_media: 'Social Media',
    schedule: '12 Jan 2020',
    campaign: 'This is a campaign',
    avatar: [
      {
        src: 'image.jpg',
        alt: 'alt text',
      },
    ],

    systemInfo: [
      {
        name: 'System Name',
        value: 'System Value',
        status: 'success',
      },
    ],

    clientName: [
      {
        name: 'Client Name',
      },
      {
        name: 'Client Name 2',
      }
    ],

    updateSchedule: '12 Jan 2020 to 22 Jan 2020',
    comments: 'This is a comment',
    replied: 'This is a reply',
    secondReplied: 'This is a second reply',

    reviseDefault: 'This is a revise default',
    previousDefault: 'This is a previous default',
    twitterDefault: 'This is a twitter default',
    facebookDefault: 'This is a facebook default',
  },
];

const display_array = document.querySelector('.display-array');

//  Loop through the array and display the data

const displayArray = (array) => {
  const li = document.createElement('div');
  li.classList.add('row');
  array.forEach((item) => {
    li.innerHTML += `
  <div class="col display_array cursor-pointer" id="check">
  <div class="card shadow-sm">
    <img src="${item.imageSrc}" alt="${item.alt}" class="card-img-top">
    <div class="card-body">
      <div class="card-text">${item.text}</div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</div>`;
  });
  display_array.appendChild(li);

}

displayArray(array);


//Note: selectors should use jquery style selecting only

