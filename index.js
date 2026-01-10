// RenoRef Pro - Competition Edition JavaScript
// State Management + 4-Tab Logic

// ============ GLOBAL STATE ============
let appState = {
  currentView: 'arena',
  arena: {
    winner: null,
    dilemma: null,
    constraints: {}
  },
  studio: {
    roomSize: null,
    vibe: null
  }
};

// ============ DATA STRUCTURES ============

// Material Scoring Rules
const renovationData = {
  flooring: {
    name: "Flooring",
    options: ["Tile", "Wood"],
    scoring: {
      budget: { low: { Tile: 2, Wood: -1 }, medium: { Tile: 1, Wood: 1 }, high: { Tile: 0, Wood: 2 } },
      pets: { true: { Tile: 3, Wood: -2 }, false: { Tile: 0, Wood: 1 } },
      climate: { humid: { Tile: 2, Wood: -1 }, dry: { Tile: 0, Wood: 1 }, cold: { Tile: -1, Wood: 2 } }
    },
    pricing: { Tile: { material: 4.50, labor: 3.25 }, Wood: { material: 8.75, labor: 4.50 } },
    tradeOffs: {
      Tile: "Tiles are durable and easy to clean, but they feel cold underfoot in winter.",
      Wood: "Wood is warm and beautiful, but it's vulnerable to scratches and moisture damage."
    },
    pros: {
      Tile: ["Highly durable", "Water resistant", "Easy to clean", "Budget-friendly", "Great for pets"],
      Wood: ["Warm underfoot", "Natural beauty", "Adds home value", "Can be refinished", "Great insulation"]
    }
  },
  wallFinish: {
    name: "Wall Finish",
    options: ["Paint", "Wallpaper"],
    scoring: {
      budget: { low: { Paint: 3, Wallpaper: -1 }, medium: { Paint: 1, Wallpaper: 0 }, high: { Paint: 0, Wallpaper: 2 } },
      pets: { true: { Paint: 2, Wallpaper: -2 }, false: { Paint: 0, Wallpaper: 1 } },
      climate: { humid: { Paint: 1, Wallpaper: -1 }, dry: { Paint: 0, Wallpaper: 1 }, cold: { Paint: 0, Wallpaper: 0 } }
    },
    pricing: { Paint: { material: 2.25, labor: 1.75 }, Wallpaper: { material: 6.50, labor: 4.25 } },
    tradeOffs: {
      Paint: "Paint is affordable and easy to change, but it shows wall imperfections.",
      Wallpaper: "Wallpaper creates stunning patterns, but it's expensive to remove."
    },
    pros: {
      Paint: ["Very affordable", "Easy to DIY", "Quick to change", "Many finishes", "Easy touch-ups"],
      Wallpaper: ["Rich textures", "Hides imperfections", "Dramatic impact", "Long-lasting", "Unique patterns"]
    }
  },
  lighting: {
    name: "Lighting",
    options: ["Warm", "Cool"],
    scoring: {
      budget: { low: { Warm: 1, Cool: 1 }, medium: { Warm: 1, Cool: 1 }, high: { Warm: 2, Cool: 1 } },
      pets: { true: { Warm: 1, Cool: 0 }, false: { Warm: 0, Cool: 0 } },
      climate: { humid: { Warm: 0, Cool: 1 }, dry: { Warm: 1, Cool: 0 }, cold: { Warm: 2, Cool: -1 } }
    },
    pricing: { Warm: { material: 12.50, labor: 8.00 }, Cool: { material: 10.75, labor: 8.00 } },
    tradeOffs: {
      Warm: "Warm lighting is cozy, but it can make colors look different and strain eyes for detailed work.",
      Cool: "Cool lighting is great for productivity, but it can feel harsh and unwelcoming."
    },
    pros: {
      Warm: ["Cozy atmosphere", "Better for sleep", "Natural skin tones", "Relaxing", "Comfortable"],
      Cool: ["Great for work", "Makes space bigger", "Better color accuracy", "Energizing", "More efficient"]
    }
  }
};

