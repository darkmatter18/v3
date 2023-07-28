"use client"

import React from 'react';
import anime from 'animejs';
import clsx from 'clsx';
import IconLoader from '@/app/lib/icons/Loader'

interface LoadingProps {
  finishComplete: () => void
}

export default function Loading({finishComplete}: LoadingProps) {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishComplete(),
    });

    loader
        .add({
          targets: '#logo path',
          delay: 300,
          duration: 1500,
          easing: 'easeInOutQuart',
          strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
          targets: '#logo #A',
          duration: 700,
          easing: 'easeInOutQuart',
          opacity: 1,
        })
        .add({
          targets: '#logo #B',
          duration: 700,
          easing: 'easeInOutQuart',
          opacity: 1,
        })
        .add({
          targets: '#title_container',
          duration: 1000,
          easing: 'easeOutCubic',
          scale: 0,
        })
        .add({
          targets: '#title_container',
          duration: 1000,
          easing: 'easeInOutExpo',
          width: 0,
          height: 0,
        })
        .add({
          targets: '#logo',
          duration: 500,
          easing: 'easeOutQuart',
          opacity: 0,
          scale: 5,

        });
  };

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={
        clsx(isMounted ? 'opacity-100' : 'opacity-0',
            'min-h-screen', 'flex', 'justify-center', 'items-center')}>
        <div className={clsx('inline-flex', 'items-center',
            'space-x-4')}>
          <div className={'flex'}>
            <IconLoader isOnLoader={true}/>
          </div>
          <div id="title_container" className={'flex flex-col'}>
            <div id="subtitle" className={'text-neon-teal'}>
              Software Engineer, DevOps
            </div>
            <div
              className={'text-neon-pink ' +
              'text-xl sm:text-4xl tracking-tighter'}
            >
              Arkadip Bhattacharya
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

