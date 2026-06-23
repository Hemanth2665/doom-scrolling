const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const themes = [
  { id: 'ionized', name: 'Ionized Purple + Blue', note: 'Original futuristic vibe', primary: '#6d5dfc', secondary: '#00d4ff' },
  { id: 'whiteblue', name: 'White + Blue', note: "Meet's cleaner pitch option", primary: '#1177ff', secondary: '#7fd3ff' },
  { id: 'cobalt', name: 'Cobalt Pro', note: 'Deep startup blue', primary: '#1b6bff', secondary: '#20e3ff' },
  { id: 'aurora', name: 'Aurora Neon', note: 'Loud, memorable, creator-focused', primary: '#ff4edb', secondary: '#04f0ff' },
  { id: 'graphite', name: 'Graphite Blue', note: 'Serious investor demo look', primary: '#65a9ff', secondary: '#9fb7d5' }
];

const reels = [
  {
    id: 'coding-like-game', topic: 'Career', videoId: '147Id-x25k8', source: 'youtube',
    title: 'Learn coding like a game',
    desc: 'Build small challenges, earn progress, and make programming feel like leveling up.',
    creator: '@codingcreator', badge: 'Playable YouTube Short', duration: 'Short', xp: 24,
    likes: 29100, comments: 1300, saves: 8800,
    quiz: 'What makes coding easier to learn?', options: ['Small challenges and practice', 'Only watching forever', 'Skipping basics'], answer: 'Small challenges and practice',
    summary: 'Coding becomes easier when learners turn practice into small goals and challenges.'
  },
  {
    id: 'ai-cybersecurity-short', topic: 'Cyber', videoId: 'jvdAvs79uTI', source: 'youtube',
    title: 'AI cybersecurity in seconds',
    desc: 'A fast AI + cybersecurity lesson about smarter defense, threat awareness, and practical security habits.',
    creator: '@cybercreator', badge: 'Playable YouTube Short', duration: 'Short', xp: 30,
    likes: 22400, comments: 1180, saves: 7100,
    quiz: 'How can AI help cybersecurity?', options: ['Detect patterns and threats faster', 'Make passwords public', 'Remove all security rules'], answer: 'Detect patterns and threats faster',
    summary: 'AI can support cybersecurity by spotting suspicious patterns and improving threat awareness.'
  },
  {
    id: 'ai-tools-students', topic: 'AI', videoId: '0MQEf_7qk4s', source: 'youtube',
    title: '3 AI tools every student should know',
    desc: 'Use AI for research, notes, study planning, and assignments — but always verify important facts.',
    creator: '@aitools', badge: 'Playable YouTube Short', duration: 'Short', xp: 25,
    likes: 38800, comments: 2100, saves: 12200,
    quiz: 'What should students do with AI output?', options: ['Use it carefully and verify facts', 'Copy everything blindly', 'Ignore sources'], answer: 'Use it carefully and verify facts',
    summary: 'Students can use AI tools for research, notes, and studying, but they should verify important details.'
  },
  {
    id: 'aws-vpc-explained', topic: 'Cloud', videoId: 'JGzccAh-quU', source: 'youtube',
    title: 'AWS VPC explained',
    desc: 'Understand private cloud networking: subnets, routing, security groups, and controlled access.',
    creator: '@cloudcreator', badge: 'Playable YouTube Short', duration: 'Short', xp: 26,
    likes: 15200, comments: 520, saves: 4300,
    quiz: 'What is AWS VPC used for?', options: ['Creating isolated cloud networks', 'Editing videos', 'Writing resumes'], answer: 'Creating isolated cloud networks',
    summary: 'AWS VPC gives cloud apps a controlled private network with subnets, routes, and access rules.'
  },
  {
    id: 'free-google-courses', topic: 'Career', videoId: 'ySXPDAgxDas', source: 'youtube',
    title: 'Free tech courses to explore',
    desc: 'A career-learning reel about free courses in AI, data, cybersecurity, UX, GitHub, and cloud skills.',
    creator: '@coursecreator', badge: 'Playable YouTube Short', duration: 'Short', xp: 20,
    likes: 12400, comments: 410, saves: 3700,
    quiz: 'What is the best way to use free courses?', options: ['Pick one path and finish it', 'Collect links only', 'Skip practice'], answer: 'Pick one path and finish it',
    summary: 'Free courses are most useful when learners choose one path, practice, and finish projects.'
  },
  {
    id: 'cybersecurity-tools', topic: 'Cyber', videoId: 'f02MVO8VjYg', source: 'youtube',
    title: 'Cybersecurity tools to know',
    desc: 'A quick overview of tools beginners can explore while learning ethical cybersecurity fundamentals.',
    creator: '@cybertools', badge: 'Playable YouTube Short', duration: 'Short', xp: 28,
    likes: 9500, comments: 350, saves: 2600,
    quiz: 'How should cybersecurity tools be used?', options: ['Only in legal labs and authorized systems', 'Against random websites', 'To steal passwords'], answer: 'Only in legal labs and authorized systems',
    summary: 'Cybersecurity tools should be practiced only in legal labs, coursework, and authorized environments.'
  },
  {
    id: 'ai-cyber-jobs', topic: 'Career', videoId: 'iEtco_3089A', source: 'youtube',
    title: 'Will AI replace cybersecurity jobs?',
    desc: 'A career-focused reel about how AI changes cybersecurity work and why human judgment still matters.',
    creator: '@simplilearn', badge: 'Playable YouTube Short', duration: 'Short', xp: 23,
    likes: 18400, comments: 610, saves: 3100,
    quiz: 'What should cyber learners do as AI grows?', options: ['Learn AI plus security fundamentals', 'Stop learning security', 'Ignore new tools'], answer: 'Learn AI plus security fundamentals',
    summary: 'AI changes cybersecurity workflows, but learners still need fundamentals, judgment, and hands-on practice.'
  },
  {
    id: 'ethical-hacking-roadmap', topic: 'Cyber', videoId: 'auQAZUkRhgk', source: 'youtube',
    title: 'Ethical hacking roadmap',
    desc: 'A beginner roadmap reel for cybersecurity: networking, Linux, web security, labs, and ethical practice.',
    creator: '@roadmapcreator', badge: 'Playable YouTube Short', duration: 'Short', xp: 27,
    likes: 21100, comments: 760, saves: 5400,
    quiz: 'What should come before ethical hacking practice?', options: ['Networking and legal lab basics', 'Attacking public systems', 'Skipping fundamentals'], answer: 'Networking and legal lab basics',
    summary: 'Ethical hacking starts with networking, Linux, web basics, and legal lab practice.'
  }
];

