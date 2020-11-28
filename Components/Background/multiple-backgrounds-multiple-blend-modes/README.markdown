# Multiple Backgrounds, Multiple Blend Modes

A Pen created on CodePen.io. Original URL: [https://codepen.io/danwilson/pen/dqZvmx](https://codepen.io/danwilson/pen/dqZvmx).

A few things here.

This started after this question was asked:

Why can I not apply a filter (such as grayscale) to one part of a background that does not affect other background layers on the same element and that does not affect the content inside the element?

My initial idea was to separate the specific background into a pseudoelement, but that had issues due to how this content was being generated, and the background was populated (which, now that I think about it, could have been solved with CSS Variables... but I digress).

Then the option of maybe working with a blend mode, but the extra background layers made that tricky initially. Until you remember that you can also have multiple blend modes.

Here, we want a vignette cover to always be black, and then we have a grey layer that helps with the grayscale by setting its blend mode to saturation, and it sits on top of our initial image we wanted to turn grayscale.

To really show how separate things can get, I added dropdowns to toggle blend modes of the different layers... and changing the color of the vignette and the grey barrier).

No Edge/IE support due to lack of blend modes (as of September 2018)
