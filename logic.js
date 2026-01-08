// Home Renovation Referee - Ultra Modern Edition
// Enhanced Decision Logic with Realistic Material Visualization & Cost Analysis

// Enhanced Renovation Data Structure with Pricing and Material Information
const renovationData = {
    flooring: {
        name: "Flooring Decision",
        options: ["Tile", "Wood"],
        scoringRules: {
            budget: {
                low: { Tile: 2, Wood: -1 },      // Tile is more budget-friendly
                medium: { Tile: 1, Wood: 1 },    // Both viable
                high: { Tile: 0, Wood: 2 }       // Wood premium options available
            },
            pets: {
                true: { Tile: 3, Wood: -2 },     // Tile much better for pets
                false: { Tile: 0, Wood: 1 }      // Wood slightly preferred without pets
            },
            climate: {
                humid: { Tile: 2, Wood: -1 },    // Tile handles moisture better
                dry: { Tile: 0, Wood: 1 },       // Wood fine in dry climates
                cold: { Tile: -1, Wood: 2 }      // Wood warmer underfoot
            }
        },
        pricing: {
            Tile: 4.50,    // Price per square foot in USD
            Wood: 8.75     // Price per square foot in USD
        },
        materials: {
            Tile: {
                class: 'material-tile',
                name: 'Premium Ceramic Tile',
                description: 'Durable, water-resistant ceramic tiles with modern geometric patterns. Perfect for high-traffic areas and pet-friendly homes.'
            },
            Wood: {
                class: 'material-wood',
                name: 'Hardwood Flooring',
                description: 'Beautiful natural hardwood with rich grain patterns. Adds warmth and premium value to any space.'
            }
        },
        tradeOffs: {
            Tile: {
                pets: "Tiles are durable against claws, but they will be cold underfoot in winter.",
                budget: "Tiles are cost-effective, but they can feel cold and hard on your feet.",
                climate: "Tiles handle moisture well, but they can be slippery when wet and cold in winter.",
                general: "Tiles are practical and durable, but they lack the warmth and comfort of natural materials."
            },
            Wood: {
                pets: "Wood feels warm and natural, but it's vulnerable to scratches and pet accidents.",
                budget: "Wood looks premium and feels warm, but it requires more maintenance and higher upfront costs.",
                climate: "Wood provides warmth and comfort, but it can warp or crack in humid conditions.",
                general: "Wood offers natural beauty and warmth, but it requires more care and is more expensive."
            }
        },
        pros: {
            Tile: [
                "Highly durable and scratch-resistant",
                "Easy to clean and maintain",
                "Water and stain resistant",
                "Good for high-traffic areas",
                "More budget-friendly option"
            ],
            Wood: [
                "Warm and comfortable underfoot",
                "Adds natural beauty and value",
                "Can be refinished multiple times",
                "Provides good insulation",
                "Premium aesthetic appeal"
            ]
        }
    },

    wallFinish: {
        name: "Wall Finish Decision",
        options: ["Paint", "Wallpaper"],
        scoringRules: {
            budget: {
                low: { Paint: 3, Wallpaper: -1 },    // Paint much cheaper
                medium: { Paint: 1, Wallpaper: 0 },   // Paint still better value
                high: { Paint: 0, Wallpaper: 2 }      // High-end wallpaper options
            },
            pets: {
                true: { Paint: 2, Wallpaper: -2 },    // Paint easier to clean/touch up
                false: { Paint: 0, Wallpaper: 1 }     // Wallpaper patterns nice without pets
            },
            climate: {
                humid: { Paint: 1, Wallpaper: -1 },   // Paint handles humidity better
                dry: { Paint: 0, Wallpaper: 1 },      // Both fine, wallpaper won't peel
                cold: { Paint: 0, Wallpaper: 0 }      // Climate doesn't affect much
            }
        },
        pricing: {
            Paint: 2.25,      // Price per square foot (wall coverage)
            Wallpaper: 6.50   // Price per square foot (wall coverage)
        },
        materials: {
            Paint: {
                class: 'material-paint',
                name: 'Premium Wall Paint',
                description: 'High-quality paint with excellent coverage and durability. Available in countless colors and finishes.'
            },
            Wallpaper: {
                class: 'material-wallpaper',
                name: 'Designer Wallpaper',
                description: 'Luxury wallpaper with intricate patterns and textures. Creates stunning visual impact and sophisticated ambiance.'
            }
        },
        tradeOffs: {
            Paint: {
                pets: "Paint is easy to touch up after pet damage, but it offers limited texture and pattern options.",
                budget: "Paint is very affordable and DIY-friendly, but it may need frequent touch-ups in high-traffic areas.",
                climate: "Paint handles humidity well, but it can show every wall imperfection and may need primer.",
                general: "Paint is versatile and affordable, but it lacks the visual impact of premium wall coverings."
            },
            Wallpaper: {
                pets: "Wallpaper offers beautiful patterns and textures, but it's easily damaged by pets and hard to repair.",
                budget: "Wallpaper creates stunning visual impact, but it's expensive to install and remove.",
                climate: "Wallpaper adds texture and warmth, but it can peel or bubble in humid conditions.",
                general: "Wallpaper provides rich visual appeal, but it's costly and difficult to change."
            }
        },
        pros: {
            Paint: [
                "Very cost-effective option",
                "Easy to change colors",
                "Simple to touch up and maintain",
                "Wide variety of finishes available",
                "DIY-friendly application"
            ],
            Wallpaper: [
                "Offers rich textures and patterns",
                "Can hide wall imperfections",
                "Creates dramatic visual impact",
                "Long-lasting when properly installed",
                "Premium aesthetic appeal"
            ]
        }
    },

    lighting: {
        name: "Lighting Decision",
        options: ["Warm", "Cool"],
        scoringRules: {
            budget: {
                low: { Warm: 1, Cool: 1 },        // Both LED options available
                medium: { Warm: 1, Cool: 1 },     // Similar costs
                high: { Warm: 2, Cool: 1 }        // Premium warm options
            },
            pets: {
                true: { Warm: 1, Cool: 0 },       // Warm more comfortable for pets
                false: { Warm: 0, Cool: 0 }       // No significant difference
            },
            climate: {
                humid: { Warm: 0, Cool: 1 },      // Cool light feels better in humidity
                dry: { Warm: 1, Cool: 0 },        // Warm light more comfortable
                cold: { Warm: 2, Cool: -1 }       // Warm light essential in cold climates
            }
        },
        pricing: {
            Warm: 12.50,   // Price per fixture/bulb
            Cool: 10.75    // Price per fixture/bulb
        },
        materials: {
            Warm: {
                class: 'material-warm',
                name: 'Warm LED Lighting',
                description: 'Cozy warm-toned LED lights (2700K-3000K) that create a comfortable, inviting atmosphere perfect for relaxation.'
            },
            Cool: {
                class: 'material-cool',
                name: 'Cool LED Lighting',
                description: 'Bright cool-toned LED lights (4000K-6500K) that enhance focus and productivity while making spaces feel larger.'
            }
        },
        tradeOffs: {
            Warm: {
                pets: "Warm lighting creates a cozy atmosphere for you and your pets, but it can make spaces feel smaller and may not be ideal for task work.",
                budget: "Warm lighting is comfortable and inviting, but it can make colors appear different and may strain eyes for detailed work.",
                climate: "Warm lighting feels cozy in cold climates, but it can make hot, humid spaces feel even warmer.",
                general: "Warm lighting creates ambiance and comfort, but it's less suitable for detailed work and can distort colors."
            },
            Cool: {
                pets: "Cool lighting provides excellent visibility and energy, but it can feel harsh and less welcoming for relaxation.",
                budget: "Cool lighting is great for productivity and makes spaces feel larger, but it can feel sterile and unwelcoming.",
                climate: "Cool lighting feels refreshing in warm climates, but it can make cold spaces feel even chillier.",
                general: "Cool lighting enhances productivity and visibility, but it can feel harsh and less cozy for relaxation."
            }
        },
        pros: {
            Warm: [
                "Creates cozy, welcoming atmosphere",
                "Better for relaxation and dining",
                "Makes skin tones look natural",
                "Promotes better sleep patterns",
                "Comfortable for extended use"
            ],
            Cool: [
                "Excellent for task and work lighting",
                "Makes spaces appear larger",
                "Better color accuracy for detailed work",
                "More energizing and alerting",
                "Slightly more energy efficient"
            ]
        }
    }
};

