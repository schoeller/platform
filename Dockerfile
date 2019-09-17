FROM node:10

WORKDIR /opt
ADD package.json /opt
ADD package-lock.json /opt
RUN npm ci
COPY ./ /opt

ENV NODE_ENV production

ARG BD_APP_URL
ARG BD_APP_URL
ARG BD_OIDC_IP
ARG BD_OIDC_CLIENT_ID
ARG BD_API_BASE_URL
ARG BD_CDN_BASE_URL
ARG BD_PLATFORM_BACK_BASE_URL
ARG BD_VIEWER_BASE_URL
ARG BD_CONNECT_URL
ARG BD_MAPBOX_TOKEN

ENV BD_APP_URL=$BD_APP_URL
ENV BD_APP_URL=$BD_APP_URL
ENV BD_OIDC_IP=$BD_OIDC_IP
ENV BD_OIDC_CLIENT_ID=$BD_OIDC_CLIENT_ID
ENV BD_API_BASE_URL=$BD_API_BASE_URL
ENV BD_CDN_BASE_URL=$BD_CDN_BASE_URL
ENV BD_PLATFORM_BACK_BASE_URL=$BD_PLATFORM_BACK_BASE_URL
ENV BD_VIEWER_BASE_URL=$BD_VIEWER_BASE_URL
ENV BD_CONNECT_URL=$BD_CONNECT_URL
ENV BD_MAPBOX_TOKEN=$BD_MAPBOX_TOKEN

RUN npm run build


FROM nginx:stable
COPY --from=0 /opt/dist /usr/share/nginx/html
