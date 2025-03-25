# 开发流程

## 安装插件

`pnpm i @nestjs/config joi`
`pnpm i cross-env -D`

## 配置文件

`.env .env.development .env.production`

package.json

```json
"scripts": {
    "start:dev": "cross-env NODE_ENV=development nest start --watch",
    "start:prod": "cross-env NODE_ENV=production nest start --watch"
  },
```

## 创建common文件夹

`nest g mo common/configModule --no-spec`
`nest g mo common/logs --no-spec`

## 安装模块

`pnpm i nest-winston winston winston-daily-rotate-file`
配置并完成日志模块集成

## 全局模块

`nest g f common/filters/all-exception --flat --no-spec`