// DOM Elements
let dilemmaSelect, budgetSelect, climateSelect, roomAreaInput, petsRadios, refereeWhistle;
let resultsContainer, loadingState, placeholderSection;
let winnerText, prosList, tradeOffText, costText;
let materialPreview, materialName, materialDescription;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    animateLoadingSteps();
});

function initializeElements() {
    // Input elements
    dilemmaSelect = document.getElementById('dilemmaSelect');
    budgetSelect = document.getElementById('budgetSelect');
    climateSelect = document.getElementById('climateSelect');
    roomAreaInput = document.getElementById('roomAreaInput');
    petsRadios = document.querySelectorAll('input[name="pets"]');
    refereeWhistle = document.getElementById('refereeWhistle');
    
    // Display elements
    resultsContainer = document.getElementById('resultsContainer');
    loadingState = document.getElementById('loadingState');
    placeholderSection = document.getElementById('placeholderSection');
    winnerText = document.getElementById('winnerText');
    prosList = document.getElementById('prosList');
    tradeOffText = document.getElementById('tradeOffText');
    costText = document.getElementById('costText');
    
    // Material visualization elements
    materialPreview = document.getElementById('materialPreview');
    materialName = document.getElementById('materialName');
    materialDescription = document.getElementById('materialDescription');
}

