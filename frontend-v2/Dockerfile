FROM node:18-bullseye AS base
FROM base AS builder

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app
ARG BUILD_ENV=development

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY src ./src
COPY public ./public
COPY next.config.ts tsconfig.json postcss.config.mjs ./


# Setup environment variables based on the build environment
COPY config/.env.${BUILD_ENV} ./.env.local

RUN pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env.local ./.env.local

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 7005

ENV PORT 7005
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
