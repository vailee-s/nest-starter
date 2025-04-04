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

## 接入 swc ，接入jest

`pnpm i @swc/cli @swc/core @swc/jest -D`

`nest start -b swc`

## 配置 redis

`pnpm i @nestjs-modules/ioredis ioredis`

## 配置邮件服务

` pnpm i @nestjs-modules/mailer nodemailer -D`

### 配置邮件服务的模版引擎

`pnpm i handlebars -D`

- 创建模版 common/mailer/templates/welcome.hbs
- `nest g mo common/mail --no-spec --flat`
