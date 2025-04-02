// Menu animation variants for framer-motion
export const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Menu item animation variants
export const menuItemVariants = {
  closed: {
    x: 40,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

// Submenu animation variants (for category hover effects)
export const submenuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Submenu item animation variants
export const submenuItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

// Hamburger menu button animation
export const hamburgerVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 }
};

// Top line of hamburger
export const topLineVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 6 }
};

// Middle line of hamburger
export const middleLineVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 }
};

// Bottom line of hamburger
export const bottomLineVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -6 }
};