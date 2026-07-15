const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function safePublicPath(urlPath) {
  const clean = decodeURIComponent((urlPath || "/").split("?")[0]);
  const relative = clean === "/" ? "index.html" : clean.replace(/^\/+/, "");
  const resolved = path.normalize(path.join(PUBLIC_DIR, relative));
  if (!resolved.startsWith(PUBLIC_DIR)) return null;
  return resolved;
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method Not Allowed\n");
    return;
  }

  const filePath = safePublicPath(req.url);
  if (!filePath) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad Request\n");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext];
  if (!type) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found\n");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === "ENOENT" ? 404 : 500, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end(err.code === "ENOENT" ? "Not Found\n" : "Failed to load\n");
      return;
    }
    res.writeHead(200, { "Content-Type": type });
    res.end(req.method === "HEAD" ? undefined : data);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
