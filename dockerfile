# --- deps ---
FROM node:22-alpine AS deps
WORKDIR /app
COPY app/package.json ./
# No deps yet — ensure node_modules exists so COPY in runner doesn't fail
RUN npm install --omit=dev && mkdir -p node_modules

# --- runtime ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY app/package.json ./
COPY app/index.js ./
COPY app/public ./public

USER node
EXPOSE 3000
CMD ["node", "index.js"]
