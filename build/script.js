// Sample academic details
const academicDetails = {
    Class10: {
        title: 'Class 10 Details',
        content: 'School: DAV Public School, KOTA (Raj)<br>Board: CBSE <br>Year: 2017 <br>CGPA: 7.3',
    },
    Class12: {
        title: 'Class 12 Details',
        content: 'School: Swarajya Senior Secondary School<br>Board: NWAC <br>Year: 2020 <br>CGPA: 7.3',
    },
    University: {
        title: 'University Details',
        content: 'University: MEDICAPS UNIVERSITY, INDORE<br>Program: B.Tech (CSBS)<br>Current CGPA (till 6th Sem): 7.03',
    },
    Internship: {
        title: 'Internship ',
        content: 'Company: Jio Platforms ltd (JPL)<br>Role: Front-end WEB development <br>Skills: Angular, HTML, CSS, JS, TS',
    },
};

// Function to toggle academic details when a button is clicked
function toggleAcademicDetails(category) {
    const academicDetailsContainer = document.getElementById('academic-details');
    const details = academicDetails[category];

    if (academicDetailsContainer.style.display === 'block') {
        academicDetailsContainer.style.display = 'none';
    } else {
        academicDetailsContainer.innerHTML = '';
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('academic-details');
        detailsDiv.innerHTML =  `
            <h3>${details.title}</h3>
            <p>${details.content}</p>
        `;
        academicDetailsContainer.appendChild(detailsDiv);
        academicDetailsContainer.style.display = 'block';
    }
}

// Add click event listeners to academic buttons to toggle visibility
const academicButtons = document.querySelectorAll('.academic-btn');
academicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;
        toggleAcademicDetails(selectedCategory);
    });
});
