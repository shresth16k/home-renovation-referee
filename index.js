// RenoRef — Premium Architecture App

// ============ STATE ============
const state = {
  currentTab: 'decide',
  decide: {
    category: null,
    budget: null,
    roomSize: null,
    pets: null,
    climate: null,
    winner: null
  },
  design: {
    size: null,
    style: null
  }
};

// ============ DATA ============
const materials = {
  flooring: {
    name: "Flooring",
    options: ["Hardwood", "Tile"],
    hardwood: {
      pros: ["Warm and comfortable underfoot", "Adds value to your home", "Natural, timeless beauty", "Can be refinished multiple times"],
      tradeOff: "Hardwood requires 2x more maintenance than tile and is sensitive to moisture and scratches.",
      price: { material: 8.50, labor: 4.50 }
    },
    tile: {
      pros: ["Highly durable and long-lasting", "Water and stain resistant", "Easy to clean and maintain", "More budget-friendly option"],
      tradeOff: "Tile feels cold underfoot in winter and can be slippery when wet.",
      price: { material: 4.50, labor: 3.25 }
    },
    scoring: {
      budget: { economy: { Hardwood: -1, Tile: 2 }, standard: { Hardwood: 1, Tile: 1 }, premium: { Hardwood: 2, Tile: 0 } },
      pets: { yes: { Hardwood: -2, Tile: 3 }, no: { Hardwood: 1, Tile: 0 } },
      climate: { humid: { Hardwood: -1, Tile: 2 }, dry: { Hardwood: 1, Tile: 0 }, cold: { Hardwood: 2, Tile: -1 } }
    }
  },
  walls: {
    name: "Wall Finish",
    options: ["Paint", "Wallpaper"],
    paint: {
      pros: ["Very affordable option", "Easy to apply yourself", "Simple to change colors", "Quick touch-ups possible"],
      tradeOff: "Paint may show wall imperfections and typically needs repainting every 5-7 years.",
      price: { material: 2.25, labor: 1.75 }
    },
    wallpaper: {
      pros: ["Rich textures and patterns", "Hides wall imperfections", "Long-lasting when installed properly", "Creates dramatic visual impact"],
      tradeOff: "Wallpaper is expensive to remove and difficult to repair if damaged.",
      price: { material: 6.50, labor: 4.25 }
    },
    scoring: {
      budget: { economy: { Paint: 3, Wallpaper: -1 }, standard: { Paint: 1, Wallpaper: 0 }, premium: { Paint: 0, Wallpaper: 2 } },
      pets: { yes: { Paint: 2, Wallpaper: -2 }, no: { Paint: 0, Wallpaper: 1 } },
      climate: { humid: { Paint: 1, Wallpaper: -1 }, dry: { Paint: 0, Wallpaper: 1 }, cold: { Paint: 0, Wallpaper: 0 } }
    }
  },
  lighting: {
    name: "Lighting",
    options: ["Warm", "Cool"],
    warm: {
      pros: ["Creates cozy atmosphere", "Better for relaxation", "Flattering for skin tones", "Promotes better sleep"],
      tradeOff: "Warm lighting can make colors appear different and may strain eyes for detailed work.",
      price: { material: 12.50, labor: 8.00 }
    },
    cool: {
      pros: ["Excellent for task lighting", "Makes spaces feel larger", "Better color accuracy", "More energizing"],
      tradeOff: "Cool lighting can feel harsh and less welcoming for relaxation areas.",
      price: { material: 10.75, labor: 8.00 }
    },
    scoring: {
      budget: { economy: { Warm: 1, Cool: 1 }, standard: { Warm: 1, Cool: 1 }, premium: { Warm: 2, Cool: 1 } },
      pets: { yes: { Warm: 1, Cool: 0 }, no: { Warm: 0, Cool: 0 } },
      climate: { humid: { Warm: 0, Cool: 1 }, dry: { Warm: 1, Cool: 0 }, cold: { Warm: 2, Cool: -1 } }
    }
  }
};

