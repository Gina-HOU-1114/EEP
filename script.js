document.getElementById('analyzeBtn').addEventListener('click', function() {
    const regexInput = document.getElementById('regexInput').value;
    const analysisOutput = document.getElementById('analysisOutput');
    const explanationOutput = document.getElementById('explanationOutput');

    // Simple analysis example
    try {
        const regex = new RegExp(regexInput);
        analysisOutput.textContent = `Valid Regex: ${regexInput}`;
        
        // Example ex planation (you can enhance this logic)
        explanationOutput.textContent = `This regex ${regexInput} is valid and can be used to match patterns in strings.`;
    } catch (e) {
        analysisOutput.textContent = `Invalid Regex: ${regexInput}`;
        explanationOutput.textContent = `Error: ${e.message}`;
    }
});
