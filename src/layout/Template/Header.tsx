// THIRD IMPORT
import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useNavigate } from 'react-router-dom';

// PROJECT IMPORT

// IMAGES IMPROT
import LogoPage from 'static/Template/images/Header/logo-page.png';

const menus: any = [
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

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  const [scrollDown, setScrollDown] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) setScrollDown(true);
    else setScrollDown(false);
  });

  return (
    <header className={scrollDown || matchDownMD ? 'active' : ''}>
      <div className="logo__page" onClick={() => navigate('/')}>
        <img src={LogoPage} alt="logo page" />
      </div>
      <div className="navigation">
        <ul>
          {menus?.map((item) => (
            <li key={item?.id}>
              {item?.url ? <a href={item?.url}>{item?.name}</a> : item?.name}
              {item?.children && (
                <div className="navigation--child">
                  {item?.children?.map((child) => (
                    <React.Fragment key={child?.id}>
                      {child?.url ? (
                        <a href={child?.url}>{child?.name}</a>
                      ) : (
                        <div>
                          {child?.name}
                          {child?.children && (
                            <div className="navigation--grandchildren">
                              {child?.children?.map((grandchild) => (
                                <React.Fragment key={grandchild?.id}>
                                  {grandchild?.url ? <a href={grandchild?.url}>{grandchild?.name}</a> : <p>{grandchild?.name}</p>}
                                </React.Fragment>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="social">
            <InsertLinkIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
