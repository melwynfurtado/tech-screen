# Developer Comments

I forgot to commit at smaller intervals earlier but the code is fairly straightforward. So to summarize, I started by mapping the requiremnts into Board, Idea, Field, etc. First iteration was to render hardcoded list of ideas. Followed by option to delete idea. Then I added option to create new idea. And then made fields editable by maintaining field state. At this point I though I can share editable logic and extracted it out into Editable component.
I styled all of it in the very end. And I thought I was done. But sorting of ideas... added it in end. Finally added unit tests.

Few things I will improve on:
* Make inline edits on double click of field area for better UX.
* Force character limit on description field.
* Field validation feedback to user. 
* Spend more time on styling. Test thoroughly on all mahor browsers for responsiveness.
* Also breakdown styles at component level so that its easier to extract the common components out. Currently, as a quick win I used bootstrap styles globally.
* Doing the strecth section of requirement.

