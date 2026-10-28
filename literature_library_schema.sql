-- Cloud Markdown library: upload and update notes via the website.
-- Stored as plain text in Cloudflare D1 DB binding; published content is public-read.
-- Same exact relative path overwrites the old version; no R2 / GitHub push needed.
CREATE TABLE IF NOT EXISTS literature_md_library (
  path TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  meta_json TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_literature_md_updated ON literature_md_library(updated_at DESC);