const localFallbacks = [
  { topic: 'AI', file: 'ai_prompt_formula.mp4', poster: 'ai_prompt_formula.jpg' },
  { topic: 'Cyber', file: 'cyber_2fa.mp4', poster: 'cyber_2fa.jpg' },
  { topic: 'AI', file: 'agents_memory.mp4', poster: 'agents_memory.jpg' },
  { topic: 'Cloud', file: 'cloud_vpc.mp4', poster: 'cloud_vpc.jpg' }
];

const topics = ['For You', 'AI', 'Cyber', 'Cloud', 'Study', 'Finance', 'Career', 'Premium'];
const screens = {
  feed: $('#screenFeed'), search: $('#screenSearch'), profile: $('#screenProfile'), dm: $('#screenDM'),
  upload: $('#screenUpload'), premium: $('#screenPremium'), analytics: $('#screenAnalytics')
};
const screenTitles = { feed: 'For You', search: 'Search', profile: 'Profile', dm: 'Messages', upload: 'Upload', premium: 'Premium', analytics: 'Analytics' };

let state = {
  activeTopic: 'For You',
  activeScreen: 'feed',
  currentReelId: reels[0].id,
  liked: new Set(JSON.parse(localStorage.getItem('doom_liked') || '[]')),
  saved: new Set(JSON.parse(localStorage.getItem('doom_saved') || '[]')),
  watched: new Set(JSON.parse(localStorage.getItem('doom_watched') || '[]')),
  comments: JSON.parse(localStorage.getItem('doom_comments') || '{}'),
  premium: localStorage.getItem('doom_premium') === 'true',
  xp: Number(localStorage.getItem('doom_xp') || 2480),
  lessons: Number(localStorage.getItem('doom_lessons') || 63),
  watchSeconds: Number(localStorage.getItem('doom_watch') || 26640),
  selectedUploadCategory: 'AI',
  uploadObjectUrl: null,
  currentCommentsReel: null,
  activeThread: 0
};
let observer = null;
let toastTimer = null;
const noEmbedPreview = new URLSearchParams(location.search).has('noembed');

