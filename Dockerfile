# 기본 이미지 설정
FROM node:18.15.0

# 작업 디렉터리 설정
WORKDIR /app

# 의존성 파일을 작업 디렉터리로 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드를 작업 디렉터리로 복사
COPY . .

# Nuxt.js 애플리케이션 빌드
RUN npm run build

# 포트 3000 개방
ENV HOST 0.0.0.0
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"]