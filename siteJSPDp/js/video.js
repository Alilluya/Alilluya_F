console.log('Hello Tf2!');
let playlist = ['video1', 'video2', 'video3'];
const video = document.querySelector('#myVideo')
let index =0;
function play()
{
	if (video.paused == true)
	{
		video.play()
		document.querySelector('#play').innerText = 'pause'
	}
	else
	{
		video.pause()
		document.querySelector('#play').innerText = 'play'
	}

}
function mute()
{if (video.muted == true)
{
		document.querySelector('#mute').innerText = 'mute'
	video.muted= false;
}
	else
	{
		video.muted= true;
		document.querySelector('#mute').innerText = 'onmute'
	}

}
function next()
{
	index = index + 1;
	if (index>playlist.length-1)
	{
		index = 0;
	}
video.src= `video/${playlist[index]}.mp4`;	
}
function previous()
{
	index = index - 1;
	if (index<0)
	{
		index = playlist.length-1;
	}
video.src= `video/${playlist[index]}.mp4`;	
}
