function encrypt() {
  const plaintext = document.getElementById("plaintext").value.toUpperCase();
  const keyword = document.getElementById("keyword").value.toUpperCase();
  let ciphertext = "";
  let keywordIndex = 0;

  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    const keywordChar = keyword[keywordIndex % keyword.length];
    const keywordCharCode = keywordChar.charCodeAt(0) - 65; 

    if (char.match(/[A-Z]/)) {
      const charCode = char.charCodeAt(0) - 65; 
      const encryptedCharCode = (charCode + keywordCharCode) % 26;
      const encryptedChar = String.fromCharCode(encryptedCharCode + 65); 
      ciphertext += encryptedChar;
      keywordIndex++;
    } else {
      ciphertext += char;
    }
  }

  document.getElementById("ciphertext").value = ciphertext;
  
  document.getElementById("refreshButton").addEventListener("click", function () {
    location.reload();
  });
}
