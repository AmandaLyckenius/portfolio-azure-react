    FROM node:18-alpine AS build
    WORKDIR /app
    
    COPY package*.json ./
   
    RUN npm ci --no-audit --no-fund
    
  
    COPY . .
    
    RUN npm run build
    
    FROM nginx:alpine
    
    ARG BUILD_DIR=build
    
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    COPY --from=build /app/${BUILD_DIR} /usr/share/nginx/html
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    