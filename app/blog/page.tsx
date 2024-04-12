"use client";

import { Footer } from "@/components/globals/Footer";
import { Header } from "@/components/globals/Header";
import { HeroSection } from "@/components/page-components/hero-section";

import React from "react";

const BlogPage = () => {
  return (
    <>
      <Header />
      <HeroSection title={"Veja nosso Blog"} />
      <h1>Blog</h1>
      <Footer />
    </>
  );
};

export default BlogPage;
