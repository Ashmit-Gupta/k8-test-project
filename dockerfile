# --- build React (Vite) ---
FROM node:22-alpine AS build
WORKDIR /app

COPY app/package.json app/package-lock.json* ./
RUN npm install

COPY app/ ./
RUN npm run build

# --- serve static SPA ---
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
