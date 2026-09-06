import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures that whenever the route pathname changes,
 * both the window and the main scroll container immediately reset scroll position to the top (scrollTop = 0).
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset window scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });

    // 2. Reset primary main content container scroll
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
      mainContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }
  }, [pathname]);

  return null;
};