const styleRecommendations = {
  small: {
    modern: {
      layout: "Opt for low-profile furniture with hidden storage to maximize your space.",
      pieces: ["Platform bed", "Floating shelves", "Nesting tables", "Wall-mounted TV"],
      palette: [{ name: "White", hex: "#FFFFFF" }, { name: "Charcoal", hex: "#2C3E50" }, { name: "Blue", hex: "#4A90E2" }],
      note: "Trade-off: Less visible storage, but your room will appear twice as large."
    },
    rustic: {
      layout: "Choose multi-functional vintage pieces that add character without clutter.",
      pieces: ["Storage bench", "Ladder shelf", "Trunk coffee table", "Wicker baskets"],
      palette: [{ name: "Cream", hex: "#F5E6D3" }, { name: "Brown", hex: "#8B4513" }, { name: "Green", hex: "#228B22" }],
      note: "Trade-off: Limited seating options, but authentic character is preserved."
    },
    industrial: {
      layout: "Use wall-mounted shelving and compact seating to keep floors clear.",
      pieces: ["Pipe shelving", "Metal stool", "Folding desk", "Wire baskets"],
      palette: [{ name: "Charcoal", hex: "#2F2F2F" }, { name: "Copper", hex: "#B87333" }, { name: "Yellow", hex: "#F4C430" }],
      note: "Trade-off: Less floor comfort, but maximum floor space is maintained."
    }
  },
  medium: {
    modern: {
      layout: "A modular sectional with statement lighting creates flexibility and style.",
      pieces: ["L-shaped sectional", "Arc floor lamp", "Glass coffee table", "Media console"],
      palette: [{ name: "Gray", hex: "#E5E5E5" }, { name: "Navy", hex: "#1A365D" }, { name: "Coral", hex: "#FF6B6B" }],
      note: "Trade-off: Higher cost for quality pieces, but flexible arrangement options."
    },
    rustic: {
      layout: "A farmhouse table with mixed seating creates a warm gathering space.",
      pieces: ["Farmhouse table", "Windsor chairs", "Bench seating", "Hutch cabinet"],
      palette: [{ name: "Antique", hex: "#FAEBD7" }, { name: "Red", hex: "#7C0A02" }, { name: "Sage", hex: "#9CAF88" }],
      note: "Trade-off: Requires more maintenance, but creates inviting atmosphere."
    },
    industrial: {
      layout: "Metal frame furniture with leather accents offers durability and style.",
      pieces: ["Leather sofa", "Metal coffee table", "Factory cart bar", "Edison pendant"],
      palette: [{ name: "Concrete", hex: "#95A5A6" }, { name: "Rust", hex: "#B7410E" }, { name: "Brass", hex: "#D4AF37" }],
      note: "Trade-off: Can feel cold, but extremely durable and timeless."
    }
  },
  large: {
    modern: {
      layout: "Create zones with designer anchor pieces for a magazine-worthy space.",
      pieces: ["Designer sofa", "Statement art", "Sculptural lighting", "Area rugs"],
      palette: [{ name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#000000" }, { name: "Gold", hex: "#FFD700" }],
      note: "Trade-off: Significant investment required, but creates stunning impact."
    },
    rustic: {
      layout: "Oversized comfort pieces with natural textures create ultimate coziness.",
      pieces: ["Oversized sectional", "Reclaimed table", "Stone fireplace", "Woven textiles"],
      palette: [{ name: "Linen", hex: "#FAF0E6" }, { name: "Walnut", hex: "#5D432C" }, { name: "Terra", hex: "#E2725B" }],
      note: "Trade-off: Can overwhelm smaller furniture, but ultimate comfort achieved."
    },
    industrial: {
      layout: "Open plan with statement industrial fixtures creates dramatic impact.",
      pieces: ["Pendant cluster", "Concrete table", "Metal bookshelf", "Exposed elements"],
      palette: [{ name: "Concrete", hex: "#8B8B8B" }, { name: "Black", hex: "#1C1C1C" }, { name: "Orange", hex: "#FF6600" }],
      note: "Trade-off: Acoustics may suffer, but dramatic visual impact guaranteed."
    }
  }
};

const insights = {
  general: [
    { title: "What I learned after my first renovation project", source: "r/HomeImprovement", upvotes: 2341, comments: 187 },
    { title: "Budget tips that actually saved me money", source: "r/DIY", upvotes: 1892, comments: 234 },
    { title: "Questions to ask your contractor before signing", source: "r/HomeImprovement", upvotes: 3456, comments: 412 }
  ],
  hardwood: [
    { title: "5 years with hardwood floors - honest review", source: "r/Flooring", upvotes: 2156, comments: 234 },
    { title: "How I maintain my hardwood with two dogs", source: "r/HomeImprovement", upvotes: 1834, comments: 167 }
  ],
  tile: [
    { title: "Why I chose tile over hardwood - no regrets", source: "r/HomeImprovement", upvotes: 1247, comments: 89 },
    { title: "Best tile options for high-traffic areas", source: "r/Flooring", upvotes: 892, comments: 156 }
  ],
  modern: [
    { title: "Minimalist living room transformation", source: "r/InteriorDesign", upvotes: 3421, comments: 287 },
    { title: "Modern furniture brands worth the investment", source: "r/malelivingspace", upvotes: 1567, comments: 198 }
  ],
  rustic: [
    { title: "DIY farmhouse table - complete guide", source: "r/DIY", upvotes: 4521, comments: 312 },
    { title: "Rustic decor that doesn't look dated", source: "r/HomeDecorating", upvotes: 2134, comments: 178 }
  ],
  industrial: [
    { title: "Loft conversion with exposed brick - before/after", source: "r/AmateurRoomPorn", upvotes: 5678, comments: 423 },
    { title: "Finding authentic industrial furniture", source: "r/InteriorDesign", upvotes: 1892, comments: 156 }
  ]
};

// ============ BACKGROUND ROTATION ============
let currentBg = 1;
const totalBgs = 4;

function rotateBg() {
  document.querySelector(`.bg-${currentBg}`).classList.remove('active');
  currentBg = currentBg >= totalBgs ? 1 : currentBg + 1;
  document.querySelector(`.bg-${currentBg}`).classList.add('active');
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updateInsights();
  setInterval(rotateBg, 8000);
});

function setupEventListeners() {
  // Decide tab
  document.getElementById('categorySelect').addEventListener('change', validateDecideForm);
  document.getElementById('budgetSelect').addEventListener('change', validateDecideForm);
  document.getElementById('roomSizeInput').addEventListener('input', validateDecideForm);
  document.getElementById('climateSelect').addEventListener('change', validateDecideForm);
  
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.decide.pets = btn.dataset.value;
      validateDecideForm();
    });
  });
  
  document.getElementById('compareBtn').addEventListener('click', handleCompare);
  
  // Budget tab
  ['budgetSqFt', 'materialCost', 'laborCost'].forEach(id => {
    document.getElementById(id).addEventListener('input', calculateBudget);
  });
  
  // Design tab
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.design.size = btn.dataset.size;
      validateDesignForm();
    });
  });
  
  document.querySelectorAll('.style-option').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.style-option').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.design.style = card.dataset.style;
      validateDesignForm();
    });
  });
  
  document.getElementById('designBtn').addEventListener('click', handleDesign);
}

