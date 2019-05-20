---
title: Tudor Girba Call 5/20/19
---

# Tudor Girba Call 5/20/19

* all little prototypes in separate places. very different effort than system
* at what date would a working system be acceptable?
	* me: 10 or 20 years
	* him: 10 isn't so far. 20 is
* they use moldablity (instead of malleablility) because it's more google-able
	* they aren't defining what it is to allow all sorts, like blocks
	* they want to allow others to build prototypes on their platform so they aren't prototypes
	* PX is focus on programmer. they are DX (develop-*ment* experience)
* there should be no place between the end-user and programmer
	* spreadsheets have a hard black box boundary
* they start with low level developer world and add user stuff, because developer has to deal with all details
	* "programming sprinkled on top"
* always you need a thesis at any given time so you know where you are
	* why is it a "thesis defense"? people will try to attack and invalidate what you are saying. your work can defend a single statement with a verb inside. 
	* thesis defines a territory and it has to be important enough for someone to attack it. the paper is just the army/evidence to fight for the statement. if the statement is too wide, stretch army too thin
	* needs to be clear, maybe contrarian
	* how do I give enough evidence to show the vision is attainable? the sharper the thesis, the better I will understand what is missing and how to test it
* example of his thesis: systems are specific so the development must be (there is no other way) customized.
* he has a method: demo driven design
    * [http://demodriven.com/](http://demodriven.com/)
	* he discovered working with researchers
	* humane interface chapter: locus of attention
		* we cannot do multiple things at same time, so subconscious does things
		* but hard to bring back to consciousness, hard to reason about
	* issue with research: you're doing/reading same as everyone else so little chance of producing something new
	* make all assumptions you are reading explicit is a great trick to get feedback
	* demo the thesis once per week for years: find a story and show it as concretely as possible to deal with details
	* when you can't tell story and demo at same time, something is wrong because the system is telling a different story than you are
* ask people for their thesis at next conference I go to
	* he will be at CurryOn
	* ask people if they enjoyed the last 6 months, partially because papers leading up to it don't really gel/mesh together
* thesis is similar to writing test first
	* you can always change test
	* at any given moment you have assertion that can be true or false
	* most people write assertion at very end
* ideas for thesis
	* modularity / composability
	* something with fp
	* color picker changer
		* what about changing parts inside the color picker?
		* Tudor: GT is the platform in the world for this now
			* single render tree
			* editor/environment is a language (can be programmed)
			* they have a reactive engine (graph dependencies, infinite loop issues)
* GT
	* all remote
	* no meetings ever
	* people work as much they want and on anything
	* they don't even have a backlog
	* how do they synchronize?
		* any synchronization system is a bottleneck
		* rely on eventual consistency
	* their issues on github tell a story 
		* this is how the bug looked before, here's the thing I built to test the bug, and people can relate to that in minutes
		* the story of what they are doing is an engineering product
		* different than MVP
		* not to validate/invalidate but find what is missing