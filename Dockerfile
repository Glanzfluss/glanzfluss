# --- Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Build-Argument für GitHub Secret
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

COPY . .
RUN pnpm run build

# --- Production Stage ---
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

ENV RESEND_API_KEY=$RESEND_API_KEY

CMD ["pnpm", "start"]