// Style Data - Maps Materials to Furniture Suggestions
const styleData = {
  // Material-based suggestions (from Arena winner)
  materialSuggestions: {
    Tile: {
      furniture: ["Metal Frame Furniture", "Glass Coffee Tables", "Industrial Shelving"],
      extras: ["Edison Bulb Pendants", "Concrete Planters", "Metal Wall Art"],
      vibe: "industrial"
    },
    Wood: {
      furniture: ["Leather Sofas", "Wooden Coffee Tables", "Woven Baskets"],
      extras: ["Warm Throw Blankets", "Natural Fiber Rugs", "Botanical Prints"],
      vibe: "rustic"
    },
    Paint: {
      furniture: ["Minimalist Sectional", "Acrylic Side Tables", "Floating Shelves"],
      extras: ["Abstract Art", "Geometric Planters", "Chrome Accents"],
      vibe: "modern"
    },
    Wallpaper: {
      furniture: ["Velvet Armchairs", "Ornate Mirrors", "Tufted Ottoman"],
      extras: ["Decorative Pillows", "Vintage Lamps", "Gallery Wall Frames"],
      vibe: "rustic"
    },
    Warm: {
      furniture: ["Plush Sofas", "Wooden Side Tables", "Cozy Armchairs"],
      extras: ["Candle Holders", "Soft Textiles", "Warm-Toned Art"],
      vibe: "rustic"
    },
    Cool: {
      furniture: ["Sleek Desk Setup", "Ergonomic Chair", "Metal Bookshelf"],
      extras: ["Task Lighting", "Minimalist Clock", "Tech Organizers"],
      vibe: "modern"
    }
  },

  // Room Size + Vibe combinations
  combinations: {
    small: {
      modern: {
        layout: "Low-Profile Furniture with Hidden Storage",
        tradeOff: "Less visible storage space, but the room appears 2x larger",
        pieces: ["Platform Bed", "Floating Shelves", "Nesting Tables", "Wall-Mounted TV"],
        palette: [
          { name: "Pure White", hex: "#FFFFFF" },
          { name: "Charcoal", hex: "#2C3E50" },
          { name: "Electric Blue", hex: "#3498DB" }
        ]
      },
      rustic: {
        layout: "Multi-functional Vintage Pieces",
        tradeOff: "Limited seating options, but authentic character preserved",
        pieces: ["Storage Bench", "Ladder Shelf", "Trunk Coffee Table", "Wicker Baskets"],
        palette: [
          { name: "Warm Cream", hex: "#F5E6D3" },
          { name: "Saddle Brown", hex: "#8B4513" },
          { name: "Forest Green", hex: "#228B22" }
        ]
      },
      industrial: {
        layout: "Wall-Mounted Shelving with Compact Seating",
        tradeOff: "Reduced floor comfort, but maximum floor space maintained",
        pieces: ["Pipe Shelving", "Metal Stool", "Folding Desk", "Wire Baskets"],
        palette: [
          { name: "Dark Charcoal", hex: "#2F2F2F" },
          { name: "Copper", hex: "#B87333" },
          { name: "Safety Yellow", hex: "#F4C430" }
        ]
      }
    },
    medium: {
      modern: {
        layout: "Modular Sectional with Statement Lighting",
        tradeOff: "Higher cost for quality pieces, but flexible arrangement options",
        pieces: ["L-Shaped Sectional", "Arc Floor Lamp", "Glass Coffee Table", "Media Console"],
        palette: [
          { name: "Cool Gray", hex: "#E5E5E5" },
          { name: "Navy", hex: "#1A365D" },
          { name: "Coral", hex: "#FF6B6B" }
        ]
      },
      rustic: {
        layout: "Farmhouse Table with Mixed Seating",
        tradeOff: "Requires more maintenance, but creates warm gathering space",
        pieces: ["Farmhouse Dining Table", "Windsor Chairs", "Bench Seating", "Hutch Cabinet"],
        palette: [
          { name: "Antique White", hex: "#FAEBD7" },
          { name: "Barn Red", hex: "#7C0A02" },
          { name: "Sage Green", hex: "#9CAF88" }
        ]
      },
      industrial: {
        layout: "Metal Frame Furniture with Leather Accents",
        tradeOff: "Can feel cold, but extremely durable and timeless",
        pieces: ["Leather Sofa", "Metal Coffee Table", "Factory Cart Bar", "Edison Pendant"],
        palette: [
          { name: "Concrete Gray", hex: "#95A5A6" },
          { name: "Rust", hex: "#B7410E" },
          { name: "Brass", hex: "#D4AF37" }
        ]
      }
    },
    large: {
      modern: {
        layout: "Zoned Layout with Designer Anchor Pieces",
        tradeOff: "Significant investment required, but creates magazine-worthy space",
        pieces: ["Designer Sofa", "Statement Art", "Sculptural Lighting", "Area Rugs for Zones"],
        palette: [
          { name: "Bright White", hex: "#FFFFFF" },
          { name: "Black", hex: "#000000" },
          { name: "Gold", hex: "#FFD700" }
        ]
      },
      rustic: {
        layout: "Oversized Comfort Pieces with Natural Textures",
        tradeOff: "Can overwhelm smaller furniture, but ultimate comfort achieved",
        pieces: ["Oversized Sectional", "Reclaimed Wood Table", "Stone Fireplace", "Woven Textiles"],
        palette: [
          { name: "Linen", hex: "#FAF0E6" },
          { name: "Walnut", hex: "#5D432C" },
          { name: "Terracotta", hex: "#E2725B" }
        ]
      },
      industrial: {
        layout: "Open Plan with Statement Industrial Fixtures",
        tradeOff: "Acoustics may suffer, but dramatic visual impact guaranteed",
        pieces: ["Warehouse Pendant Cluster", "Concrete Dining Table", "Metal Bookshelf Wall", "Exposed Ductwork"],
        palette: [
          { name: "Raw Concrete", hex: "#8B8B8B" },
          { name: "Matte Black", hex: "#1C1C1C" },
          { name: "Neon Orange", hex: "#FF6600" }
        ]
      }
    }
  }
};

