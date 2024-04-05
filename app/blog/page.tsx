'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/page-components/hero-section';

import React from 'react';

const BlogPage = () => {
  return (
    <>
      <Header />
      <HeroSection title={'Veja nosso Blog'} />
      <h1>Blog</h1>
    </>
  );
};

export default BlogPage;
