document.addEventListener('DOMContentLoaded', function() {
    initializeTerminal();
    initializeMatrixEffect();
    initializeGlitchEffects();
    initializeTypingAnimation();
    initializeScrollAnimations();
    initializeInteractiveElements();
});

function initializeTerminal() {
    const terminal = document.getElementById('terminal');
    const commands = [
        {
            prompt: 'root@hacklab:~# ',
            command: 'nmap -sS -O target_systems',
            output: `Starting Nmap scan...
Found 247 vulnerable systems
Exploit vectors identified: ∞
Status: ALL TARGETS COMPROMISED`
        },
        {
            prompt: 'root@hacklab:~# ',
            command: 'python3 exploit_generator.py --level legendary',
            output: `[✓] Generating quantum exploits...
[✓] Reality manipulation payloads ready
[✓] Phantom rootkits deployed
[✓] Universal access achieved`
        },
        {
            prompt: 'root@hacklab:~# ',
            command: 'git log --oneline',
            output: `a1b2c3d Added neural network manipulation
d4e5f6g Implemented dimensional phasing
g7h8i9j Updated reality hacking protocols
j0k1l2m Fixed quantum encryption bypass`
        }
    ];

    let currentCommandIndex = 0;
    
    window.showStats = function() {
        const newOutput = document.createElement('div');
        newOutput.innerHTML = `
            <div class="terminal-line">
                <span class="prompt">root@hacklab:~# </span>
                <span class="command">system-stats --legendary</span>
            </div>
            <div class="terminal-output">
═══════════════════════════════════════════
💀 YALOKGAR THREAT ASSESSMENT 💀
═══════════════════════════════════════════
Threat Level: APOCALYPTIC
Systems Compromised: ∞
Active Exploits: 9,847
Reality Manipulation: TRANSCENDENT
Quantum Access: UNLIMITED
Status: UNIVERSAL DOMINATION ACHIEVED
═══════════════════════════════════════════
            </div>
        `;
        terminal.appendChild(newOutput);
        terminal.scrollTop = terminal.scrollHeight;
    };

    window.clearTerminal = function() {
        const terminalContent = document.getElementById('terminal');
        terminalContent.innerHTML = `
            <div class="terminal-line">
                <span class="prompt">root@hacklab:~# </span>
                <span class="command">clear</span>
            </div>
            <div class="terminal-output">Terminal cleared. Ready for legendary operations...</div>
        `;
    };

    function addRandomCommand() {
        if (currentCommandIndex < commands.length) {
            const cmd = commands[currentCommandIndex];
            const newCommand = document.createElement('div');
            newCommand.innerHTML = `
                <div class="terminal-line">
                    <span class="prompt">${cmd.prompt}</span>
                    <span class="command">${cmd.command}</span>
                </div>
                <div class="terminal-output">${cmd.output}</div>
            `;
            terminal.appendChild(newCommand);
            terminal.scrollTop = terminal.scrollHeight;
            currentCommandIndex++;
        }
    }

    setInterval(addRandomCommand, 8000);
}

function initializeMatrixEffect() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-2';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 17, 0.05)';
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
    
    window.addEventListener('resize', function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

function initializeGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        setInterval(() => {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'glitch 2s infinite';
            }, 10);
        }, Math.random() * 5000 + 3000);
    });
    
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.filter = 'hue-rotate(90deg) saturate(1.5)';
            this.style.transform = 'translateY(-10px) scale(1.05) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
    });
}

function initializeTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.stat-card, .skill-category, .project-card');
    animatedElements.forEach(el => observer.observe(el));
}

function initializeInteractiveElements() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            showSkillDetail(this.textContent);
        });
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3').textContent;
            showProjectDetail(projectTitle);
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            executeHackerCommand();
        }
    });
    
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px var(--primary-green), inset 0 0 10px rgba(0, 255, 65, 0.2)';
            this.style.transform = 'translateX(15px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });
}

