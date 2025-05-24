const API_KEY = 'AIzaSyAOOjPjfBhe8AmDh_vwSeCUvHYVUUwSCiw';
const VIDEO_IDS = ['fKrW1IpKjEY' , 'I2EVKfgf0v4' , 'dLqr3HrsvgY' , '-ihIEsobPyk', '-caM0v_ITVs', 'tMOCvC0gbHk' , 'Bqb4xmHUZOc' , 'XOro78obdXU' , '-RB9fUYgihs']; // Add more video IDs as needed

async function fetchLiveViews(videoId, elementId) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`);
        const data = await response.json();
        const viewCount = data.items[0].statistics.viewCount;
        document.getElementById(elementId).innerText = `Views: ${viewCount}`;
    } catch (error) {
        console.error('Error fetching live views:', error);
        document.getElementById(elementId).innerText = 'Error fetching live views';
    }
}

function fetchAllViews() {
    VIDEO_IDS.forEach((videoId, index) => {
        fetchLiveViews(videoId, `viewCount${index + 1}`);
    });
}

// Fetch live views every 10 seconds
setInterval(fetchAllViews, 10000);
fetchAllViews();

document.addEventListener('copy',function(event){
    event.clipboardData.setData('text/plian','🥲');
    event.preventDefault();
  })



function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');
    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h3')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }


