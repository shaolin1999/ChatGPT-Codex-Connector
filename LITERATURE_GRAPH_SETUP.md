# 文献知识图谱：Obsidian Markdown 双链

原网页第二版块已由“科研社区统一检索”替换为“文献知识图谱”。可视化节点包括文献、材料、污染物、方法、结构、关键词及研究主题。实线代表文献间的真实 Markdown/Obsidian 双链，细线代表从笔记属性或正文标签抽取的文献—类别关系。不会自行猜测论文之间的关联。

## 方案 A：本地文件夹预览（无需部署或上传）

进入首页“文献知识图谱” → “选择 Markdown 文件夹”，选择 Obsidian Vault 内含论文笔记的文件夹。浏览器本地解析 .md/.markdown，包含 wiki 双链、Markdown 相对文件链接以及 frontmatter 标签；点击节点查看 Markdown 原文、出链、反向链接及关联关键词。**不会将文件上传到服务器，其他访客看不到你本地导入的数据**。浏览器刷新后需要重新选择目录。单次最多读取 2500 个文件；过大的图谱推荐发布为静态索引。

## 方案 B：公开发布供所有访客查看

将**有权公开**的 Markdown 笔记及其子文件夹放在 GitHub 当前分支的 `public/literature-md/` 目录中，如下所示：

```text
public/
  literature-md/
    PFAS/
      短链PFAS吸附综述.md
      纤维素功能膜.md
    Simulation/
      MD界面水模拟.md
  data/
    literature-graph.json
```

运行 `node scripts/build-literature-graph.cjs` 即可更新静态图谱索引。已添加 GitHub Actions 工作流 `.github/workflows/literature-graph.yml`：此分支新增、删除或更新 `public/literature-md/` 中的文献时自动重新生成索引并提交，随后由 Cloudflare Pages 正常部署。若 Actions 无法推送，请在 GitHub Actions 权限中允许工作流写入 repository contents；也可以本地运行构建命令并提交生成的 JSON 文件。**不要把未授权出版社全文、付费下载的 PDF、私密研究记录或密钥上传到公开 GitHub 仓库。**

目前仓库里**没有真实论文 Markdown/双链文件**，只有 README 等说明类 Markdown 和 `public/data/papers.json` 中的演示数据。因此上线后的知识图谱初始为空；需要导入真实文献文件后才会出现真实图谱。网页不会把演示论文伪造成真实研究。

## 解析规则

- `[[论文文件名]]`、`[[文件名|显示别名]]`、`[[论文文件名#小节]]`、相对 Markdown 链接 `[相关工作](../文献.md)` 会尝试建立文献—文献关系；目标缺失的链接计入未解析。
- YAML frontmatter 的 `title`、`aliases`、`tags`、`keywords`、`materials`、`pollutants`、`methods`、`structures`、`topics`，以及中文 `关键词`、`材料`、`污染物`、`研究方法`、`结构`、`研究方向` 用于标注分类。
- 正文 `#标签` 和 “关键词：PFAS、吸附” 也会建立文献—关键词关系。可点击节点后打开原 Markdown，查看针对该文献的反向链接。
- 对标题有歧义的重复同名文件不会任意建立链接。建议给 Markdown 文件唯一名称、稳定的 frontmatter title、显式相对路径。
- 画布支持缩放、拖动画布、节点搜索、类别筛选、节点详情。为避免图谱过载，默认最多显示 250 个节点，可手动提高上限。
- 网站并不直接公开所有本地笔记。静态索引只保存节点、边和文献 metadata；阅读全文时才从 `public/literature-md/` 按需读取 Markdown 文件。

## 建议的元数据格式

```yaml
---
title: Cellulose-based membranes for short-chain PFAS removal
tags: [PFAS, adsorption, interfacial water]
materials: [cellulose]
pollutants: [PFBA, PFBS]
methods: [MD, DFT]
structures: [functional membrane]
doi: 10.XXXX/actual-doi
---
# Cellulose-based membranes for short-chain PFAS removal

相关文献：[[另一篇文献]]
关键词：界面水、选择性吸附
```

需要注意，当前浏览器 Markdown 阅读器是**安全文本排版**（支持标题、段落和可点击双链），不会执行原笔记中的 HTML、JavaScript 或嵌入代码，也不保证 Obsidian 插件的高级语法完全一致。只有上传到静态站点的数据才会被所有访客看到。