const threads = [
  { name: 'AI Study Group', avatar: 'AI', preview: 'Share the best AI reels for finals week.', messages: [['Maya', 'This app should have topic paths.'], ['Alex', 'AI, Cyber, Career, Finance would be perfect.'], ['You', 'Version 5 has real videos and analytics.']] },
  { name: 'Meet', avatar: 'MT', preview: 'White and blue are still stuck in my head.', messages: [['Meet', 'Try white and blue too.'], ['You', 'I added Theme Studio so we can compare colors live.']] },
  { name: 'Creator Team', avatar: 'CR', preview: 'Upload flow is ready for the prototype.', messages: [['Sam', 'Creators need a reason to post useful content.'], ['You', 'Premium and XP can make it a real ecosystem.']] },
  { name: 'Cyber Club', avatar: 'CC', preview: 'Can we add SQL/cyber premium labs?', messages: [['Nina', 'Ethical hacking path would be a strong premium feature.'], ['You', 'SQL joins preview is locked behind Premium demo.']] }
];

const defaultComments = {
  'ai-prompt-formula': ['This is much cleaner than random prompting.', 'Saved for my next assignment.'],
  'cyber-2fa': ['I enabled 2FA after seeing this.', 'Password manager is underrated.'],
  'agent-memory': ['This connects with the Jarvis idea.'],
  'study-active-recall': ['Active recall helped me before exams.']
};