// Reddit Threads Data
const redditThreads = {
  general: [
    { title: "First time renovating - What I wish I knew", author: "NewHomeowner", subreddit: "r/HomeImprovement", upvotes: 2341, comments: 187 },
    { title: "Budget renovation tips that actually work", author: "FrugalRenovator", subreddit: "r/DIY", upvotes: 1892, comments: 234 },
    { title: "Contractor horror stories - Learn from my mistakes", author: "LessonLearned", subreddit: "r/HomeImprovement", upvotes: 3456, comments: 412 }
  ],
  tile: [
    { title: "Why I regret wood floors - 2 years later", author: "TileConvert", subreddit: "r/HomeImprovement", upvotes: 1247, comments: 89 },
    { title: "Best grout colors for 2026", author: "TileProInstaller", subreddit: "r/Tile", upvotes: 892, comments: 156 },
    { title: "Porcelain vs Ceramic: The ultimate showdown", author: "FlooringExpert", subreddit: "r/Flooring", upvotes: 634, comments: 78 }
  ],
  wood: [
    { title: "Hardwood maintenance tips that actually work", author: "WoodFloorLover", subreddit: "r/Flooring", upvotes: 2156, comments: 234 },
    { title: "Pet damage on hardwood - My $3000 mistake", author: "DogOwnerRegrets", subreddit: "r/HomeImprovement", upvotes: 1834, comments: 167 },
    { title: "Engineered vs Solid hardwood - 5 year comparison", author: "FlooringContractor", subreddit: "r/Flooring", upvotes: 945, comments: 123 }
  ],
  modern: [
    { title: "Minimalist living room transformation", author: "ModernMinimalist", subreddit: "r/InteriorDesign", upvotes: 3421, comments: 287 },
    { title: "Best modern furniture brands under $2000", author: "BudgetDesigner", subreddit: "r/malelivingspace", upvotes: 1567, comments: 198 }
  ],
  rustic: [
    { title: "DIY farmhouse table build - Complete guide", author: "WoodworkingDad", subreddit: "r/DIY", upvotes: 4521, comments: 312 },
    { title: "Rustic decor that doesn't look dated", author: "InteriorPro", subreddit: "r/HomeDecorating", upvotes: 2134, comments: 178 }
  ],
  industrial: [
    { title: "Loft conversion with exposed brick - Before/After", author: "LoftLiving", subreddit: "r/AmateurRoomPorn", upvotes: 5678, comments: 423 },
    { title: "Where to find authentic industrial furniture", author: "VintageHunter", subreddit: "r/InteriorDesign", upvotes: 1892, comments: 156 }
  ]
};

