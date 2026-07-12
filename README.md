# AI Agent 学习项目

这是一个最小的 Node.js AI Agent 学习项目，用于练习命令行交互和 Agent 的基本工作流程。

当前版本使用模拟 Agent，不安装第三方依赖，也不会调用真实 AI 模型。

## 目录结构

```text
.
├── src/
│   └── index.js     # 命令行入口与模拟 Agent
├── .env.example     # 未来接入模型时的环境变量示例
├── .gitignore
├── package.json
└── README.md
```

## 运行要求

- Node.js 18 或更高版本

## 运行方法

本项目暂时没有第三方依赖，无需执行 `npm install`。

使用 npm 脚本启动：

```bash
npm start
```

也可以直接运行：

```bash
node src/index.js
```

程序会等待你输入一段文字，然后由模拟 Agent 返回结果。

示例：

```text
你：帮我制定学习计划
模拟 Agent：我收到了你的输入：帮我制定学习计划
```
