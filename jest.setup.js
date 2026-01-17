import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key) => key,
  useLocale: () => 'en',
}));

// Mock framer-motion with all needed elements
jest.mock('framer-motion', () => {
  const createMotionComponent =
    (element) =>
    // eslint-disable-next-line react/display-name
    ({ children, initial, animate, exit, transition, ...props }) => {
      const Element = element;
      // Filter out framer-motion specific props
      const {
        whileHover,
        whileTap,
        whileFocus,
        whileInView,
        variants,
        layout,
        layoutId,
        ...validProps
      } = props;
      return <Element {...validProps}>{children}</Element>;
    };

  return {
    motion: {
      div: createMotionComponent('div'),
      span: createMotionComponent('span'),
      p: createMotionComponent('p'),
      a: createMotionComponent('a'),
      h1: createMotionComponent('h1'),
      h2: createMotionComponent('h2'),
      h3: createMotionComponent('h3'),
      header: createMotionComponent('header'),
      footer: createMotionComponent('footer'),
      section: createMotionComponent('section'),
      nav: createMotionComponent('nav'),
      button: createMotionComponent('button'),
      img: createMotionComponent('img'),
      ul: createMotionComponent('ul'),
      li: createMotionComponent('li'),
    },
    AnimatePresence: ({ children }) => children,
    useInView: () => true,
  };
});

// Only set up browser mocks in jsdom environment
if (typeof window !== 'undefined') {
  // Mock IntersectionObserver
  class MockIntersectionObserver {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
