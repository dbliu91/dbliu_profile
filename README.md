# 项目记录｜工作经历作品集

这是一个无需数据库、无需构建步骤、可直接本地打开的个人工作经历静态页面。页面按项目与年份记录 2021—2026 的游戏、AI Agent、生成式内容和三维运行时工作，不以某个具体岗位为中心。

## 本地查看

直接双击 `index.html` 即可查看。若浏览器限制本地视频懒加载，可在当前目录启动任意静态文件服务器后访问，例如：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000/`。

## 资源替换

- 项目介绍：`assets/videos/project-intro-proof.mp4`；如有新版，同步替换 `assets/images/project-intro.jpg`。
- 2025–2026 工作记录：`assets/videos/work-record-2025-2026.mp4`。
- 年度视频：`assets/videos/annual-2021.mp4` 至 `annual-2024.mp4`。
- 简历：`assets/downloads/刘文洋_AI_Agent_工程师_简历_v2.docx`。

年度视频使用 `data-src` + IntersectionObserver 懒加载；进入视口后由脚本设置 `preload="metadata"` 并加载视频。关闭 JavaScript 时，每张年度卡仍保留可点击的下载回退链接。已加载的视频均使用 `preload="metadata"`、poster、controls、playsinline。

页面不显示电话、邮箱、本机绝对路径、内部仓库名或未公开源码。

## GitHub Pages 发布说明

页面源码可直接作为 GitHub Pages 的静态目录发布。当前五条本地成片合计约 405 MB，其中 2025–2026 工作记录约 198 MB、2022 年度视频约 97 MB；发布前应将视频迁至适合流媒体播放的外部对象存储或视频托管，再替换 `assets/videos/` 的相对地址。这样不会触发 GitHub 单文件大小限制，也不会把无法播放的视频链接写入简历。
