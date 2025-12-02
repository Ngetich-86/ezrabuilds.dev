# Portfolio Animations & Features

This document explains the animation system and features implemented in the portfolio.

## 📦 Features Implemented

### 1. **Resume Download**
- Resume PDF is stored in the `public` folder as `Ezra_Bekele.pdf`
- Download button added to the Hero section with a prominent design
- Uses native HTML download attribute for instant download

### 2. **Project Images**
- All project images are now loaded from the `public` folder:
  - `/mint.png` - Mintt project
  - `/viking.png` - Viking International Moving project
  - `/auctioneer.png` - Atlas Auctioneers project
  - `/commercial.png` - Commercial Nextres project
- Images are optimized using Next.js Image component

### 3. **Animation System**

#### Animation Library (`src/libs/animations.ts`)
A comprehensive collection of Framer Motion animation variants:

- **fadeIn** - Simple fade in
- **fadeInUp** - Fade in with slide up
- **fadeInDown** - Fade in with slide down
- **fadeInLeft** - Fade in with slide from left
- **fadeInRight** - Fade in with slide from right
- **scaleIn** - Scale animation
- **staggerContainer** - Stagger children animations
- **typingEffect** - Typing effect configuration
- **hoverScale** - Hover scale effect
- **cardHover** - Card hover with shadow
- **rotate** - Rotate animation
- **bounce** - Bounce animation
- **pulse** - Pulse animation
- **slideInBottom** - Slide in from bottom with delay
- **pageTransition** - Page transition effects

#### Custom Hooks

**`useIntersectionObserver`** (`src/hooks/useIntersectionObserver.ts`)
- Detects when elements enter the viewport
- Options:
  - `threshold` - Percentage of element visibility (0-1)
  - `root` - Root element for intersection
  - `rootMargin` - Margin around root
  - `freezeOnceVisible` - Only trigger once

**`useScrollAnimation`** (`src/hooks/useScrollAnimation.ts`)
- Combines Intersection Observer with Framer Motion
- Automatically triggers animations when elements scroll into view
- Returns `{ ref, controls, isVisible }`

## 🎨 Usage Examples

### Typing Effect (Hero Component)
```tsx
const [displayedText, setDisplayedText] = useState("");
const fullText = "Building Digital Experiences That Matter";

useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
            setDisplayedText(fullText.slice(0, currentIndex));
            currentIndex++;
        } else {
            clearInterval(interval);
        }
    }, 50);
    return () => clearInterval(interval);
}, []);
```

### Scroll-Triggered Animations
```tsx
const { ref, controls } = useScrollAnimation({ threshold: 0.2 });

<motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={fadeInUp}
>
    Content here
</motion.div>
```

### Card Hover Effects
```tsx
<motion.div
    variants={cardHover}
    initial="rest"
    whileHover="hover"
>
    Card content
</motion.div>
```

### Staggered Children
```tsx
<motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
>
    <motion.p variants={fadeInUp}>First paragraph</motion.p>
    <motion.p variants={fadeInUp}>Second paragraph</motion.p>
    <motion.p variants={fadeInUp}>Third paragraph</motion.p>
</motion.div>
```

## 📄 Pages with Animations

### Hero Page
- Typing effect on main heading
- Blinking cursor animation
- Pulsing background blobs
- Button hover effects
- Resume download button

### Projects Page
- Scroll-triggered card animations
- Staggered card appearance
- Image hover overlays with icons
- Tech tag animations
- Card hover lift effect

### About Page
- Scroll-triggered section reveals
- Staggered paragraph animations
- Education card hover effect
- CTA slide animation

## 🎯 Animation Best Practices

1. **Performance**: Animations use GPU-accelerated properties (transform, opacity)
2. **Accessibility**: Animations respect user preferences (prefers-reduced-motion)
3. **Timing**: Consistent timing (0.3-0.6s) for smooth experience
4. **Easing**: Uses easeOut for natural feel
5. **Threshold**: 0.1-0.2 threshold ensures animations trigger at right time

## 🔧 Customization

### Adjust Animation Speed
```tsx
variants={fadeInUp}
transition={{ duration: 0.8 }} // Slower
```

### Change Scroll Threshold
```tsx
useScrollAnimation({ threshold: 0.5 }) // Trigger when 50% visible
```

### Disable Freeze
```tsx
useScrollAnimation({ freezeOnceVisible: false }) // Re-animate on scroll
```

## 📱 Responsive Behavior

All animations are optimized for:
- Mobile devices (reduced motion on low-power devices)
- Tablets (smooth transitions)
- Desktop (full animation effects)

## 🚀 Future Enhancements

Potential additions:
- Page transition animations
- Loading skeleton animations
- Parallax scroll effects
- Mouse-follow cursor effects
- Micro-interactions on form inputs
