const translations = {
    pt: {
        'Digite o texto aqui...': 'Digite o texto aqui...',
        'Traduzir': 'Traduzir',
        'Texto traduzido aparecerá aqui...': 'Texto traduzido aparecerá aqui...',
        'Português (BR)': 'Português (BR)',
        'English': 'Inglês',
        '中文 (Chinês)': '中文 (Chinês)'
    },
    en: {
        'Digite o texto aqui...': 'Type the text here...',
        'Traduzir': 'Translate',
        'Texto traduzido aparecerá aqui...': 'Translated text will appear here...',
        'Português (BR)': 'Portuguese (BR)',
        'English': 'English',
        '中文 (Chinês)': 'Chinese'
    },
    zh: {
        'Digite o texto aqui...': '在这里输入文字...',
        'Traduzir': '翻译',
        'Texto traduzido aparecerá aqui...': '翻译后的文本会出现在这里...',
        'Português (BR)': '葡萄牙语（巴西）',
        'English': '英语',
        '中文 (Chinês)': '中文'
    }
};

function changeLanguage() {
    const selectedLang = document.getElementById('languageSelect').value;
    document.getElementById('inputText').placeholder = translations[selectedLang]['Digite o texto aqui...'];
    document.getElementById('outputText').placeholder = translations[selectedLang]['Texto traduzido aparecerá aqui...'];
    document.querySelector('button').textContent = translations[selectedLang]['Traduzir'];
}

function translate() {
    const fromLang = document.getElementById('fromLang').value;
    const toLang = document.getElementById('toLang').value;
    const text = document.getElementById('inputText').value;
    
    // Lógica de tradução de teste (simulação)
    if (text) {
        document.getElementById('outputText').value = `[Tradução de ${fromLang} para ${toLang}]: ${text}`;
    } else {
        document.getElementById('outputText').value = 'Insira um texto para traduzir.';
    }
}
