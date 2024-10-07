<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tradutor Beta</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Tradutor Beta</h1>
        <textarea id="inputText" placeholder="Digite o texto aqui..."></textarea>
        <select id="fromLang">
            <option value="pt">Português (BR)</option>
            <option value="en">English</option>
            <option value="zh">中文 (Chinês)</option>
        </select>
        <select id="toLang">
            <option value="pt">Português (BR)</option>
            <option value="en">English</option>
            <option value="zh">中文 (Chinês)</option>
        </select>
        <button onclick="translate()">Traduzir</button>
        <textarea id="outputText" placeholder="Texto traduzido aparecerá aqui..." readonly></textarea>
    </div>
    <script src="script.js"></script>
</body>
</html>