function setupEventListeners() {
    // Button click event
    refereeWhistle.addEventListener('click', handleRefereeWhistle);
    
    // Form validation on input change
    [dilemmaSelect, budgetSelect, climateSelect, roomAreaInput].forEach(element => {
        element.addEventListener('change', validateForm);
        element.addEventListener('input', validateForm);
    });
    
    petsRadios.forEach(radio => {
        radio.addEventListener('change', validateForm);
    });
}

function validateForm() {
    const dilemma = dilemmaSelect.value;
    const budget = budgetSelect.value;
    const climate = climateSelect.value;
    const roomArea = parseFloat(roomAreaInput.value);
    const pets = document.querySelector('input[name="pets"]:checked');
    
    const isValid = dilemma && budget && climate && pets && 
                   roomArea >= 50 && roomArea <= 5000;
    
    refereeWhistle.disabled = !isValid;
    
    if (isValid) {
        refereeWhistle.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        refereeWhistle.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function animateLoadingSteps() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;
    
    const animateStep = () => {
        if (currentStep < steps.length) {
            steps.forEach(step => step.classList.remove('active'));
            steps[currentStep].classList.add('active');
            currentStep = (currentStep + 1) % steps.length;
        }
    };
    
    // Only animate if loading state is visible
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target === loadingState && !loadingState.classList.contains('hidden')) {
                const interval = setInterval(animateStep, 800);
                setTimeout(() => clearInterval(interval), 3000);
            }
        });
    });
    
    observer.observe(loadingState, { attributes: true, attributeFilter: ['class'] });
}

function handleRefereeWhistle() {
    if (refereeWhistle.disabled) return;
    
    // Show loading state
    showLoadingState();
    
    // Simulate AI processing time for better UX
    setTimeout(() => {
        const constraints = getUserConstraints();
        const result = calculateWinner(constraints.dilemma, constraints);
        displayResults(result);
    }, 3000);
}

