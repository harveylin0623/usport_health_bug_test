# 專案名稱
```
Usport - 健康數據 APP ( Web View )

- U-Walk 步行任務
```

## node js版本
```
18.16.0
```

## init
```sh
# 開發
cp .env.example .env.development

# 部署 or 打包
cp .env.example .env.production
```

## deploy
```sh
npm install

# build ....
npm run build

# nginx 配置
location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html;
}
```

## local start
```sh
npm install

npm run dev
```