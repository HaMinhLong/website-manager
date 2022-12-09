// THIRD IMPORT

// PROJECT IMPORT

const Header = () => {
  const menus = [
    {
      id: 1,
      name: 'Home',
      children: [
        {
          id: 11,
          name: 'Part 1',
          children: [
            {
              id: 111,
              name: 'Main Home',
              url: '/'
            },
            {
              id: 112,
              name: 'Diagonal Slideshow',
              url: '/home/part-1/diagonal-slideshow'
            }
          ]
        },
        {
          id: 12,
          name: 'Part 2',
          children: [
            {
              id: 121,
              name: 'Minimal Slider',
              url: '/home/part-2/minimal-slider'
            },
            {
              id: 122,
              name: 'Revolution slider',
              url: '/home/part-2/revolution-slider  '
            }
          ]
        },
        {
          id: 13,
          name: 'Part 3',
          children: [
            {
              id: 131,
              name: 'Split creative banner',
              url: '/home/part-3/split-creative-banner'
            },
            {
              id: 132,
              name: 'Creative gallery',
              url: '/home/part-3/creative-gallery'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Pages',
      children: [
        {
          id: 21,
          name: 'About',
          children: [
            {
              id: 211,
              name: 'About me',
              url: '/pages/about/about-me'
            },
            {
              id: 212,
              name: 'About us',
              url: '/pages/about/about-us'
            }
          ]
        },
        {
          id: 22,
          name: 'Services',
          children: [
            {
              id: 221,
              name: 'Services Details',
              url: '/pages/services/services-details'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Projects',
      children: [
        { id: 31, name: 'Work List', url: '/projects/work-list' },
        { id: 32, name: 'Work Grid  ', url: '/projects/work-grid' }
      ]
    },
    {
      id: 4,
      name: 'Project Details',
      children: [
        {
          id: 41,
          name: 'Parallax',
          url: '/project-details/parallax'
        },
        {
          id: 42,
          name: 'Parallax With Text',
          url: '/project-details/parallax-with-text'
        }
      ]
    },
    {
      id: 5,
      name: 'Shop',
      children: [
        {
          id: 51,
          name: 'Project Details',
          url: '/shop/project-details'
        }
      ]
    },
    {
      id: 6,
      name: 'Blog',
      children: [
        {
          id: 61,
          name: 'Blog List',
          url: '/blog/blog-list'
        },
        {
          id: 62,
          name: 'Blog Details',
          url: '/blog/blog-details'
        }
      ]
    }
  ];
  return <div>Header</div>;
};

export default Header;
