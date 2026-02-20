'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Portfolio.module.css';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    name: 'Blueroof India',
    url: 'https://www.blueroofindia.com',
    description:
      'A comprehensive real estate platform featuring property listings, virtual tours, and seamless booking experiences designed for modern homebuyers.',
    image: '/image.png',
    tags: ['Real Estate', 'Web Design', 'UI/UX']
  },
  {
    id: 2,
    name: 'Adani Realty',
    url: 'https://www.adanirealtyofficial.com',
    description:
      'Premium real estate showcase with elegant design, interactive property exploration, and sophisticated user experience.',
    image: '/adani.png',
    tags: ['Real Estate', 'Premium Design']
  },
  {
    id: 3,
    name: 'Zon Secure Services',
    url: 'https://zonsecureservices.com',
    description:
      'Professional security services platform with modern UI, comprehensive service details, and streamlined client communication.',
    image: '/ZSSLOGO.png',
    tags: ['Security', 'Corporate']
  },
  {
    id: 4,
    name: 'Samdarshi Foundation',
    url: 'https://samdarshi-foundation.vercel.app',
    description:
      'Non-profit foundation website highlighting social initiatives, community impact, and donation management systems.',
    image: '/logo.jpg',
    tags: ['Non-Profit', 'Social Impact']
  },
  {
    id: 5,
    name: 'Wander World Holidays',
    url: 'https://wander-world-holiday-vw3h.vercel.app',
    description:
      'Travel booking platform with stunning visuals, seamless user experience, and integrated booking management.',
    image: '/LOGO!.png',
    tags: ['Travel', 'E-commerce']
  }
];

export default function Portfolio() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Scroll animation
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Mouse move parallax effect
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener('mousemove', () => {});
          card.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Portfolio</h1>
          <p className={styles.subtitle}>
            Explore our recent projects and see how we've helped businesses
            transform their digital presence with stunning, functional websites.
          </p>
        </div>

        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className={styles.imageSection}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.projectImage}
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.jpg';
                  }}
                />
                <div className={styles.imageOverlay}>View Project →</div>
              </div>

              <div className={styles.contentSection}>
                <div className={styles.projectNumber}>
                  PROJECT {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className={styles.projectName}>{item.name}</h2>
                <div className={styles.projectUrl}>
                  {item.url.replace('https://', '').replace('www.', '')}
                </div>
                <p className={styles.projectDescription}>{item.description}</p>
                <div className={styles.projectTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.viewButton}>Visit Website →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
