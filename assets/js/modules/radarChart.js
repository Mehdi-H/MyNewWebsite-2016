var frontEnd = {
    data : {
        labels: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Photoshop",
            "AngularJS",
            "Web Design"
        ],
        datasets: [
            {
                label: "Design FrontEnd",
                backgroundColor: "rgba(0,128,255,0.2)",
                borderColor: "rgba(255,255,255,1)",
                pointBackgroundColor: "rgba(255,255,255,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [100, 90, 80, 70, 80, 90]
            }
        ]
    }
},
backEnd = {
    data : {
        labels: [
            "NodeJS",
            "PHP7",
            "(No)SQL",
            "Symfony2",
            "API REST",
            "Gulp"
        ],
        datasets: [
            {
                label: "Développement BackEnd",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,255,255,1)",
                pointBackgroundColor: "rgba(255,255,255,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [95, 80, 90, 70, 100, 90]
            }
        ]
    }
},
options = {
    scale: {
        angleLines:{
            lineWidth: 2,
            // color: 'rgba(255,99,132,1)'
        },
        pointLabels:{
            fontSize: 17,
            fontColor: 'ff0000'
        },
        ticks: {
            showLabelBackdrop: false,
            maxTicksLimit: 8,
            min: 50
        }
    },
    responsive: true
};

var ctx = document.getElementById("webFrontEndChart");

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: frontEnd.data,
    options: options
});

var ctx = document.getElementById("webBackEndChart");

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: backEnd.data,
    options: options
});

var ctx = document.getElementById("programmationChart");

var programmation = {
    data: {
        labels: [
            "Python2&3",
            "R Programming",
            "Text Mining",
            "Classification",
            "Régression",
            "SVM",
            "Decision Trees",
            "Neural Nets"
        ],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(255,223,0,0.2)",
                borderColor: "rgba(255,255,255,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(210,105,30,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [90, 90, 85, 80, 80, 70, 70, 65],
            }
        ]
    }
};

var myRadarChart = new Chart(ctx, {
    type: 'bar',
    data: programmation.data,
    options: {
        responsive: true
    }
});
