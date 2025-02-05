import { groq, type PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;
export interface SettingsQueryResponse {
  title?: string;
  description?: PortableTextBlock[];
  footer?: PortableTextBlock[];
  ogImage?: (Image & { alt?: string; metadataBase?: string }) | null;
}

export interface Author {
  name: string;
  picture?: (Image & { alt?: string | null }) | null;
}
export interface Post {
  _id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: (Image & { alt?: string }) | null;
  date: string;
  author?: Author | null;
}
export interface VideoPost {
  _id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  thumbnailPicture?: (Image & { alt?: string }) | null;
  date: string;
  publishedAt: string;
  shortStory: string;
  fullStory: string;
  playbackId: string;
  playbackDuration: number;
  playbackResolution: string;
}

const postFields = groq`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

const videoPostFields = groq`
    _id, 
    "status": select(_originalId in path("drafts.**") => "draft", "published"),
    title, 
    slug, 
    thumbnailPicture, 
    publishedAt,
    shortStory,
    fullStory,
    "playbackId": video.asset->playbackId,
    "playbackDuration": video.asset->data.duration,
    "playbackResolution": video.asset->data.max_stored_resolution,
  }`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;
export type HeroQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;
export type MoreStoriesQueryResponse = Post[] | null;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;
export type PostQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

// Get a single post by its slug
export const videoPostQuery = groq`*[_type == "videoPost" && slug.current == $slug][0]{ 
  content,
  ${videoPostFields}
}`;
export type VideoPostQueryResponse =
  | (VideoPost & {
      content?: PortableTextBlock[] | null;
    })
  | null;
