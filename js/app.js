// =========================================
// Global Application Data (EN / TE)
// =========================================
const APP_DATA = {
    en: {
        // Core Strings
        appTitle: "Election Guide",
        heroTitle: "Your Voice. Your Vote. Your Future.",
        heroSubtitle: "The official guide for first-time voters under the Election Commission of India (ECI).",
        cardStartGuide: "Visual Step-by-Step Guide",
        cardStartGuideDesc: "Learn everything from registration to polling day in an interactive journey.",
        cardEligibility: "Check Eligibility",
        cardEligibilityDesc: "Find out if you are eligible to vote and view the election timeline.",
        cardAskAssistant: "Ask Assistant",
        cardAskAssistantDesc: "Got questions? Our smart assistant is here to help you 24/7.",
        backBtn: "Back",
        guideTitle: "Voter's Journey",
        btnPrev: "Previous",
        btnNext: "Next",
        eligibilityTitle: "Eligibility & Timeline",
        checkerTitle: "Are you eligible?",
        labelAge: "Your Age",
        labelCitizen: "I am an Indian Citizen",
        btnCheck: "Check Status",
        timelineTitle: "Election Phases",
        botName: "ECI Assistant",
        botWelcome: "Hello! I am your Election Guide Assistant. How can I help you today? (Try asking about Registration, Eligibility, or Documents)",
        
        // Complex Strings
        chatPlaceholder: "Type your question...",
        
        // Step-by-Step Data
        steps: [
            {
                id: "registration",
                title: "Voter Registration",
                desc: "Every citizen aged 18+ must register on the electoral roll.",
                icon: "fa-id-card",
                details: [
                    "Fill out Form 6 online via the NVSP portal",
                    "Aadhaar card or Age proof required",
                    "Takes approx 2-3 weeks for verification"
                ]
            },
            {
                id: "verification",
                title: "Verification (BLO)",
                desc: "A Booth Level Officer (BLO) may verify your address.",
                icon: "fa-house-user",
                details: [
                    "Ensure someone is present at your residence",
                    "Keep original documents handy"
                ]
            },
            {
                id: "candidates",
                title: "Know Your Candidates",
                desc: "Find out who is running in your constituency.",
                icon: "fa-users-viewfinder",
                details: [
                    "Use KYC (Know Your Candidate) App",
                    "Review criminal records and asset declarations"
                ]
            },
            {
                id: "polling",
                title: "Polling Day",
                desc: "Go to the designated polling booth to cast your vote.",
                icon: "fa-person-booth",
                details: [
                    "Carry Voter ID (EPIC) or alternate ID",
                    "Stand in line, get finger inked, press EVM button"
                ]
            },
            {
                id: "results",
                title: "Results",
                desc: "The votes are counted and results are declared.",
                icon: "fa-chart-pie",
                details: [
                    "Check ECI official website for live counting",
                    "VVPAT slips can be tallied if necessary"
                ]
            }
        ],
        
        // Timeline Data
        timeline: [
            { phase: "Notification", date: "Phase 1 - Date TBD", desc: "Official announcement of the election dates." },
            { phase: "Nomination", date: "Phase 2 - Date TBD", desc: "Candidates file their nomination papers." },
            { phase: "Scrutiny", date: "Phase 3 - Date TBD", desc: "Scrutiny of nominations and withdrawal period." },
            { phase: "Polling Day", date: "Phase 4 - Date TBD", desc: "Voting via Electronic Voting Machines (EVM)." },
            { phase: "Counting", date: "Phase 5 - Date TBD", desc: "Votes are counted and winners declared." }
        ],

        msgEligible: "Great! You are eligible to register to vote. Visit the NVSP portal to begin your application.",
        msgIneligibleAge: "You must be at least 18 years old to vote.",
        msgIneligibleCitizen: "Only Indian Citizens are eligible to vote in Indian Elections."
    },
    te: {
        // Telugu Core Strings (Using approximate/standard translations for educational demo)
        appTitle: "ఎన్నికల గైడ్",
        heroTitle: "మీ వాయిస్. మీ ఓటు. మీ భవిష్యత్తు.",
        heroSubtitle: "భారత ఎన్నికల సంఘం (ECI) కింద మొదటిసారి ఓటర్లకు అధికారిక గైడ్.",
        cardStartGuide: "దశలవారీ గైడ్",
        cardStartGuideDesc: "రిజిస్ట్రేషన్ నుండి పోలింగ్ రోజు వరకు అన్నీ తెలుసుకోండి.",
        cardEligibility: "అర్హతను తనిఖీ చేయండి",
        cardEligibilityDesc: "మీరు ఓటు వేయడానికి అర్హులో కాదో తెలుసుకోండి.",
        cardAskAssistant: "అసిస్టెంట్‌ను అడగండి",
        cardAskAssistantDesc: "ప్రశ్నలు ఉన్నాయా? మా స్మార్ట్ అసిస్టెంట్ ఎల్లప్పుడూ ఇక్కడ ఉంటారు.",
        backBtn: "వెనక్కి",
        guideTitle: "ఓటరు ప్రయాణం",
        btnPrev: "మునుపటి",
        btnNext: "తదుపరి",
        eligibilityTitle: "అర్హత & కాలక్రమం",
        checkerTitle: "మీకు అర్హత ఉందా?",
        labelAge: "మీ వయస్సు",
        labelCitizen: "నేను భారతీయ పౌరుడిని",
        btnCheck: "స్థితిని తనిఖీ చేయండి",
        timelineTitle: "ఎన్నికల దశలు",
        botName: "ECI అసిస్టెంట్",
        botWelcome: "నమస్కారం! నేను మీ ఎన్నికల గైడ్ అసిస్టెంట్‌ని. రిజిస్ట్రేషన్ లేదా అర్హత గురించి అడగండి.",
        
        chatPlaceholder: "మీ ప్రశ్నను టైప్ చేయండి...",

        steps: [
            {
                id: "registration",
                title: "ఓటరు నమోదు",
                desc: "18+ వయస్సు గల ప్రతి పౌరుడు ఓటరు జాబితాలో నమోదు చేసుకోవాలి.",
                icon: "fa-id-card",
                details: [
                    "NVSP పోర్టల్ ద్వారా ఆన్‌లైన్‌లో ఫారమ్ 6 పూరించండి",
                    "ఆధార్ కార్డ్ లేదా వయస్సు రుజువు అవసరం"
                ]
            },
            {
                id: "verification",
                title: "ధృవీకరణ",
                desc: "బూత్ లెవల్ ఆఫీసర్ (BLO) మీ చిరునామాను ధృవీకరిస్తారు.",
                icon: "fa-house-user",
                details: [
                    "నివాసంలో ఎవరైనా ఉన్నారో లేదో నిర్ధారించుకోండి",
                    "అసలు పత్రాలను సిద్ధంగా ఉంచండి"
                ]
            },
            {
                id: "candidates",
                title: "అభ్యర్థులను తెలుసుకోండి",
                desc: "మీ నియోజకవర్గంలో ఎవరు పోటీ చేస్తున్నారో తెలుసుకోండి.",
                icon: "fa-users-viewfinder",
                details: [
                    "క్రిమినల్ రికార్డులను తనిఖీ చేయండి"
                ]
            },
            {
                id: "polling",
                title: "పోలింగ్ రోజు",
                desc: "ఓటు వేయడానికి పోలింగ్ బూత్‌కు వెళ్లండి.",
                icon: "fa-person-booth",
                details: [
                    "ఓటర్ ఐడిని తీసుకెళ్లండి",
                    "లైన్‌లో నిలబడి, EVM బటన్‌ను నొక్కండి"
                ]
            },
            {
                id: "results",
                title: "ఫలితాలు",
                desc: "ఓట్లు లెక్కించి ఫలితాలు ప్రకటిస్తారు.",
                icon: "fa-chart-pie",
                details: [
                    "లైవ్ కౌంటింగ్ కోసం అధికారిక వెబ్‌సైట్‌ను చూడండి"
                ]
            }
        ],

        timeline: [
            { phase: "నోటిఫికేషన్", date: "దశ 1 - ప్రకటించబడలేదు", desc: "ఎన్నికల తేదీల అధికారిక ప్రకటన." },
            { phase: "నామినేషన్", date: "దశ 2 - ప్రకటించబడలేదు", desc: "అభ్యర్థులు నామినేషన్ దాఖలు చేస్తారు." },
            { phase: "పరిశీలన", date: "దశ 3 - ప్రకటించబడలేదు", desc: "నామినేషన్ల పరిశీలన మరియు ఉపసంహరణ." },
            { phase: "పోలింగ్", date: "దశ 4 - ప్రకటించబడలేదు", desc: "EVM ద్వారా ఓటింగ్." },
            { phase: "లెక్కింపు", date: "దశ 5 - ప్రకటించబడలేదు", desc: "ఓట్లు లెక్కించి విజేతలను ప్రకటిస్తారు." }
        ],

        msgEligible: "అద్భుతం! మీరు ఓటరుగా నమోదు చేసుకోవడానికి అర్హులు. దయచేసి NVSP పోర్టల్‌ను సందర్శించండి.",
        msgIneligibleAge: "ఓటు వేయడానికి మీకు కనీసం 18 సంవత్సరాలు ఉండాలి.",
        msgIneligibleCitizen: "భారతీయ ఎన్నికలలో ఓటు వేయడానికి భారతీయ పౌరులకు మాత్రమే అర్హత ఉంది."
    }
};

