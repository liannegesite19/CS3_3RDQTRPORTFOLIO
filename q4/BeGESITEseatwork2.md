1. Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
The sidebar was adjusted slightly to the lower right, resulting in an overlap with the sidebar and the main content.

2. Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
The footer is fixed in place and doesnt move when you scroll. The footer behaves differently as the element is removed from the normal document flow and positioned relative to the viewport rather than its parent. 

3. Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
The absolute shifts the element's position based on the parent element, meanwhile the fixed bases it off the viewport.

4. Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
The z-index appears on top of the content because it's z-index is higher. If you swap the z-index values then the content would appear on top, and notice would be pushed behind it.

5. Challenge:

   a. Challenge:
What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
Try to change the position of .content to relative then to fixed. What do you observed each time?
What do you observe on about the effect of z-index on .notice and .content boxes?

