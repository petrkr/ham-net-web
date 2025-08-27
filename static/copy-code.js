// Copy code functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
        const pre = codeBlock.parentElement;
        
        // Create wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '📋 Kopírovat';
        copyButton.setAttribute('title', 'Kopírovat kód do schránky');
        
        // Wrap the pre element
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyButton);
        
        // Add click event
        copyButton.addEventListener('click', function() {
            const codeText = codeBlock.textContent;
            
            // Use modern clipboard API if available
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(codeText).then(function() {
                    showCopySuccess(copyButton);
                }).catch(function() {
                    fallbackCopyText(codeText, copyButton);
                });
            } else {
                // Fallback for older browsers
                fallbackCopyText(codeText, copyButton);
            }
        });
    });
});

// Fallback copy method for older browsers
function fallbackCopyText(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(button);
    } catch (err) {
        console.error('Kopírování se nezdařilo:', err);
        showCopyError(button);
    }
    
    document.body.removeChild(textArea);
}

// Show success feedback
function showCopySuccess(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Zkopírováno!';
    button.classList.add('copy-success');
    
    setTimeout(function() {
        button.innerHTML = originalText;
        button.classList.remove('copy-success');
    }, 2000);
}

// Show error feedback
function showCopyError(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '❌ Chyba';
    button.classList.add('copy-error');
    
    setTimeout(function() {
        button.innerHTML = originalText;
        button.classList.remove('copy-error');
    }, 2000);
}