// =========================================
// Application State
// =========================================
let currentLang = 'en';
let currentStepIndex = 0;

// =========================================
// Initialization
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initViewManagement();
    initStepByStepGuide();
    initEligibilityChecker();
    initTimeline();
    applyTranslations();
});

// =========================================
// 1. Language Toggle & i18n
// =========================================
function initLanguageToggle() {
    const langToggleBtn = document.getElementById('lang-toggle');
    const langEnSpan = document.querySelector('.lang-en');
    const langTeSpan = document.querySelector('.lang-te');

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'te' : 'en';
        
        // Toggle visual active state
        if (currentLang === 'en') {
            langEnSpan.classList.add('active');
            langTeSpan.classList.remove('active');
        } else {
            langEnSpan.classList.remove('active');
            langTeSpan.classList.add('active');
        }
        
        // Re-render UI components using new language
        applyTranslations();
        renderCurrentStep();
        initTimeline();
        
        // If eligibility was checked, re-check it to translate the result
        const eligibilityForm = document.getElementById('eligibility-form');
        if (eligibilityForm.checkValidity()) {
           // We could trigger submit here if we want to auto-translate the existing result
        }
    });
}

function applyTranslations() {
    const d = APP_DATA[currentLang];
    
    // Process all text nodes [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (d[key]) {
            el.textContent = d[key];
        }
    });

    // Process attributes [data-i18n-prop="attribute:key"]
    document.querySelectorAll('[data-i18n-prop]').forEach(el => {
        const propStr = el.getAttribute('data-i18n-prop'); // e.g. "placeholder:chatPlaceholder"
        const parts = propStr.split(':');
        if (parts.length === 2) {
            const attr = parts[0];
            const key = parts[1];
            if (d[key]) {
                el.setAttribute(attr, d[key]);
            }
        }
    });
}