function getUserConstraints() {
    const pets = document.querySelector('input[name="pets"]:checked');
    
    return {
        dilemma: dilemmaSelect.value,
        budget: budgetSelect.value,
        climate: climateSelect.value,
        roomArea: parseFloat(roomAreaInput.value),
        pets: pets ? pets.value === 'true' : false
    };
}

function calculateWinner(dilemmaType, constraints) {
    const data = renovationData[dilemmaType];
    if (!data) return null;
    
    const scores = {};
    
    // Initialize scores
    data.options.forEach(option => {
        scores[option] = 0;
    });
    
    // Apply scoring rules
    Object.keys(data.scoringRules).forEach(constraint => {
        if (constraint === 'roomArea') return; // Skip room area for scoring
        
        const constraintValue = constraints[constraint];
        const rules = data.scoringRules[constraint][constraintValue];
        
        if (rules) {
            Object.keys(rules).forEach(option => {
                scores[option] += rules[option];
            });
        }
    });
    
    // Determine winner
    const winner = Object.keys(scores).reduce((a, b) => 
        scores[a] > scores[b] ? a : b
    );
    
    // Calculate costs
    const costs = calculateCosts(dilemmaType, constraints.roomArea);
    
    // Generate reasoning
    const reasoning = generateReasoning(dilemmaType, winner, constraints);
    
    // Generate trade-off with cost analysis
    const tradeOff = generateTradeOff(dilemmaType, winner, constraints, costs);
    
    return {
        winner: winner,
        pros: data.pros[winner],
        reasoning: reasoning,
        tradeOff: tradeOff,
        costs: costs,
        material: data.materials[winner],
        scores: scores
    };
}

function calculateCosts(dilemmaType, roomArea) {
    const data = renovationData[dilemmaType];
    const costs = {};
    
    // Calculate area multiplier based on dilemma type
    let areaMultiplier = roomArea;
    if (dilemmaType === 'wallFinish') {
        // Estimate wall area as 2.5x floor area (accounting for ceiling height and perimeter)
        areaMultiplier = roomArea * 2.5;
    } else if (dilemmaType === 'lighting') {
        // Lighting cost per room (not per sq ft)
        areaMultiplier = Math.ceil(roomArea / 100); // One fixture per 100 sq ft
    }
    
    data.options.forEach(option => {
        costs[option] = data.pricing[option] * areaMultiplier;
    });
    
    // Calculate difference
    const optionCosts = Object.values(costs);
    const maxCost = Math.max(...optionCosts);
    const minCost = Math.min(...optionCosts);
    costs.difference = maxCost - minCost;
    costs.savings = costs.difference > 0;
    
    return costs;
}

function generateReasoning(dilemmaType, winner, constraints) {
    const data = renovationData[dilemmaType];
    const reasons = [];
    
    // Check which constraints favored the winner
    Object.keys(data.scoringRules).forEach(constraint => {
        const constraintValue = constraints[constraint];
        const rules = data.scoringRules[constraint][constraintValue];
        
        if (rules && rules[winner] > 0) {
            switch(constraint) {
                case 'budget':
                    reasons.push(`fits your ${constraintValue} budget range`);
                    break;
                case 'pets':
                    if (constraintValue) {
                        reasons.push(`works better with pets in the home`);
                    }
                    break;
                case 'climate':
                    reasons.push(`performs well in ${constraintValue} climate conditions`);
                    break;
            }
        }
    });
    
    return `${winner} wins because it ${reasons.join(', ')}.`;
}

