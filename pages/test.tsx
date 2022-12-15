import React from 'react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const test = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const cords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      cords.current.startX = e.clientX;
      cords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      cords.current.lastX = box.offsetLeft;
      cords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - cords.current.startX + cords.current.lastX;
      const nextY = e.clientY - cords.current.startY + cords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanUp = () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.addEventListener('mouseleave', onMouseUp);
    };
    return cleanUp;
  }, []);

  return (
    <div>
      <div ref={containerRef} className='w-[70vh] h-[100vh] '>
        <div ref={boxRef} className=' bg-slate-400 absolute'>
          <Image
            className='pointer-events-none select-none'
            src='/../public/images/Now/img1.jpg'
            alt='/'
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default test;