// =========================================
// 2. View Management
// =========================================
function initViewManagement() {
    // Navigate from Dashboard to other Views
    document.querySelectorAll('.dash-card[data-target]').forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            switchToView(targetId);
        });
    });

    // Navigate BACK to Dashboard
    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchToView(targetId);
        });
    });
}

function switchToView(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    // Show target view
    const target = document.getElementById(viewId);
    if(target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
}

// =========================================
// 3. Step-by-Step Guide
// =========================================
function initStepByStepGuide() {
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    
    // Generate nodes
    const nodesContainer = document.getElementById('guide-nodes');
    nodesContainer.innerHTML = ''; // clear
    const stepsLength = APP_DATA.en.steps.length; // Same for both languages
    
    for (let i = 0; i < stepsLength; i++) {
        const node = document.createElement('div');
        node.className = 'step-node';
        node.textContent = i + 1;
        nodesContainer.appendChild(node);
    }
    
    // Initial Render
    renderCurrentStep();
    
    btnNext.addEventListener('click', () => {
        if (currentStepIndex < stepsLength - 1) {
            currentStepIndex++;
            renderCurrentStep();
        }
    });
    
    btnPrev.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderCurrentStep();
        }
    });
}

function renderCurrentStep() {
    const steps = APP_DATA[currentLang].steps;
    const currentStep = steps[currentStepIndex];
    const totalSteps = steps.length;
    
    // 1. Update Progress Bar & Nodes
    const progressFill = document.getElementById('guide-progress-fill');
    // Calculate percentage (0 to total-1 segments)
    const percentage = (currentStepIndex / (totalSteps - 1)) * 100;
    progressFill.style.width = `${percentage}%`;
    
    const nodes = document.querySelectorAll('.step-node');
    nodes.forEach((node, index) => {
        node.classList.remove('active', 'completed');
        if (index === currentStepIndex) node.classList.add('active');
        if (index < currentStepIndex) node.classList.add('completed');
    });
    
    // 2. Update Content
    const contentCard = document.getElementById('guide-content-card');
    
    const detailsHtml = currentStep.details.map(detail => `<li><i class="fa-solid fa-check"></i> <span>${detail}</span></li>`).join('');
    
    contentCard.innerHTML = `
        <div class="guide-anim-image">
            <i class="fa-solid ${currentStep.icon} fa-bounce" style="--fa-animation-duration: 2s; --fa-bounce-height: -8px;"></i>
        </div>
        <div class="guide-text">
            <h3>${currentStepIndex + 1}. ${currentStep.title}</h3>
            <p>${currentStep.desc}</p>
            <div class="guide-details">
                <ul>
                    ${detailsHtml}
                </ul>
            </div>
        </div>
    `;
    
    // 3. Update Button States
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const d = APP_DATA[currentLang];
    
    if (currentStepIndex === 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }
    
    if (currentStepIndex === totalSteps - 1) {
        btnNext.disabled = true;
        btnNext.innerHTML = `<i class="fa-solid fa-flag-checkered"></i> Finish`;
    } else {
        btnNext.disabled = false;
        btnNext.innerHTML = `${d.btnNext} <i class="fa-solid fa-chevron-right"></i>`;
    }
}