// Pro Tips
const proTips = {
  arena: "💡 TIP: Consider your lifestyle first - pets and kids need durable materials!",
  lab: "💡 TIP: Always add 10-15% extra for waste and unexpected repairs.",
  studio: "💡 TIP: The 60-30-10 rule: 60% dominant color, 30% secondary, 10% accent.",
  pulse: "💡 TIP: Real user experiences are gold - learn from others' mistakes!",
  tile: "💡 TIP: Porcelain tiles are 30% stronger than ceramic for high-traffic areas.",
  wood: "💡 TIP: Acclimate hardwood for 72 hours before installation to prevent warping.",
  industrial: "💡 TIP: Edison bulbs pair perfectly with industrial concrete and metal finishes."
};


// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  switchTab('arena');
  updatePulse();
}

function setupEventListeners() {
  // Arena form
  const arenaInputs = ['dilemmaSelect', 'budgetSelect', 'climateSelect', 'roomAreaInput'];
  arenaInputs.forEach(id => {
    document.getElementById(id).addEventListener('change', validateArenaForm);
    document.getElementById(id).addEventListener('input', validateArenaForm);
  });
  
  document.querySelectorAll('input[name="pets"]').forEach(radio => {
    radio.addEventListener('change', validateArenaForm);
  });
  
  document.getElementById('refereeBtn').addEventListener('click', handleArenaSubmit);
  
  // Lab calculator
  ['calcRoomArea', 'calcMaterialCost', 'calcLaborCost'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateLabCalculations);
  });
  
  // Studio selectors
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => selectSize(btn.dataset.size));
  });
  
  document.querySelectorAll('.vibe-btn').forEach(btn => {
    btn.addEventListener('click', () => selectVibe(btn.dataset.vibe));
  });
  
  document.getElementById('studioBtn').addEventListener('click', handleStudioSubmit);
}