function generateTradeOff(dilemmaType, winner, constraints, costs) {
    const data = renovationData[dilemmaType];
    
    // Determine the primary constraint that influenced the decision
    let primaryConstraint = 'general'; // default
    let maxScore = -999;
    
    Object.keys(data.scoringRules).forEach(constraint => {
        const constraintValue = constraints[constraint];
        const rules = data.scoringRules[constraint][constraintValue];
        
        if (rules && rules[winner] > maxScore) {
            maxScore = rules[winner];
            primaryConstraint = constraint;
        }
    });
    
    // Get base trade-off message
    let tradeOffMessage = data.tradeOffs[winner][primaryConstraint] || data.tradeOffs[winner].general;
    
    // Add cost analysis
    const alternatives = data.options.filter(option => option !== winner);
    const alternative = alternatives[0];
    const costDifference = Math.abs(costs[winner] - costs[alternative]);
    
    if (costDifference > 0) {
        const currency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        
        if (costs[winner] < costs[alternative]) {
            tradeOffMessage += ` Additionally, you'll save ${currency.format(costDifference)} compared to ${alternative} for your ${constraints.roomArea} sq ft space.`;
        } else {
            tradeOffMessage += ` However, this choice will cost you ${currency.format(costDifference)} more than ${alternative} for your ${constraints.roomArea} sq ft space.`;
        }
    }
    
    return tradeOffMessage;
}

function updateMaterialVisualization(material) {
    // Clear existing classes
    materialPreview.className = 'material-preview';
    
    // Add the material-specific class
    materialPreview.classList.add(material.class);
    
    // Update material information
    materialName.textContent = material.name;
    materialDescription.textContent = material.description;
    
    // Add entrance animation
    materialPreview.style.transform = 'scale(0.8)';
    materialPreview.style.opacity = '0';
    
    setTimeout(() => {
        materialPreview.style.transform = 'scale(1)';
        materialPreview.style.opacity = '1';
        materialPreview.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }, 100);
}

function showLoadingState() {
    placeholderSection.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    loadingState.classList.remove('hidden');
    
    // Reset and animate loading steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));
    
    let currentStep = 0;
    const stepInterval = setInterval(() => {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            currentStep++;
        } else {
            clearInterval(stepInterval);
        }
    }, 800);
}

function displayResults(result) {
    if (!result) return;
    
    // Hide loading state
    loadingState.classList.add('hidden');
    
    // Update material visualization
    updateMaterialVisualization(result.material);
    
    // Populate results
    winnerText.textContent = result.winner;
    
    // Clear and populate pros list
    prosList.innerHTML = '';
    result.pros.forEach((pro, index) => {
        const li = document.createElement('li');
        li.textContent = pro;
        li.style.animationDelay = `${index * 0.1}s`;
        prosList.appendChild(li);
    });
    
    // Set trade-off message
    tradeOffText.textContent = result.tradeOff;
    
    // Set cost analysis
    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    const winnerCost = currency.format(result.costs[result.winner]);
    const alternatives = Object.keys(result.costs).filter(key => key !== result.winner && key !== 'difference' && key !== 'savings');
    const alternativeCost = currency.format(result.costs[alternatives[0]]);
    
    costText.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <span><strong>${result.winner}:</strong></span>
            <span class="font-bold">${winnerCost}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
            <span><strong>${alternatives[0]}:</strong></span>
            <span class="font-bold">${alternativeCost}</span>
        </div>
        ${result.costs.difference > 0 ? `
            <div class="border-t border-white/20 pt-2 mt-2">
                <div class="flex justify-between items-center">
                    <span>Cost Difference:</span>
                    <span class="font-bold text-yellow-300">${currency.format(result.costs.difference)}</span>
                </div>
            </div>
        ` : ''}
    `;
    
    // Show results with animation
    resultsContainer.classList.remove('hidden');
    
    // Scroll to results on mobile
    if (window.innerWidth < 768) {
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Utility function for debugging
function debugScores(dilemmaType, constraints) {
    const result = calculateWinner(dilemmaType, constraints);
    console.log('Debug Scores:', result.scores);
    console.log('Winner:', result.winner);
    console.log('Reasoning:', result.reasoning);
    console.log('Trade-off:', result.tradeOff);
    console.log('Costs:', result.costs);
    console.log('Material:', result.material);
}