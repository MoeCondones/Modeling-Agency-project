// Image hover effects
export const imageHoverVariants = {
  initial: {
    scale: 1,
    filter: 'grayscale(100%)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  hover: {
    scale: 1.03,
    filter: 'grayscale(0%)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};

// Text reveal on image hover
export const imageTextVariants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1
    }
  }
};

// Overlay hover effect
export const overlayVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  hover: {
    opacity: 0.7,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Button hover effect
export const buttonHoverVariants = {
  initial: {
    scale: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#000',
    transition: { 
      duration: 0.3, 
      ease: 'easeInOut' 
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: '#fff',
    transition: { 
      duration: 0.3, 
      ease: 'easeInOut' 
    }
  }
};

// Link hover effect with underline
export const linkHoverVariants = {
  initial: {
    backgroundSize: '0% 2px',
    backgroundPosition: '0 100%',
    backgroundRepeat: 'no-repeat',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  hover: {
    backgroundSize: '100% 2px',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Category hover effect
export const categoryHoverVariants = {
  initial: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}; 