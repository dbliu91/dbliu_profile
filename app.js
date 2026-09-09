/**
 * dbliu 个人工作经历与项目实录 (2021—2026)
 * 视频切换、章节跳转与页面交互控制
 */

document.addEventListener('DOMContentLoaded', () => {
  // 5 部视频数据集
  const videoData = [
    {
      index: 0,
      period: "2025.02 — 2026.08",
      durationText: "时长：约 06:15",
      techTag: "AI Agent / 3D Runtime / UE5 / Godot",
      title: "2025.02 — 2026.08 工作实录（AI Agent、3D 生成与 UE5 运行时）",
      src: "assets/videos/work-record-2025-2026.mp4",
      poster: "assets/images/work-record.jpg",
      sidebarTitle: "本片包含的核心项目与章节（2025—2026）",
      sidebarDesc: "点击时间码，可直接跳到对应片段的实机演示：",
      summary: "这一阶段我负责工程侧：让 Agent 修改后的代码仍可运行调试，让 AI 生成的 3D 资产直接进 UE5，让课程视频自动合成成片，并配合 UnrealMCP 搭建自动化测试场景。",
      chapters: [
        { time: 20, timeStr: "00:20", name: "Jabali ｜ AI-Native 游戏创建与编辑 Agent", detail: "Web / Discord / Studio 游戏创建，增量修改且保持工程可运行" },
        { time: 73, timeStr: "01:13", name: "Ivy ｜ 教师教学视频 Agent & HOFTC 流水线", detail: "三问需求澄清、镜头拆解、代码动画/Unreal/生成式视频路由与合成" },
        { time: 128, timeStr: "02:08", name: "Prompt2Life ｜ AI 3D 角色与世界生成 (UE5)", detail: "自然语言/图片生成 3D 角色、自动绑定骨骼动画、场景编辑" },
        { time: 177, timeStr: "02:57", name: "ROEDefense ｜ Quest 3 工业数字孪生与维修仿真", detail: "MR 现场扫描、3DGS/PLY 运行时加载、空间锚点与 BLE 遥测" },
        { time: 223, timeStr: "03:43", name: "AoK ｜ UE5 多人 ARPG & UnrealMCP 自动测修", detail: "GAS 技能体系、Behavior Tree Boss AI、AI 读日志看截图自动修 Bug" },
        { time: 270, timeStr: "04:30", name: "Karen ｜ UE5 商场破坏解压与性能优化", detail: "Chaos 几何破坏、连锁反应、Static Mesh 代理与 Tick 分档" },
        { time: 315, timeStr: "05:15", name: "技术反思与总结 ｜ AI 时代工程师的真正价值", detail: "把重复工作做成可复用的 Agent 技能、大模型辅助全栈研发、独立跑通整个项目" }
      ]
    },
    {
      index: 1,
      period: "2024 年度总结",
      durationText: "时长：约 01:30",
      techTag: "AI NPC / Godot / Copilot / 3D MMORPG",
      title: "2024 年度工作总结（AI 游戏、Discord 指令生成与 Godot/Copilot）",
      src: "assets/videos/annual-2024.mp4",
      poster: "assets/images/annual-2024.jpg",
      sidebarTitle: "本片包含的核心项目与章节（2024）",
      sidebarDesc: "点击时间码，可直接跳到对应片段的实机演示：",
      summary: "这一年我把 AI 当生产力用：用 Discord 指令生成游戏原型再用 Godot 接手开发；做一个 3D MMORPG 练手项目，跑通 AI 玩家、Node.js 服务端和寻路。",
      chapters: [
        { time: 0, timeStr: "00:00", name: "AI NPC 与小镇系统", detail: "同项目不同主题外观、AI NPC 行为逻辑与交互测试" },
        { time: 18, timeStr: "00:18", name: "射击与飞行模式游戏原型", detail: "吃鸡与积分模式、平台化飞行玩法实机联调" },
        { time: 36, timeStr: "00:36", name: "Discord 指令生成游戏到 Godot", detail: "自然语言创建游戏工程，带 Copilot 的增量编辑与调试" },
        { time: 55, timeStr: "00:55", name: "3D MMORPG 练手项目", detail: "AI 玩家模拟、Node.js 高并发服务端与 Recast NavMesh 寻路" },
        { time: 75, timeStr: "01:15", name: "AI 辅助研发与工程反思", detail: "代码生成、日常重构与 AI 辅助开发的效能边界" }
      ]
    },
    {
      index: 2,
      period: "2023 年度总结",
      durationText: "时长：约 01:00",
      techTag: "Unreal / Unity / Web 实时 3D / ChatGPT 辅助",
      title: "2023 年度工作总结（实时 3D 跨端引擎开发与 AI 辅助探索）",
      src: "assets/videos/annual-2023.mp4",
      poster: "assets/images/annual-2023.jpg",
      sidebarTitle: "本片包含的核心项目与章节（2023）",
      sidebarDesc: "点击时间码，可直接跳到对应片段的实机演示：",
      summary: "这一年继续做实时 3D 项目，覆盖 Unreal、Unity 和 Web 三个端。同时我开始把 ChatGPT 当日常工具：查证陌生 API、快速做原型、边学边做，逐步验证 AI 能帮到哪一步。",
      chapters: [
        { time: 0, timeStr: "00:00", name: "实时 3D 场景与交互开发", detail: "角色控制、光影场景构建与运行时渲染优化" },
        { time: 20, timeStr: "00:20", name: "Unity / Web 跨端移植与测试", detail: "跨平台渲染适配、移动端预览与多端交互验证" },
        { time: 40, timeStr: "00:40", name: "AI 辅助技术查证与学习", detail: "用 ChatGPT 查证冷门图形 API，边查边学边做" }
      ]
    },
    {
      index: 3,
      period: "2022 年度总结",
      durationText: "时长：约 01:40",
      techTag: "展馆会议 / GAS 战斗重构 / Quest 2 VR / 自动化部署",
      title: "2022 年度工作总结（展馆会议、GAS 战斗重构与 Quest 2 VR）",
      src: "assets/videos/annual-2022.mp4",
      poster: "assets/images/annual-2022.jpg",
      sidebarTitle: "本片包含的核心项目与章节（2022）",
      sidebarDesc: "点击时间码，可直接跳到对应片段的实机演示：",
      summary: "这一年维护展馆与大型线上会议系统，做线上 Party 和服装展示功能；用 GAS 重写了核心战斗系统；调试 Quest 2 VR 离线语音识别，并把构建部署做成自动化流水线。",
      chapters: [
        { time: 0, timeStr: "00:00", name: "展馆与线上会议系统", detail: "服务器逻辑、玩家交互业务、压力测试与性能优化" },
        { time: 25, timeStr: "00:25", name: "线上 Party 与服装模型展示", detail: "跨年度多人交互场景、服装材质与展示系统" },
        { time: 50, timeStr: "00:50", name: "使用 GAS 重写核心战斗系统", detail: "扩展技能、属性、Gameplay Tags 与战斗机制" },
        { time: 72, timeStr: "01:12", name: "Quest 2 VR 与语音识别调试", detail: "修复离线语音识别崩溃 Bug、头部追踪与 VR 界面" },
        { time: 88, timeStr: "01:28", name: "自动化部署与服务器运维", detail: "自动化构建部署流水线与服务器监控" }
      ]
    },
    {
      index: 4,
      period: "2021 年度总结",
      durationText: "时长：约 00:30",
      techTag: "UE4 端游研发 / 远程技术支持 / 虚拟社交",
      title: "2021 年度工作总结（UE4 端游研发与虚拟社交起点）",
      src: "assets/videos/annual-2021.mp4",
      poster: "assets/images/annual-2021.jpg",
      sidebarTitle: "本片包含的核心项目与章节（2021）",
      sidebarDesc: "点击时间码，可直接跳到对应片段的实机演示：",
      summary: "这一年在家远程做 UE4 端游核心系统与战斗开发，同时负责客户的远程技术支持；业余接触了几个虚拟社交项目，做客户端原型和联调。",
      chapters: [
        { time: 0, timeStr: "00:00", name: "UE4 端游研发起点", detail: "端游核心系统开发与实机画面联调" },
        { time: 10, timeStr: "00:10", name: "多项目战斗系统蒙太奇", detail: "技能动作、打击判定与底层逻辑" },
        { time: 20, timeStr: "00:20", name: "虚拟社交客户端与调试", detail: "虚拟场景、角色同步与交互系统原型" }
      ]
    }
  ];

  // DOM 元素引用
  const videoPlayer = document.getElementById('main-video-player');
  const videoSource = document.getElementById('video-source');
  const floatingTitle = document.getElementById('floating-video-title');
  const videoPeriodPill = document.getElementById('video-period-pill');
  const videoDurationPill = document.getElementById('video-duration-pill');
  const videoTechPill = document.getElementById('video-tech-pill');
  const sidebarVideoTitle = document.getElementById('sidebar-video-title');
  const sidebarVideoDesc = document.getElementById('sidebar-video-desc');
  const chapterList = document.getElementById('chapter-list');
  const sidebarSummaryText = document.getElementById('sidebar-summary-text');
  const tabs = document.querySelectorAll('.video-tab');

  let currentVideoIndex = 0;

  // 渲染章节列表
  function renderChapters(chapters) {
    chapterList.innerHTML = '';
    chapters.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.className = `chapter-item ${idx === 0 ? 'active' : ''}`;
      btn.dataset.time = item.time;
      btn.innerHTML = `
        <div class="chapter-time">${item.timeStr}</div>
        <div class="chapter-info">
          <div class="chapter-name">${item.name}</div>
          <div class="chapter-detail">${item.detail}</div>
        </div>
      `;
      btn.addEventListener('click', () => {
        const timeToSeek = parseFloat(btn.dataset.time);
        videoPlayer.currentTime = timeToSeek;
        videoPlayer.play().catch(() => {});
        document.querySelectorAll('.chapter-item').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
      });
      chapterList.appendChild(btn);
    });
  }

  // 切换当前激活视频
  function switchVideo(index) {
    if (index < 0 || index >= videoData.length) return;
    currentVideoIndex = index;
    const data = videoData[index];

    // 更新 Tab 样式
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });

    // 更新播放器与信息
    const wasPlaying = !videoPlayer.paused;
    videoPlayer.pause();
    videoPlayer.poster = data.poster;
    videoSource.src = data.src;
    videoPlayer.load();

    floatingTitle.textContent = data.title;
    videoPeriodPill.textContent = data.period;
    videoDurationPill.textContent = data.durationText;
    videoTechPill.textContent = data.techTag;

    sidebarVideoTitle.textContent = data.sidebarTitle;
    sidebarVideoDesc.textContent = data.sidebarDesc;
    sidebarSummaryText.textContent = data.summary;

    renderChapters(data.chapters);

    if (wasPlaying) {
      videoPlayer.play().catch(() => {});
    }
  }

  // Tab 点击绑定
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.videoIndex, 10);
      switchVideo(idx);
    });
  });

  // 监听视频播放进度高亮当前章节
  videoPlayer.addEventListener('timeupdate', () => {
    const curTime = videoPlayer.currentTime;
    const data = videoData[currentVideoIndex];
    const chapterItems = document.querySelectorAll('.chapter-item');

    let activeIdx = 0;
    for (let i = 0; i < data.chapters.length; i++) {
      if (curTime >= data.chapters[i].time) {
        activeIdx = i;
      } else {
        break;
      }
    }

    chapterItems.forEach((item, i) => {
      if (i === activeIdx) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });

  // Toast 提示
  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

  // 复制邮箱功能绑定
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.dataset.email || 'dbliu91@gmail.com';
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`已复制联系邮箱：${email}`);
        }).catch(() => {
          showToast(`联系邮箱：${email}`);
        });
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast(`已复制联系邮箱：${email}`);
        } catch (err) {
          showToast(`联系邮箱：${email}`);
        }
        document.body.removeChild(textarea);
      }
    });
  });

  // 导航栏滚动高亮
  const navLinks = document.querySelectorAll('.nav-links .nav-item');
  const sections = [
    document.getElementById('video-theater'),
    document.getElementById('projects'),
    document.getElementById('career')
  ];

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      if (sec && sec.offsetTop <= scrollPos) {
        currentId = sec.id;
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
});