// ============ TAB SWITCHING ============
function switchTab(tabId) {
  // Update views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelector(`[data-view="${tabId}"]`).classList.add('active');
  
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-target="${tabId}"]`).classList.add('active');
  
  appState.currentView = tabId;
  
  // Show pro tip
  showProTip(proTips[tabId]);
  
  // Update view-specific content
  if (tabId === 'lab') updateLabFromArena();
  if (tabId === 'studio') updateStudioFromArena();
  if (tabId === 'pulse') updatePulse();
}

// ============ ARENA LOGIC ============
function validateArenaForm() {
  const dilemma = document.getElementById('dilemmaSelect').value;
  const budget = document.getElementById('budgetSelect').value;
  const climate = document.getElementById('climateSelect').value;
  const roomArea = document.getElementById('roomAreaInput').value;
  const pets = document.querySelector('input[name="pets"]:checked');
  
  const isValid = dilemma && budget && climate && roomArea && pets;
  document.getElementById('refereeBtn').disabled = !isValid;
}

function handleArenaSubmit() {
  showLoading();
  
  setTimeout(() => {
    const constraints = {
      dilemma: document.getElementById('dilemmaSelect').value,
      budget: document.getElementById('budgetSelect').value,
      climate: document.getElementById('climateSelect').value,
      roomArea: parseFloat(document.getElementById('roomAreaInput').value),
      pets: document.querySelector('input[name="pets"]:checked').value === 'true'
    };
    
    const result = calculateWinner(constraints);
    displayArenaResults(result);
    
    // Update global state
    appState.arena.winner = result.winner;
    appState.arena.dilemma = constraints.dilemma;
    appState.arena.constraints = constraints;
    
    hideLoading();
    showProTip(proTips[result.winner.toLowerCase()] || proTips.arena);
  }, 1500);
}

function calculateWinner(constraints) {
  const data = renovationData[constraints.dilemma];
  const scores = {};
  
  data.options.forEach(opt => scores[opt] = 0);
  
  // Apply scoring
  ['budget', 'climate'].forEach(key => {
    const rules = data.scoring[key][constraints[key]];
    if (rules) {
      Object.keys(rules).forEach(opt => scores[opt] += rules[opt]);
    }
  });
  
  // Pets scoring
  const petRules = data.scoring.pets[constraints.pets];
  if (petRules) {
    Object.keys(petRules).forEach(opt => scores[opt] += petRules[opt]);
  }
  
  const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  
  return {
    winner,
    tradeOff: data.tradeOffs[winner],
    pros: data.pros[winner],
    pricing: data.pricing[winner],
    dilemmaName: data.name
  };
}

function displayArenaResults(result) {
  document.getElementById('arenaResults').classList.remove('hidden');
  document.getElementById('winnerName').textContent = result.winner;
  document.getElementById('winnerReasoning').textContent = `${result.winner} wins for your ${result.dilemmaName.toLowerCase()} based on your constraints.`;
  document.getElementById('tradeoffText').textContent = result.tradeOff;
  
  // Pros list
  const prosList = document.getElementById('prosList');
  prosList.innerHTML = '';
  result.pros.forEach(pro => {
    const li = document.createElement('li');
    li.textContent = pro;
    prosList.appendChild(li);
  });
  
  // Update cube
  const cube = document.getElementById('materialCube');
  cube.className = 'cube ' + result.winner.toLowerCase();
  
  // Scroll to results
  document.getElementById('arenaResults').scrollIntoView({ behavior: 'smooth' });
}

// ============ LAB LOGIC ============
function updateLabFromArena() {
  if (appState.arena.winner) {
    const data = renovationData[appState.arena.dilemma];
    const pricing = data.pricing[appState.arena.winner];
    
    document.getElementById('labMaterialDisplay').classList.remove('hidden');
    document.getElementById('labSelectedMaterial').textContent = `${appState.arena.winner} (${data.name})`;
    
    document.getElementById('calcRoomArea').value = appState.arena.constraints.roomArea || '';
    document.getElementById('calcMaterialCost').value = pricing.material;
    document.getElementById('calcLaborCost').value = pricing.labor;
    
    updateLabCalculations();
  }
}

function updateLabCalculations() {
  const area = parseFloat(document.getElementById('calcRoomArea').value) || 0;
  const materialCost = parseFloat(document.getElementById('calcMaterialCost').value) || 0;
  const laborCost = parseFloat(document.getElementById('calcLaborCost').value) || 0;
  
  const totalMaterial = area * materialCost;
  const totalLabor = area * laborCost;
  const subtotal = totalMaterial + totalLabor;
  const tax = subtotal * 0.085;
  const total = subtotal + tax;
  
  document.getElementById('totalMaterialCost').textContent = formatCurrency(totalMaterial);
  document.getElementById('totalLaborCost').textContent = formatCurrency(totalLabor);
  document.getElementById('totalTax').textContent = formatCurrency(tax);
  document.getElementById('totalProjectCost').textContent = formatCurrency(total);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}


// ============ STUDIO LOGIC ============
function updateStudioFromArena() {
  if (appState.arena.winner) {
    document.getElementById('studioMaterialContext').classList.remove('hidden');
    document.getElementById('studioLinkedMaterial').textContent = `${appState.arena.winner} from Arena`;
    
    // Auto-suggest vibe based on material
    const suggestion = styleData.materialSuggestions[appState.arena.winner];
    if (suggestion) {
      selectVibe(suggestion.vibe);
    }
  }
}

function selectSize(size) {
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-size="${size}"]`).classList.add('active');
  appState.studio.roomSize = size;
  validateStudioForm();
}

