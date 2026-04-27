/* Place your JavaScript in this file */

async function downloadScript() {
    const githubRawUrl = 'https://raw.githubusercontent.com/JOaqko/python_scripts/refs/heads/main/resume.py';
    const fileName = 'my_script.py';

    try {
        const response = await fetch(githubRawUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        
    } catch (error) {
        console.error('Download failed:', error);
        alert('Could not download the file.');
    }
}

async function downloadScript() {
    const githubRawUrl = 'https://raw.githubusercontent.com/JOaqko/Cpp-projects/refs/heads/main/main.cpp';
    const fileName = 'project.cpp';

    try {
        const response = await fetch(githubRawUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        
    } catch (error) {
        console.error('Download failed:', error);
        alert('Could not download the file.');
    }
}