// ============ TAB SWITCHING ============
function switchTab(tabId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelector(`[data-view="${tabId}"]`).classList.add('active');
  
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-target="${tabId}"]`).classList.add('active');
  
  state.currentTab = tabId;
  
  if (tabId === 'budget') syncBudget();
  if (tabId === 'reviews') updateInsights();
}

// ============ DECIDE TAB ============
function validateDecideForm() {
  const category = document.getElementById('categorySelect').value;
  const budget = document.getElementById('budgetSelect').value;
  const roomSize = document.getElementById('roomSizeInput').value;
  const climate = document.getElementById('climateSelect').value;
  
  state.decide.category = category;
  state.decide.budget = budget;
  state.decide.roomSize = parseFloat(roomSize);
  state.decide.climate = climate;
  
  const isValid = category && budget && roomSize && state.decide.pets && climate;
  document.getElementById('compareBtn').disabled = !isValid;
}

function handleCompare() {
  const { category, pets } = state.decide;
  const data = materials[category];
  
  const scores = {};
  data.options.forEach(opt => scores[opt] = 0);
  
  ['budget', 'climate'].forEach(key => {
    const rules = data.scoring[key][state.decide[key]];
    if (rules) Object.keys(rules).forEach(opt => scores[opt] += rules[opt]);
  });
  
  const petRules = data.scoring.pets[pets];
  if (petRules) Object.keys(petRules).forEach(opt => scores[opt] += petRules[opt]);
  
  const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  state.decide.winner = winner;
  
  displayComparison(data, winner);
}

function displayComparison(data, winner) {
  const results = document.getElementById('comparisonResults');
  results.classList.remove('hidden');
  
  data.options.forEach((opt, i) => {
    const card = document.getElementById(i === 0 ? 'optionA' : 'optionB');
    const optData = data[opt.toLowerCase()];
    const isWinner = opt === winner;
    
    card.className = 'comparison-card' + (isWinner ? ' recommended' : '');
    card.innerHTML = `
      ${isWinner ? '<span class="recommended-badge">Best Match</span>' : ''}
      <h3 class="option-name">${opt}</h3>
      <ul class="pros-list">
        ${optData.pros.map(pro => `<li>${pro}</li>`).join('')}
      </ul>
    `;
  });
  
  const cube = document.getElementById('sampleCube');
  cube.className = 'sample-cube ' + winner.toLowerCase();
  
  const winnerData = data[winner.toLowerCase()];
  document.querySelector('#tradeOffNote p').textContent = winnerData.tradeOff;
  
  results.scrollIntoView({ behavior: 'smooth' });
}

// ============ BUDGET TAB ============
function syncBudget() {
  if (state.decide.winner && state.decide.category) {
    const data = materials[state.decide.category];
    const winnerData = data[state.decide.winner.toLowerCase()];
    
    document.getElementById('budgetMaterial').classList.remove('hidden');
    document.querySelector('#budgetMaterial strong').textContent = state.decide.winner;
    
    document.getElementById('budgetSqFt').value = state.decide.roomSize || '';
    document.getElementById('materialCost').value = winnerData.price.material;
    document.getElementById('laborCost').value = winnerData.price.labor;
    
    calculateBudget();
  }
}

function calculateBudget() {
  const sqFt = parseFloat(document.getElementById('budgetSqFt').value) || 0;
  const material = parseFloat(document.getElementById('materialCost').value) || 0;
  const labor = parseFloat(document.getElementById('laborCost').value) || 0;
  
  const materialTotal = sqFt * material;
  const laborTotal = sqFt * labor;
  const subtotal = materialTotal + laborTotal;
  const tax = subtotal * 0.085;
  const total = subtotal + tax;
  
  document.getElementById('materialTotal').textContent = formatCurrency(materialTotal);
  document.getElementById('laborTotal').textContent = formatCurrency(laborTotal);
  document.getElementById('taxTotal').textContent = formatCurrency(tax);
  document.getElementById('totalCost').textContent = total.toFixed(2);
  
  // Update ring
  const avgCost = 5000;
  const percent = Math.min((total / avgCost) * 100, 150);
  const offset = 314 - (314 * percent / 100);
  document.getElementById('budgetRing').style.strokeDashoffset = offset;
  document.getElementById('ringPercent').textContent = Math.round(percent) + '%';
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// ============ DESIGN TAB ============
function validateDesignForm() {
  const isValid = state.design.size && state.design.style;
  document.getElementById('designBtn').disabled = !isValid;
}

function handleDesign() {
  const { size, style } = state.design;
  const rec = styleRecommendations[size][style];
  
  document.getElementById('designResults').classList.remove('hidden');
  document.getElementById('layoutRecommendation').textContent = rec.layout;
  
  const furnitureList = document.getElementById('furnitureList');
  furnitureList.innerHTML = rec.pieces.map(p => `<span>${p}</span>`).join('');
  
  const palette = document.getElementById('colorPalette');
  palette.innerHTML = rec.palette.map(c => `
    <div class="color-swatch">
      <div class="swatch-color" style="background: ${c.hex}"></div>
      <span class="swatch-name">${c.name}</span>
      <span class="swatch-hex">${c.hex}</span>
    </div>
  `).join('');
  
  document.querySelector('#designNote p').textContent = rec.note;
  
  document.getElementById('designResults').scrollIntoView({ behavior: 'smooth' });
}

// ============ REVIEWS TAB ============
function updateInsights() {
  let items = [...insights.general];
  let topic = "General";
  
  if (state.decide.winner) {
    const key = state.decide.winner.toLowerCase();
    if (insights[key]) {
      items = [...insights[key], ...items];
      topic = state.decide.winner;
    }
  }
  
  if (state.design.style && insights[state.design.style]) {
    items = [...insights[state.design.style], ...items];
    topic = state.design.style.charAt(0).toUpperCase() + state.design.style.slice(1);
  }
  
  items = items.slice(0, 5);
  
  document.getElementById('topicValue').textContent = topic;
  
  const feed = document.getElementById('insightsFeed');
  feed.innerHTML = items.map(item => `
    <div class="insight-card">
      <div class="insight-title">${item.title}</div>
      <div class="insight-meta">
        <span class="insight-source">${item.source}</span>
        <span>↑ ${item.upvotes.toLocaleString()}</span>
        <span>💬 ${item.comments}</span>
      </div>
    </div>
  `).join('');
}
