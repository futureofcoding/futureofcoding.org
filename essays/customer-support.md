---
title: Customer Support
---

# Customer Support

## How important is interface design

Sometimes I wonder how important interface design is. As Paul Chiusano says, learning a difficult but powerful interface is a one-time cost. So what's the big deal?

## Spirit and Amazon

Recently I've spent a lot of time on the phone with customer support, first with Spirit airlines, and then with Amazon.

In both cases, the requests I made were fairly straight-forward. They were of the "my flight/package was cancelled/lost and I'd like to reschedule/reorder it" variety. In the Spirit case, this required me to stay on the phone for an hour and then have a fustrating conversation with someone in broken English for 20 minutes. In the Amazon case, I was on hold for only 2 minutes and then on the phone for 10.

But if you think about it, rescheduling a flight or re-ordering a product that was lost are very similar activities to schedule a flight or ordering a packing in the first place. And Spirit and Amazon both already have interfaces for doing that. Yet in this error case both of their interfaces fell short: Spirit actually had a bug in their interface which was supposed to let me do this action, whereas Amazon's interface didn't even try to do it. It simply said, "give us a call."

So then I called customer support, and spend time on the phone, instructing a human to press buttons on a computer for me. 

## The internal interface

Here's my first question: **what did the customer support rep's internally-facing interface look like?**

Did it look like my interface to amazon.com, but instead of "call us for this problem," it displayed the interface to solve that problem? 

No, we can be pretty certain it didn't look like that.

We can also be pretty certain that this rep wasn't writing SQL queries directly on Amazon's database. There's an interface somewhere in the middle that Amazon's internal engineers hacked together to allow the reps to do things that normal users cannot.

Here's my next question: **why not simply allow users to do those things?**

That is, I don't call up customer support every time I want to buy a book on Amazon. That whole point of buying online is that I can do things myself, without talking to anyone. So why don't we continue in this vein and allow our customers to do what our reps do?

Which brings me to my third question: **does the reps interface allow them to do things that they _wouldn't_ want users to do?**

We can be pretty sure the answer here is yes. There are two different types of actions the rep can take that the user cannot:

1. Discretionary actions, such as giving a refund for an order that never arrived but that the system says arrived.
2. Rare actions, such as sending a free replacement for a package that the system knows has been lost.

If we had a tool that drastically decreased the cost of interface-design, we could categorically solve class 2 problems (except maybe for old people who can't learn even intuative new interfaces).

And if you dream really hard, you can even imagine a tool that would solve class 1 problems. Think about a tool that would seemingly allow you to do any action on Amazon.com but if you don't have the authorization to do it, it would somehow display that your constructed action is illegal, and possibly explain why. Then there could be a button that you click such as "request permission" that inclues a textbox where you explain why you'd like to be able to perform that action. Then a rep merely can approve or deny your request. If it's denied, *then* you can call.

## The third kind of action

One final note. A lot has been said (TODO link needed) about social engineering customer support reps to provide sensative customer information that will allow one to hack into another's account. This is because there is a third category of customer support action that I did not list above:

3. Actions that neither the customer nor customer support rep should ever take.

We all know that the internal customer support interface has many of these actions available. You may blame training or hiring if these actions are taken by reps. But I blame the interface. 