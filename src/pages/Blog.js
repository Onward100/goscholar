import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";
import Footer from "./Footer";
import { FaShareNodes } from "react-icons/fa6";
import BlockContent from "@sanity/block-content-to-react";
import blogImage from "../blog.svg";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "post"]{
          _id, // Ensure _id is included here
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }
        `
      )
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  const handleShare = (post) => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          url: `${window.location.origin}/blog/${post.slug.current}`,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      alert(
        "Sharing is not supported in your browser. Copy the link manually: " +
          `${window.location.origin}/blog/${post.slug.current}`
      );
    }
  };

  return (
    <div>
      <div className="blog--page all--pages">
        <img src={blogImage} alt="blog--image" className="blog--image" />
        <div className="blog--contents">
          {posts.map((post) => (
            <article key={post._id}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4>{post.title}</h4>
              <div className="blog--body">
                <BlockContent
                  blocks={post.body}
                  projectId="8or71iga"
                  dataset="production"
                />
              </div>
              <div className="blog-link">
                <Link className="blog--links" to={`/blog/${post.slug.current}`}>
                  Read more
                </Link>
              </div>
              <p onClick={() => handleShare(post)} className="share--btn">
                <FaShareNodes /> Share
              </p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
