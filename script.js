const navLinks = document.getElementById('nav-links');

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

const projectDetails = {
    gitlab: {
        title: "GitLab Internship",
        details: "During my GitLab internship, I worked on maintaining digital handbooks and developed features for an internal project management system using JavaScript and Python.",
        link: "https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128030" 
    },
    amex: {
        title: "American Express Internship",
        details: "At American Express, I contributed to developing a full-stack app integrated with Slack, maintained digital handbooks, and improved the workspace environment by innovating internal tools.",
        link: "https://docs.google.com/presentation/d/1WW9f6tE__LvD1A8s6EA-8FG1EpdcuEZy4IXrvbh8wKo/edit?usp=sharing"
    }
};

function showProjectDetails(projectKey) {
    const container = document.getElementById('projectDetailsContainer');

    container.innerHTML = '';

    const title = document.createElement('h2');
    title.innerText = projectDetails[projectKey].title;

    const details = document.createElement('p');
    details.innerText = projectDetails[projectKey].details;

    const link = document.createElement('a');
    link.href = projectDetails[projectKey].link;
    link.innerText = "View Project";
    link.target = '_blank';

    const closeButton = document.createElement('span');
    closeButton.innerText = '×';
    closeButton.classList.add('close-btn');
    closeButton.onclick = function() {
        container.style.display = 'none';
    };

    container.appendChild(closeButton);
    container.appendChild(title);
    container.appendChild(details);
    container.appendChild(link);

    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

document.getElementById('gitlabProject').addEventListener('click', () => showProjectDetails('gitlab'));
document.getElementById('amexProject').addEventListener('click', () => showProjectDetails('amex'));