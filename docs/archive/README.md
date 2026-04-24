# 历史归档（第三层文档）

本目录存放**已定稿版本的 Spec 快照**，只读、**不随日常开发修改**。

## 原则

- **活文档**始终在仓库根下的 [`docs/01-项目主Spec.md`](../01-项目主Spec.md)、[`02`](../02-全局Reference规范.md)、[`03`](../03-模块拆解规划.md) 及 [`docs/modules/`](../modules/README.md) 中迭代。
- 当你为一次发布或里程碑「封版」时：将当时 relevant 的 Markdown **复制**到本目录下**新版本子文件夹**，之后仅修正活文档与代码，**不回写**已归档副本。

## 建议目录命名

```text
docs/archive/
└── YYYY-MM-DD_<简短标签>/   # 例：2026-04-23_mvp、2026-06-01_blogs-v1
    ├── 01-项目主Spec.md     # 快照（可选：仅 01，或 01+02+03+modules）
    ├── ...
    └── SNAPSHOT_NOTE.md     # 可选：对应 git tag / commit、冻结原因一句
```

## 与 Git 的关系

- 归档是**文档快照**；**权威版本线**仍以 Git 历史与当前 `docs/` 为准。
- 若使用 **git tag**（如 `site-v1.0`），可在该版本的 `SNAPSHOT_NOTE.md` 中写明 tag 名，便于对照。
