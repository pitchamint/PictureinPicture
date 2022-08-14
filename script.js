const videoEl = document.getElementById('video');
const requestBtn = document.getElementById('requestbtn');
const shareBtn = document.getElementById('sharebtn');

requestBtn.addEventListener('click',()=>{
    selectMediaStream();
});

shareBtn.addEventListener('click',async ()=>{
    shareBtn.disabled=true;
    await videoEl.requestPictureInPicture();
    shareBtn.disabled = false;
});

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = ()=>{
            videoEl.play();
        }
    }catch(error){
        console.log(error)
    }
}