function selectVibe(vibe) {
  document.querySelectorAll('.vibe-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-vibe="${vibe}"]`).classList.add('active');
  appState.studio.vibe = vibe;
  validateStudioForm();
}

function validateStudioForm() {
  const isValid = appState.studio.roomSize && appState.studio.vibe;
  document.getElementById('studioBtn').disabled = !isValid;
}

function handleStudioSubmit() {
  showLoading();
  
  setTimeout(() => {
    const recommendation = generateStudioRecommendation();
    displayStudioResults(recommendation);
    hideLoading();
    showProTip(proTips[appState.studio.vibe] || proTips.studio);
  }, 1200);
}

function generateStudioRecommendation() {
  const { roomSize, vibe } = appState.studio;
  const combo = styleData.combinations[roomSize][vibe];
  
  // Get material-linked extras if available
  let materialExtras = null;
  if (appState.arena.winner) {
    materialExtras = styleData.materialSuggestions[appState.arena.winner];
  }
  
  return {
    ...combo,
    materialExtras
  };
}

function displayStudioResults(rec) {
  document.getElementById('studioResults').classList.remove('hidden');
  document.getElementById('blueprintTitle').textContent = rec.layout;
  document.getElementById('studioTradeoff').textContent = rec.tradeOff;
  
  // Furniture list
  const furnitureList = document.getElementById('furnitureList');
  furnitureList.innerHTML = '';
  rec.pieces.forEach(piece => {
    const li = document.createElement('li');
    li.textContent = piece;
    furnitureList.appendChild(li);
  });
  
  // Color palette
  const palette = document.getElementById('colorPalette');
  palette.innerHTML = '';
  rec.palette.forEach(color => {
    const chip = document.createElement('div');
    chip.className = 'paint-chip';
    chip.innerHTML = `
      <div class="paint-chip-color" style="background: ${color.hex};"></div>
      <div class="paint-chip-label">
        <span class="paint-chip-name">${color.name}</span>
        <span class="paint-chip-hex">${color.hex}</span>
      </div>
    `;
    palette.appendChild(chip);
  });
  
  // Material-linked extras
  if (rec.materialExtras) {
    document.getElementById('materialSuggestions').classList.remove('hidden');
    const extrasList = document.getElementById('materialExtras');
    extrasList.innerHTML = '';
    rec.materialExtras.extras.forEach(extra => {
      const li = document.createElement('li');
      li.textContent = extra;
      extrasList.appendChild(li);
    });
  }
  
  document.getElementById('studioResults').scrollIntoView({ behavior: 'smooth' });
}

// ============ PULSE LOGIC ============
function updatePulse() {
  let threads = [...redditThreads.general];
  let topic = "General Renovation";
  
  // Add material-specific threads
  if (appState.arena.winner) {
    const key = appState.arena.winner.toLowerCase();
    if (redditThreads[key]) {
      threads = [...redditThreads[key], ...threads];
      topic = appState.arena.winner;
    }
  }
  
  // Add style-specific threads
  if (appState.studio.vibe) {
    if (redditThreads[appState.studio.vibe]) {
      threads = [...redditThreads[appState.studio.vibe], ...threads];
      topic = appState.studio.vibe.charAt(0).toUpperCase() + appState.studio.vibe.slice(1) + " Style";
    }
  }
  
  // Remove duplicates and limit
  threads = threads.slice(0, 6);
  
  document.getElementById('trendingTopic').textContent = topic;
  
  const feed = document.getElementById('redditFeed');
  feed.innerHTML = '';
  
  threads.forEach(thread => {
    const card = document.createElement('div');
    card.className = 'reddit-card';
    card.innerHTML = `
      <div class="reddit-vote">
        <div class="vote-arrow"></div>
        <div class="vote-count">${thread.upvotes}</div>
      </div>
      <div class="reddit-content">
        <div class="reddit-title">${thread.title}</div>
        <div class="reddit-meta">
          <span class="reddit-author">u/${thread.author}</span>
          <span>${thread.subreddit}</span>
          <span>💬 ${thread.comments}</span>
        </div>
      </div>
    `;
    feed.appendChild(card);
  });
}

// ============ UI HELPERS ============
function showProTip(message) {
  const toast = document.getElementById('proTipToast');
  document.getElementById('proTipText').textContent = message;
  toast.classList.add('visible');
  
  setTimeout(() => hideProTip(), 5000);
}

function hideProTip() {
  document.getElementById('proTipToast').classList.remove('visible');
}

function showLoading() {
  document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.add('hidden');
}
