import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import BlockContent from "@sanity/block-content-to-react";
import Footer from "./Footer";
import { FaShareNodes } from "react-icons/fa6";

export default function SingleBlogPage() {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    client
      .fetch(
        `
        *[slug.current == "${slug}"] {
          title,
          body,
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        if (data && data.length > 0) {
          setSinglePost(data[0]);
        } else {
          setSinglePost(null);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!singlePost) {
    return <h1>Post not found</h1>;
  }

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: `${window.location.origin}/blog/${slug}`,
      })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      alert('Sharing is not supported in your browser. Copy the link manually: ' + `${window.location.origin}/blog/${slug}`);
    }
  };

  return (
    <div className="singlePost">
      <section>
        {singlePost.mainImage && singlePost.mainImage.asset && (
          <img src={singlePost.mainImage.asset.url} alt={singlePost.title} />
        )}
        <h4>{singlePost.title}</h4>
        <h3>Onward Woruka</h3>
        <div className="blog--body">
          <BlockContent
            blocks={singlePost.body}
            projectId="8or71iga"
            dataset="production"
          />
        </div>
        <div className="blog-link">
          <Link className="blog--links" to="/blog">
            Read more article
          </Link>
        </div>
          <p onClick={() => handleShare(singlePost)} className="share--btn"><FaShareNodes/> Share</p>
      </section>
      <Footer />
    </div>
  );
}