function clean(value) {
  return String(value).replace(/[<>&"]/g, ch => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[ch]));
}
function formatCount(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K`;
  return String(num);
}
function thumbUrl(reel) {
  if (reel.localSrc) return '';
  if (reel.source === 'youtube') return `https://i.ytimg.com/vi/${reel.videoId}/hqdefault.jpg`;
  const fallback = localFallbacks.find(item => item.topic === reel.topic) || localFallbacks[0];
  return `assets/posters/${fallback.poster}`;
}
function youtubeUrl(reel) { return `https://www.youtube.com/shorts/${reel.videoId}`; }
function youtubeEmbed(reel) {
  const origin = encodeURIComponent(location.origin);
  return `https://www.youtube.com/embed/${reel.videoId}?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${reel.videoId}&enablejsapi=1&origin=${origin}`;
}
function persist() {
  localStorage.setItem('doom_liked', JSON.stringify([...state.liked]));
  localStorage.setItem('doom_saved', JSON.stringify([...state.saved]));
  localStorage.setItem('doom_watched', JSON.stringify([...state.watched]));
  localStorage.setItem('doom_comments', JSON.stringify(state.comments));
  localStorage.setItem('doom_premium', state.premium ? 'true' : 'false');
  localStorage.setItem('doom_xp', String(state.xp));
  localStorage.setItem('doom_lessons', String(state.lessons));
  localStorage.setItem('doom_watch', String(state.watchSeconds));
}
function showToast(message) {
  clearTimeout(toastTimer);
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
function updateTime() {
  $('#statusTime').textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
function visibleReels() {
  if (state.activeTopic === 'For You') return reels;
  return reels.filter(reel => reel.topic === state.activeTopic);
}

function renderTabs() {
  $('#topicTabs').innerHTML = topics.map(topic => `<button type="button" class="${topic === state.activeTopic ? 'active' : ''}" data-topic="${clean(topic)}">${clean(topic)}</button>`).join('');
}
function reelTemplate(reel) {
  const locked = reel.premium && !state.premium;
  const liked = state.liked.has(reel.id);
  const saved = state.saved.has(reel.id);
  const comments = (state.comments[reel.id] || defaultComments[reel.id] || []).length + reel.comments;
  const sourceLabel = reel.source === 'youtube' ? 'Real YouTube Short' : 'Demo upload';
  const bg = reel.localSrc ? '' : `style="background-image:url('${thumbUrl(reel)}')"`;
  const media = reel.localSrc
    ? `<video class="local-video" src="${reel.localSrc}" muted loop playsinline preload="metadata"></video>`
    : `<div class="thumb-bg" ${bg}></div><iframe class="youtube-frame" title="${clean(reel.title)}" data-video-id="${clean(reel.videoId)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  return `<article class="reel${locked ? ' locked' : ''}" data-id="${clean(reel.id)}">
    <div class="reel-media">${media}</div>
    <div class="video-label">${sourceLabel}</div>
    <div class="play-state">Play</div>
    ${locked ? `<div class="lock-overlay"><div class="lock-card"><div class="premium-mark">PRO</div><h3>Premium lesson</h3><p>Activate Premium demo to unlock this useful deep-dive reel.</p><button class="primary-small" type="button" data-open="premium">Unlock Premium</button></div></div>` : ''}
    <aside class="actions">
      <button class="action-btn ${liked ? 'liked' : ''}" type="button" data-like="${clean(reel.id)}">Like<small>${formatCount(reel.likes + (liked ? 1 : 0))}</small></button>
      <button class="action-btn" type="button" data-comment="${clean(reel.id)}">Com<small>${formatCount(comments)}</small></button>
      <button class="action-btn" type="button" data-share="${clean(reel.id)}">Share<small>Link</small></button>
      <button class="action-btn ${saved ? 'saved' : ''}" type="button" data-save="${clean(reel.id)}">Save<small>${saved ? 'Saved' : 'Save'}</small></button>
    </aside>
    <div class="reel-copy">
      <span class="topic-pill ${reel.premium ? 'premium' : ''}">${reel.premium ? 'PRO - ' : ''}${clean(reel.badge)} - ${clean(reel.duration)}</span>
      <h2>${clean(reel.title)}</h2>
      <p>${clean(reel.desc)}</p>
      <div class="creator-row"><span class="avatar">${clean(reel.creator.replace('@','').slice(0,2).toUpperCase())}</span><span>${clean(reel.creator)} - +${reel.xp} XP</span></div>
      <div class="reel-tools">
        <button class="primary-mini" type="button" data-quiz="${clean(reel.id)}">Take quiz</button>
        <button type="button" data-topic-jump="${clean(reel.topic)}">${clean(reel.topic)} path</button>
        ${reel.source === 'youtube' ? `<a href="${youtubeUrl(reel)}" target="_blank" rel="noopener">Backup link</a>` : ''}
      </div>
    </div>
  </article>`;
}
function renderReels() {
  renderTabs();
  const list = visibleReels();
  $('#reels').innerHTML = list.map(reelTemplate).join('');
  setupObserver();
  requestAnimationFrame(() => activateClosestReel());
}
function setupObserver() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
        const id = entry.target.dataset.id;
        state.currentReelId = id;
        $$('.reel', $('#reels')).forEach(el => el.classList.toggle('active', el.dataset.id === id));
        markWatched(id);
        loadActiveMedia();
      }
    });
  }, { root: $('#reels'), threshold: [0.65, 0.85] });
  $$('.reel', $('#reels')).forEach(el => observer.observe(el));
}
function activateClosestReel() {
  const first = $('.reel', $('#reels'));
  if (!first) return;
  if (!$('#reels .reel.active')) {
    first.classList.add('active');
    state.currentReelId = first.dataset.id;
  }
  loadActiveMedia();
}
function loadActiveMedia() {
  $$('.reel', $('#reels')).forEach(reelEl => {
    const id = reelEl.dataset.id;
    const reel = reels.find(item => item.id === id);
    const isActive = reelEl.classList.contains('active') && state.activeScreen === 'feed';
    const locked = reel && reel.premium && !state.premium;
    const iframe = $('.youtube-frame', reelEl);
    const localVideo = $('.local-video', reelEl);
    if (iframe) {
      if (isActive && !locked && !noEmbedPreview) {
        if (!iframe.src) iframe.src = youtubeEmbed(reel);
        iframe.classList.add('loaded');
      } else {
        iframe.classList.remove('loaded');
        if (iframe.src) iframe.src = '';
      }
    }
    if (localVideo) {
      if (isActive && !locked) localVideo.play().catch(() => {});
      else localVideo.pause();
    }
  });
}
function pauseMedia() {
  $$('.youtube-frame').forEach(frame => { frame.src = ''; frame.classList.remove('loaded'); });
  $$('.local-video').forEach(video => video.pause());
}
function markWatched(id) {
  const reel = reels.find(item => item.id === id);
  if (!reel || state.watched.has(id) || (reel.premium && !state.premium)) return;
  state.watched.add(id);
  state.xp += reel.xp;
  state.lessons += 1;
  state.watchSeconds += 42;
  persist();
  renderAnalytics();
  renderProfile();
}

function openScreen(name) {
  state.activeScreen = name;
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle('active-screen', key === name));
  $$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.open === name));
  $('#appTitle').textContent = screenTitles[name] || 'For You';
  if (name === 'feed') {
    requestAnimationFrame(() => loadActiveMedia());
  } else {
    pauseMedia();
    if (name === 'search') renderSearchResults($('#searchInput').value);
    if (name === 'profile') renderProfile();
    if (name === 'dm') renderThreads();
    if (name === 'premium') renderPremium();
    if (name === 'analytics') renderAnalytics();
  }
}
function jumpToTopic(topic) {
  state.activeTopic = topic || 'For You';
  renderReels();
  openScreen('feed');
  $('#reels').scrollTop = 0;
}
function jumpToReel(id) {
  const reel = reels.find(item => item.id === id);
  if (!reel) return;
  state.activeTopic = reel.topic;
  renderReels();
  openScreen('feed');
  setTimeout(() => {
    const el = $(`.reel[data-id="${id}"]`, $('#reels'));
    if (el) el.scrollIntoView({ block: 'start' });
  }, 60);
}

function renderSearchControls() {
  $('#quickTopics').innerHTML = topics.filter(t => t !== 'For You').map(topic => `<button type="button" data-query="${clean(topic)}">${clean(topic)}</button>`).join('');
}
function renderSearchResults(query = '') {
  const q = query.trim().toLowerCase();
  const results = reels.filter(reel => !q || [reel.title, reel.desc, reel.topic, reel.creator].join(' ').toLowerCase().includes(q));
  $('#resultCount').textContent = `${results.length} videos`;
  $('#resultList').innerHTML = results.map(reel => `<button class="result-card" type="button" data-open-reel="${clean(reel.id)}"><span class="result-thumb" style="background-image:url('${thumbUrl(reel)}')"></span><span><h4>${clean(reel.title)}</h4><p>${clean(reel.topic)} - ${clean(reel.creator)} - ${reel.premium ? 'Premium' : '+ ' + reel.xp + ' XP'}</p></span></button>`).join('');
}
function renderProfile() {
  $('#profileXp').textContent = state.xp.toLocaleString();
  $('#profileSaved').textContent = state.saved.size;
  const savedReels = reels.filter(reel => state.saved.has(reel.id));
  $('#savedList').innerHTML = savedReels.length ? savedReels.map(reel => miniCard(reel)).join('') : `<div class="glass-card path-card"><p>No saved reels yet. Tap Save on any useful reel.</p></div>`;
}
function miniCard(reel) {
  return `<button class="mini-card" type="button" data-open-reel="${clean(reel.id)}"><span class="result-thumb" style="background-image:url('${thumbUrl(reel)}')"></span><span><h4>${clean(reel.title)}</h4><p>${clean(reel.topic)} - ${clean(reel.duration)} - ${clean(reel.creator)}</p></span></button>`;
}
function renderThreads() {
  $('#threadList').innerHTML = threads.map((thread, index) => `<button type="button" class="${index === state.activeThread ? 'active' : ''}" data-thread="${index}"><span class="avatar-sm">${clean(thread.avatar)}</span><span><b>${clean(thread.name)}</b><small>${clean(thread.preview)}</small></span></button>`).join('');
  const thread = threads[state.activeThread];
  $('#chatAvatar').textContent = thread.avatar;
  $('#chatName').textContent = thread.name;
  $('#chatMeta').textContent = indexText(thread.messages.length) + ' messages';
  $('#chatMessages').innerHTML = thread.messages.map(([name, text]) => `<div class="bubble ${name === 'You' ? 'me' : ''}"><b>${clean(name)}</b><br>${clean(text)}</div>`).join('');
  const chat = $('#chatMessages');
  chat.scrollTop = chat.scrollHeight;
}
function indexText(num) { return String(num).padStart(2, '0'); }
function renderUploadCategories() {
  $('#uploadCategories').innerHTML = ['AI', 'Cyber', 'Cloud', 'Study', 'Finance', 'Career'].map(topic => `<button type="button" data-upload-topic="${topic}" class="${topic === state.selectedUploadCategory ? 'active' : ''}">${topic}</button>`).join('');
}
function renderPremium() {
  $('#unlockBtn').textContent = state.premium ? 'Premium active' : 'Unlock demo';
  $('#courseList').innerHTML = reels.filter(reel => reel.premium).map(reel => miniCard(reel)).join('');
}
function renderAnalytics() {
  $('#watchTime').textContent = `${Math.round(state.watchSeconds / 60)}m`;
  $('#lessonsCount').textContent = state.lessons.toLocaleString();
  const counts = {};
  [...state.watched].forEach(id => {
    const reel = reels.find(item => item.id === id);
    if (reel) counts[reel.topic] = (counts[reel.topic] || 0) + 1;
  });
  const base = ['AI', 'Cyber', 'Cloud', 'Study', 'Finance', 'Career', 'Premium'];
  $('#topicBars').innerHTML = base.map(topic => {
    const val = Math.min(100, 20 + (counts[topic] || 0) * 18 + (topic === 'AI' ? 22 : 0));
    return `<div class="bar-row"><span>${topic}</span><div class="bar-track"><span style="width:${val}%"></span></div><b>${val}%</b></div>`;
  }).join('');
  const watchedSummaries = [...state.watched].map(id => reels.find(item => item.id === id)).filter(Boolean).slice(-3).map(r => r.summary);
  $('#aiSummary').textContent = watchedSummaries.length ? watchedSummaries.join(' ') : 'Scroll a few reels to generate a summary of what you learned.';
  const saved = reels.filter(reel => state.saved.has(reel.id));
  $('#analyticsSaved').innerHTML = saved.length ? saved.slice(0, 3).map(miniCard).join('') : `<div class="glass-card path-card"><p>Saved reels will appear here for analytics.</p></div>`;
}

function openComments(id) {
  state.currentCommentsReel = id;
  const reel = reels.find(item => item.id === id);
  $('#commentList').innerHTML = (state.comments[id] || defaultComments[id] || ['This would be useful in a learning feed.']).map((text, index) => `<div class="comment"><b>${index === 0 ? reel.creator : '@learner' + (index + 1)}</b><p>${clean(text)}</p></div>`).join('');
  openModal('commentsModal');
}
function openQuiz(id) {
  const reel = reels.find(item => item.id === id);
  if (!reel) return;
  $('#quizTitle').textContent = reel.quiz;
  $('#quizFeedback').textContent = '';
  $('#quizOptions').innerHTML = reel.options.map(option => `<button type="button" data-answer="${clean(option)}">${clean(option)}</button>`).join('');
  openModal('quizModal');
}
function openModal(id) { const modal = $('#' + id); modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false'); }
function closeModal(id) { const modal = $('#' + id); modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); }

function applyTheme(id) {
  const theme = themes.find(item => item.id === id) || themes[0];
  document.body.dataset.theme = theme.id;
  document.body.style.removeProperty('--primary');
  document.body.style.removeProperty('--secondary');
  localStorage.setItem('doom_theme', theme.id);
  $('#primaryPicker').value = theme.primary;
  $('#secondaryPicker').value = theme.secondary;
  updateThemeOptions();
  updateColorCode(theme.primary, theme.secondary);
}
function applyCustomTheme() {
  const p = $('#primaryPicker').value;
  const s = $('#secondaryPicker').value;
  document.body.dataset.theme = 'custom';
  document.body.style.setProperty('--primary', p);
  document.body.style.setProperty('--secondary', s);
  localStorage.setItem('doom_theme', 'custom');
  localStorage.setItem('doom_custom_primary', p);
  localStorage.setItem('doom_custom_secondary', s);
  updateThemeOptions();
  updateColorCode(p, s);
  showToast('Custom color theme applied');
}
function updateColorCode(primary, secondary) {
  $('#colorCode').textContent = `--primary: ${primary};\n--secondary: ${secondary};\nbackground: linear-gradient(135deg, ${primary}, ${secondary});`;
}
function updateThemeOptions() {
  const current = document.body.dataset.theme;
  $('#themeOptions').innerHTML = themes.map(theme => `<button type="button" class="theme-option ${theme.id === current ? 'active' : ''}" data-theme-choice="${theme.id}"><span class="swatches"><i class="swatch" style="background:${theme.primary}"></i><i class="swatch" style="background:${theme.secondary}"></i></span><span><b>${clean(theme.name)}</b><small>${clean(theme.note)}</small></span><span>${theme.id === current ? 'Active' : 'Try'}</span></button>`).join('');
}
function openThemeDrawer() { $('#themeDrawer').classList.add('open'); }
function closeThemeDrawer() { $('#themeDrawer').classList.remove('open'); }

function openFullscreen() {
  $('#phoneFrame').classList.add('fullscreen');
  document.body.style.overflow = 'hidden';
  openScreen('feed');
}
function closeFullscreen() {
  $('#phoneFrame').classList.remove('fullscreen');
  document.body.style.overflow = '';
}

function resetDemo() {
  ['doom_liked','doom_saved','doom_watched','doom_comments','doom_premium','doom_xp','doom_lessons','doom_watch'].forEach(key => localStorage.removeItem(key));
  state.liked.clear(); state.saved.clear(); state.watched.clear(); state.comments = {}; state.premium = false; state.xp = 2480; state.lessons = 63; state.watchSeconds = 26640;
  persist(); renderReels(); renderProfile(); renderAnalytics(); renderPremium(); showToast('Demo reset');
}

function refreshFeed() {
  const current = reels.splice(0, reels.length);
  for (let i = current.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [current[i], current[j]] = [current[j], current[i]];
  }
  reels.push(...current);
  state.activeTopic = 'For You';
  renderReels();
  openScreen('feed');
  $('#reels').scrollTop = 0;
  showToast('Feed refreshed with new useful reels');
}

function bindPullToRefresh() {
  const reelBox = $('#reels');
  let startY = 0;
  let armed = false;
  reelBox.addEventListener('touchstart', e => { startY = e.touches[0].clientY; armed = reelBox.scrollTop <= 2; }, { passive: true });
  reelBox.addEventListener('touchend', e => {
    if (!armed) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 80) refreshFeed();
    armed = false;
  }, { passive: true });
}

function bindEvents() {
  document.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-open]');
    if (openBtn) { openScreen(openBtn.dataset.open); return; }
    const topicBtn = event.target.closest('[data-topic]');
    if (topicBtn) { jumpToTopic(topicBtn.dataset.topic); return; }
    const topicJump = event.target.closest('[data-topic-jump]');
    if (topicJump) { jumpToTopic(topicJump.dataset.topicJump); return; }
    const like = event.target.closest('[data-like]');
    if (like) {
      const id = like.dataset.like;
      state.liked.has(id) ? state.liked.delete(id) : state.liked.add(id);
      persist(); renderReels(); showToast(state.liked.has(id) ? 'Liked reel' : 'Like removed'); return;
    }
    const save = event.target.closest('[data-save]');
    if (save) {
      const id = save.dataset.save;
      state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
      persist(); renderReels(); renderProfile(); renderAnalytics(); showToast(state.saved.has(id) ? 'Saved to profile' : 'Removed from saved'); return;
    }
    const comment = event.target.closest('[data-comment]');
    if (comment) { openComments(comment.dataset.comment); return; }
    const share = event.target.closest('[data-share]');
    if (share) {
      const reel = reels.find(item => item.id === share.dataset.share);
      const link = reel && reel.source === 'youtube' ? youtubeUrl(reel) : location.href;
      navigator.clipboard?.writeText(link).then(() => showToast('Video link copied')).catch(() => showToast('Share link ready'));
      return;
    }
    const quiz = event.target.closest('[data-quiz]');
    if (quiz) { openQuiz(quiz.dataset.quiz); return; }
    const openReel = event.target.closest('[data-open-reel]');
    if (openReel) { jumpToReel(openReel.dataset.openReel); return; }
    const quick = event.target.closest('[data-query]');
    if (quick) { $('#searchInput').value = quick.dataset.query; renderSearchResults(quick.dataset.query); return; }
    const thread = event.target.closest('[data-thread]');
    if (thread) { state.activeThread = Number(thread.dataset.thread); renderThreads(); return; }
    const uploadTopic = event.target.closest('[data-upload-topic]');
    if (uploadTopic) { state.selectedUploadCategory = uploadTopic.dataset.uploadTopic; renderUploadCategories(); return; }
    const close = event.target.closest('[data-close]');
    if (close) { closeModal(close.dataset.close); return; }
    const themeChoice = event.target.closest('[data-theme-choice]');
    if (themeChoice) { applyTheme(themeChoice.dataset.themeChoice); showToast('Theme updated'); return; }
  });

  $('#refreshFeedBtn').addEventListener('click', refreshFeed);
  $('#searchInput').addEventListener('input', e => renderSearchResults(e.target.value));
  $('#chatForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#chatInput');
    const text = input.value.trim();
    if (!text) return;
    threads[state.activeThread].messages.push(['You', text]);
    input.value = '';
    renderThreads();
    showToast('Message sent in demo');
  });
  $('#newThreadBtn').addEventListener('click', () => showToast('New group creation would connect to backend in MVP'));
  $('#commentForm').addEventListener('submit', e => {
    e.preventDefault();
    const text = $('#commentInput').value.trim();
    if (!text || !state.currentCommentsReel) return;
    state.comments[state.currentCommentsReel] = state.comments[state.currentCommentsReel] || [];
    state.comments[state.currentCommentsReel].push(text);
    $('#commentInput').value = '';
    persist(); openComments(state.currentCommentsReel); renderReels(); showToast('Comment added');
  });
  $('#quizOptions').addEventListener('click', e => {
    const btn = e.target.closest('button[data-answer]');
    if (!btn) return;
    const reel = reels.find(item => item.id === state.currentReelId) || reels[0];
    const answer = btn.dataset.answer;
    $$('#quizOptions button').forEach(b => b.disabled = true);
    if (answer === reel.answer) {
      btn.classList.add('correct');
      state.xp += 10; state.lessons += 1; persist(); renderAnalytics(); renderProfile();
      $('#quizFeedback').textContent = 'Correct. +10 XP added to your learning analytics.';
    } else {
      btn.classList.add('wrong');
      $$('#quizOptions button').find(b => b.dataset.answer === reel.answer)?.classList.add('correct');
      $('#quizFeedback').textContent = `Close. Correct answer: ${reel.answer}.`;
    }
  });
  $('#uploadFile').addEventListener('change', e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (state.uploadObjectUrl) URL.revokeObjectURL(state.uploadObjectUrl);
    state.uploadObjectUrl = URL.createObjectURL(file);
    const preview = $('#uploadPreview');
    preview.src = state.uploadObjectUrl;
    preview.hidden = false;
    preview.play().catch(() => {});
  });
  $('#publishBtn').addEventListener('click', () => {
    const title = $('#uploadTitle').value.trim() || 'Useful demo reel';
    const desc = $('#uploadCaption').value.trim() || 'A useful short lesson created in the prototype.';
    const id = 'local-' + Date.now();
    reels.unshift({ id, topic: state.selectedUploadCategory, source: 'local', localSrc: state.uploadObjectUrl || 'assets/videos/ai_prompt_formula.mp4', title, desc, creator: '@you', badge: 'Creator upload demo', duration: '0:30', xp: 15, likes: 0, comments: 0, saves: 0, quiz: 'What should a useful reel include?', options: ['Clear lesson and action step', 'Only noise', 'No context'], answer: 'Clear lesson and action step', summary: title + ' teaches one useful idea.' });
    state.activeTopic = 'For You'; renderReels(); openScreen('feed'); $('#reels').scrollTop = 0; showToast('Demo reel published');
  });
  $('#ideaBtn').addEventListener('click', () => {
    const ideas = [
      ['Cyber habit that prevents account takeover', 'Use unique passwords, turn on 2FA, and review recovery email security.'],
      ['Cloud VPC explained with a house example', 'Subnets are rooms, route tables are doors, and security groups are locks.'],
      ['Resume bullet formula recruiters understand', 'Action verb + task + metric + business result.']
    ];
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    $('#uploadTitle').value = idea[0]; $('#uploadCaption').value = idea[1]; showToast('Useful reel idea generated');
  });
  $('#billingToggle').addEventListener('click', e => {
    const btn = e.target.closest('button[data-billing]');
    if (!btn) return;
    $$('#billingToggle button').forEach(b => b.classList.toggle('active', b === btn));
    $('#priceText').textContent = btn.dataset.billing === 'yearly' ? '$39.99/yr' : '$4.99/mo';
  });
  $('#unlockBtn').addEventListener('click', () => { state.premium = true; persist(); renderPremium(); renderReels(); showToast('Premium demo unlocked'); });
  $('#watchPremiumBtn').addEventListener('click', () => jumpToTopic('Premium'));

  $('#launchDemoBtn').addEventListener('click', openFullscreen);
  $('#navLaunchBtn').addEventListener('click', openFullscreen);
  $('#desktopFullscreenBtn').addEventListener('click', openFullscreen);
  $('#closeFullscreenBtn').addEventListener('click', closeFullscreen);
  $('#resetDemoBtn').addEventListener('click', resetDemo);
  $('#navThemeBtn').addEventListener('click', openThemeDrawer);
  $('#toolbarThemeBtn').addEventListener('click', openThemeDrawer);
  $('#themeFab').addEventListener('click', openThemeDrawer);
  $('#closeThemeBtn').addEventListener('click', closeThemeDrawer);
  $('#applyCustomTheme').addEventListener('click', applyCustomTheme);
  $('#copyThemeBtn').addEventListener('click', () => {
    navigator.clipboard?.writeText($('#colorCode').textContent).then(() => showToast('CSS colors copied')).catch(() => showToast('Color code ready'));
  });
  $('#primaryPicker').addEventListener('input', () => updateColorCode($('#primaryPicker').value, $('#secondaryPicker').value));
  $('#secondaryPicker').addEventListener('input', () => updateColorCode($('#primaryPicker').value, $('#secondaryPicker').value));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeThemeDrawer(); closeFullscreen(); $$('.modal-backdrop.show').forEach(m => closeModal(m.id)); } });
}

function initTheme() {
  const saved = localStorage.getItem('doom_theme') || 'ionized';
  if (saved === 'custom') {
    document.body.dataset.theme = 'custom';
    const p = localStorage.getItem('doom_custom_primary') || '#6d5dfc';
    const s = localStorage.getItem('doom_custom_secondary') || '#00d4ff';
    document.body.style.setProperty('--primary', p);
    document.body.style.setProperty('--secondary', s);
    $('#primaryPicker').value = p; $('#secondaryPicker').value = s; updateColorCode(p, s);
  } else applyTheme(saved);
  updateThemeOptions();
}
function init() {
  initTheme();
  renderTabs(); renderReels(); renderSearchControls(); renderSearchResults(); renderProfile(); renderThreads(); renderUploadCategories(); renderPremium(); renderAnalytics();
  bindEvents(); bindPullToRefresh(); updateTime(); setInterval(updateTime, 30000);
}
init();
