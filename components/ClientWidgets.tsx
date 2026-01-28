'use client';  // <-- THIS MAKES IT A CLIENT COMPONENT

import dynamic from 'next/dynamic';

// Dynamically import client-only components
export const SocialShare = dynamic(() => import('./SocialShare'), { ssr: false });
export const Latest3 = dynamic(() => import('./home/Latest3'), { ssr: false });