// =========================================
// 4. Eligibility Checker & Timeline
// =========================================
function initEligibilityChecker() {
    const form = document.getElementById('eligibility-form');
    const resultDiv = document.getElementById('eligibility-result');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const age = parseInt(document.getElementById('age-input').value, 10);
        const isCitizen = document.getElementById('citizen-input').checked;
        const d = APP_DATA[currentLang];
        
        resultDiv.className = 'result-message'; // reset
        
        if (!isCitizen) {
            resultDiv.classList.add('result-error');
            resultDiv.innerHTML = `<i class="fa-solid fa-xmark-circle fa-lg mt-1"></i> <div>${d.msgIneligibleCitizen}</div>`;
        } else if (age < 18) {
            resultDiv.classList.add('result-error');
            resultDiv.innerHTML = `<i class="fa-solid fa-circle-exclamation fa-lg mt-1"></i> <div>${d.msgIneligibleAge}</div>`;
        } else {
            resultDiv.classList.add('result-success');
            resultDiv.innerHTML = `<i class="fa-solid fa-check-circle fa-lg mt-1"></i> <div>${d.msgEligible}</div>`;
        }
        
        resultDiv.classList.remove('hidden');
    });
}

function initTimeline() {
    const timelineData = APP_DATA[currentLang].timeline;
    const wrapper = document.getElementById('timeline-wrapper');
    wrapper.innerHTML = '';
    
    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        // Give a slight staggered animation delay if we want, or just generic active styling
        // Let's make the first two active for demo purposes
        if (index < 2) div.classList.add('active');
        
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h4>${item.phase}</h4>
                <p>${item.desc}</p>
                <span class="timeline-date">${item.date}</span>
            </div>
        `;
        wrapper.appendChild(div);
    });
}
