# --- Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

# Build-Arg für Geoapify Key
ARG NEXT_PUBLIC_GEOAPIFY_API_KEY
ENV NEXT_PUBLIC_GEOAPIFY_API_KEY=$NEXT_PUBLIC_GEOAPIFY_API_KEY

RUN pnpm run build

# --- Production Stage ---
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["pnpm", "start"]