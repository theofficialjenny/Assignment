window.onload = function () {
    let scene = 0;
    let scenes = [
        document.getElementById("sidebarScene1"),
        document.getElementById("sidebarScene2")
    ];
    let timer = null;

    document.getElementById("sidebarReplay").addEventListener("click", play);
    function changeScene() {
        switch (scene) {
            case 0:
                scenes[0].style.visibility = "visible";
                scenes[1].style.visibility = "hidden";
                break;
            case 1:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "visible";
                break;
            default:
                break;
        }
    }

    function animateSidebar() {
        scene++;
        if (scene >= scenes.length) {
            clearInterval(timer);
        }
        changeScene();
    }

    function play() {
        scene = 0;
        changeScene();
        timer = setInterval(animateSidebar, 3000);
    }

    play();
}

// navigation
function showForm(formId) {
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}


document.addEventListener("DOMContentLoaded", function() {
    showForm('buy-tickets');
});

//stop image from reappearing 
setTimeout(function() {
    document.getElementById("banner_scene1_img1").style.display = "none"; 
}, 4000); 

//get input data
function populateSummary() {
    document.getElementById('summary-date').textContent = document.getElementById('date').value;
    document.getElementById('summary-adults').textContent = document.getElementById('adults').value;
    document.getElementById('summary-children').textContent = document.getElementById('children').value;
    document.getElementById('summary-first-name').textContent = document.getElementById('first-name').value;
    document.getElementById('summary-last-name').textContent = document.getElementById('last-name').value;
    document.getElementById('summary-email').textContent = document.getElementById('email').value;
    document.getElementById('summary-ticket-color').textContent = document.getElementById('ticket-color').value;
    document.getElementById('summary-locker').textContent = document.querySelector('input[name="locker"]:checked').value;
}

document.getElementById('confirm').addEventListener('click', function() {
    populateSummary();
    showForm('booking-summary');
});








 

