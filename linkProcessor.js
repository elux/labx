function processLinks() {

    // Get the input value from the textarea
    const inputText = document.getElementById('linkInput').value;
    // Extract links using a regular expression
    const linkRegex = /(?:X\.com|twitter\.com)\/[^\s]+/g;
    const extractedLinks = inputText.match(linkRegex) || [];
  
    // Remove duplicates by converting to a Set and back to an array
    const uniqueLinks = [...new Set(extractedLinks)];
  



    // Remove the origin from each link
    const cleanedLinks = uniqueLinks.map(link => {
        
       
        let url = new URL(link, 'https://www.google.com/'); // Use a dummy URL for parsing
        
        return 'https://'+url.pathname + url.search;
    });

    // Open each link in a new tab
    cleanedLinks.forEach(link => {
        console.log("accessible link",link);
        window.open(link, '_blank');
    });

    // Log the cleaned links to the console
    console.log("Cleaned Links:", cleanedLinks);
}
