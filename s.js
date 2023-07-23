// Function to add a song to the song list
function addSong() {
    // Get the song details from the input fields
    var songName = document.getElementById("songName").value;
    var artist = document.getElementById("artist").value;
    
    // Create a new song item
    var songItem = document.createElement("div");
    songItem.className = "song-item";
    
    // Create the elements for song details
    var songNameElement = document.createElement("span");
    songNameElement.className = "song-name";
    songNameElement.textContent = songName;
    
    var artistElement = document.createElement("span");
    artistElement.className = "song-artist";
    artistElement.textContent = artist;
    
    // Add the song details to the song item
    songItem.appendChild(songNameElement);
    songItem.appendChild(artistElement);
    
    // Add the song item to the song list
    var songList = document.getElementById("song-list");
    songList.appendChild(songItem);
    
    // Clear the input fields
    document.getElementById("songName").value = "";
    document.getElementById("artist").value = "";
}

// Function to delete a song from the song list
function deleteSong(songId) {
    // Find the song item with the given songId
    var songItem = document.getElementById(songId);
    
    // Remove the song item from the song list
    if (songItem) {
        songItem.parentNode.removeChild(songItem);
    }
}
