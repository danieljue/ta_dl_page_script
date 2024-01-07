# ta_dl_page_script
In Tube Archivist ~4.x (found here https://github.com/tubearchivist/tubearchivist ), you may want to prioritize many videos in your download queue.  At this time you have to manually click "download now" once you've filtered by a certain channel.  This simple script automates the clicking, and you can prioritize an entire channel in a short time.  This script goes in an inspection console and executes.


# How to use:
## 1. Optionally increase the number of items to be shown on a page
First, Go to your settings page and change the number of archive results to a number you want to process at a time.  (I chose 100.)

## 2. Select channel to start prioritizing 
Second go to your downloads page.  Then use the dropdown to choose a particular channel you'd like to move towards the top of the download queue.  Note that the exact order might not be retained, especially if you have other things you've already "prioritized".  In my experience the exact behavior is not LIFO, but rather LIFO with some grouping by channel.   In any case, you can move scores of queued videos upwards in the queue without clicking each one.
<img width="785" alt="image" src="https://github.com/danieljue/ta_dl_page_script/assets/1234595/4cde0c2d-04b8-4bf7-8b9a-b11691381909">


## 3. Open an inspection window in your browser, i.e. Chrome's CTRL-SHIFT-I on desktops.
Make sure you are looking at the inspection of the download page you just filtered.

<img width="871" alt="image" src="https://github.com/danieljue/ta_dl_page_script/assets/1234595/fd0d295c-8483-4ffb-bafe-43ee5f06772c">

## 4. Paste the code in the inspection console
Find the javascript code in this repo and copy it to your clip board. (Here it is)
```javascript
// Custom :contains selector
function contains(selector, text) {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).filter(element => RegExp(text).test(element.textContent));
}

// Get all buttons with the text "Download now"
const downloadButtons = contains('button', 'Download now');

// Click each button with a delay of 1 second
downloadButtons.forEach((button, index) => {
    setTimeout(() => {
        button.click();
        console.log(`Clicked button with text: "${button.textContent}" and id: "${button.id}"`);
    }, index * 200); // 1000 milliseconds = 1 second
});

```
You can adjust the time it sleeps between clicking.  I have mine set to 200ms, i.e. 1/5 of a second.

<img width="552" alt="image" src="https://github.com/danieljue/ta_dl_page_script/assets/1234595/56f5b056-35eb-48d8-9e4b-aafa35659bbd">

You'll then see it start to process.  There's no canceling this operation.

<img width="1021" alt="image" src="https://github.com/danieljue/ta_dl_page_script/assets/1234595/9fd56bd7-17af-49d8-a496-6ece5e16b724">

The videos should now be near the top of your processing queue.

## 5.  Use again.
Navigate to a second page of filtered queue results, or to another channels queue.  
Make sure the inspection window is still up, switch to that and press up to re-load the script, then execute it again.