function showSkillDetail(skillName) {
    const details = {
        'BFS (x12)': 'Breadth-First Search mastery with 12 successful implementations',
        'Pathfinding (x10)': 'Advanced pathfinding algorithms optimized for 10 different scenarios',
        'DFS (x9)': 'Depth-First Search expertise with recursive and iterative approaches',
        'Dynamic Programming (x5)': 'Optimization problems solved using DP techniques',
        'Cryptography (x5)': 'Advanced encryption and decryption algorithm implementations',
        'Python (162 puzzles)': 'Legendary Python mastery with 162 CodinGame puzzles solved',
        'C++ (85 puzzles)': 'High-performance C++ solutions for complex algorithmic challenges'
    };
    
    const detail = details[skillName] || `Expert level proficiency in ${skillName}`;
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--terminal-bg);
        border: 2px solid var(--primary-green);
        border-radius: 8px;
        padding: 15px;
        color: var(--primary-green);
        font-family: 'Fira Code', monospace;
        z-index: 10000;
        max-width: 300px;
        box-shadow: var(--border-glow);
        animation: slideIn 0.5s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 8px;">💀 SKILL ANALYSIS</div>
        <div>${detail}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showProjectDetail(projectTitle) {
    const projects = {
        '💀 AntiCheatYALOKGAR': {
            description: 'Advanced anti-cheat system with real-time memory scanning and behavioral analysis',
            tech: 'C++, Assembly, Windows API, Kernel-level programming',
            features: ['Memory integrity checks', 'Process injection detection', 'Network monitoring', 'File system protection']
        },
        '⚡ VirtuProcessor': {
            description: 'CPU emulator with full instruction set simulation and debugging capabilities',
            tech: 'C, System Programming, Computer Architecture',
            features: ['CPU instruction emulation', 'Memory management', 'Interactive CLI', 'Register debugging']
        },
        '🔐 CryptoMaster': {
            description: 'Comprehensive cryptographic toolkit with quantum-resistant algorithms',
            tech: 'C++, Cryptography, Mathematical algorithms',
            features: ['AES/RSA implementation', 'Quantum encryption', 'Hash functions', 'Digital signatures']
        },
        '🎯 YALOK Programming Language': {
            description: 'Custom programming language with advanced syntax and optimization features',
            tech: 'C++, Compiler Design, LLVM, Language Theory',
            features: ['Custom syntax parser', 'Code optimization', 'Runtime environment', 'Standard library']
        }
    };
    
    const project = projects[projectTitle];
    if (!project) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    modal.innerHTML = `
        <div style="
            background: var(--terminal-bg);
            border: 2px solid var(--primary-green);
            border-radius: 12px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            color: var(--primary-green);
            font-family: 'Fira Code', monospace;
            box-shadow: var(--border-glow);
        ">
            <h2 style="color: var(--primary-green); margin-bottom: 20px; text-align: center;">
                ${projectTitle}
            </h2>
            <p style="margin-bottom: 20px; line-height: 1.6;">
                ${project.description}
            </p>
            <div style="margin-bottom: 20px;">
                <strong style="color: var(--warning-yellow);">Technologies:</strong><br>
                ${project.tech}
            </div>
            <div style="margin-bottom: 20px;">
                <strong style="color: var(--danger-red);">Key Features:</strong><br>
                ${project.features.map(feature => `• ${feature}`).join('<br>')}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: var(--primary-green);
                color: var(--matrix-bg);
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-family: inherit;
                font-weight: bold;
                float: right;
            ">CLOSE</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function executeHackerCommand() {
    const commands = [
        'Quantum barriers breached successfully',
        'Reality manipulation protocols activated',
        'Universal access granted - all systems compromised',
        'Phantom rootkit deployed across dimensional networks',
        'Neural pathway infiltration complete',
        'Temporal concealment activated - presence erased',
        'Omnipotent control established over target systems'
    ];
    
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(255, 0, 65, 0.9);
        border: 2px solid var(--danger-red);
        border-radius: 8px;
        padding: 15px;
        color: white;
        font-family: 'Fira Code', monospace;
        font-weight: bold;
        z-index: 10000;
        animation: slideUp 0.5s ease-out;
        box-shadow: 0 0 20px var(--danger-red);
    `;
    
    notification.innerHTML = `⚡ LEGENDARY PROTOCOL: ${randomCommand}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideDown {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

setInterval(() => {
    const randomElement = document.querySelector('.glitch-text, .stat-value, .section-title');
    if (randomElement && Math.random() < 0.1) {
        randomElement.style.textShadow = `
            0 0 5px var(--danger-red),
            0 0 10px var(--danger-red),
            0 0 15px var(--danger-red),
            0 0 20px var(--danger-red)
        `;
        setTimeout(() => {
            randomElement.style.textShadow = '';
        }, 200);
    }
}, 3000);

console.log(`
💀═══════════════════════════════════════════════════════════════════════════════💀
║                            YALOKGAR TERMINAL ACCESS                            ║
║                         LEGENDARY HACKER INTERFACE                            ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  🔥 Press Ctrl+Enter for random hacker commands                              ║
║  ⚡ Hover over skills and projects for detailed information                  ║
║  💀 Click on terminal buttons to interact with the system                   ║
║  🎯 All systems are under YALOKGAR's supreme control                        ║
╚═══════════════════════════════════════════════════════════════════════════════╝
`); 