---
permalink: /lifecycle-of-a-project/project-communications/
title: Project Communications
parent: Lifecycle of a Project
---
###Developing a project comms plan

The [distributed team]({{ site.baseurl }}/lifecycle-of-a-project/staffing/#distributed-teamwork) at 18F makes it crucial for communication plans to be established for every project early on — you won’t run into your teammates at the water cooler when they work across three time zones (check out this blog post to learn more about how 18F cultivates a [“remote first” mindset](https://18f.gsa.gov/2015/10/15/best-practices-for-distributed-teams/)). 

**Regular meetings**

Establish stand ups and retro schedules so that the update/feedback process is clear to everyone — but also be sure to establish the best/preferred methods for communication outside of those. Keep in mind that some of the partner agencies we work with won’t be able to access some of the tools we use at 18F (Google Docs or Hangouts, Slack, etc.) and make allowances for that. That being said, do encourage partners to get access to these tools as much as possible; collaborative platforms not only help increase efficiency, but also introduce partners into the 18F culture.

**Partner communication and bug submission**

We work with an empowered product owner, so a majority of the partner communication will (should) be with them, but stakeholders will likely be involved as well. Because of this, be sure to outline the process for bug submission (Trello? Waffle? Directly on a board vs other submission process?) and issue prioritization (Will this be done in sprint planning? Who has input?), as well as an escalation path for critical issues. As for frequency of communication, be proactive in general and start out high touch, then adjust to the needs of your team/partner as the project continues. 

18F avoids long term maintenance contracts, so in all likelihood you’ll be handing off the product to another team to maintain. To that end, plan for the end of a project at the beginning (or at least closer to the beginning rather than at the end) in your documentation of how decisions came to be, architecture, and the technical requirements of your project. See the [Renewals and Handoffs]({{ site.baseurl }}/lifecycle-of-a-project/renewals-and-handoffs/) section for more on this.

###Filling out a communications plan

As part of planning out your project communication, you need to fill out an [#outreach](https://18f.slack.com/messages/outreach/) team [Comms Plan form]() so that they can gather basic information about your product launch (this plan is used to do things like draft social media campaigns or help answer press questions). The [#outreach](https://18f.slack.com/messages/outreach/) team will then pass on the plan to GSA’s Office of Communications and Marketing and the Office of Congressional and Interagency Affairs. You can see samples of these comm plans [here](https://drive.google.com/drive/u/0/folders/0B7hjBcSbIxAnfndJTWJDWjVaX2NjVnRfNGhGazRjYnNVVXhHcnJuNmJOdEtXQ09VTkNBU0E). Here’s [a good example of a standard comms plan](https://docs.google.com/document/d/1hqdYs2yR4iBhqFP-utEcdqQLdteJvgx5lP9L2ROzNhI/edit#heading=h.luo7pdd2ubbk) and [one for a major launch](https://docs.google.com/document/d/1zFk9rpV8LcdbaaS25K1msRzGnEoi7i0QNR2vrcENatQ/edit#heading=h.luo7pdd2ubbk). 

Additionally, you need to designate a project “storyteller” who will give ongoing updates to the Comms team. This person does not have to be the product lead, and will serve as a conduit between the product and comms team. Notify the comms team of the storyteller contact in [#outreach](https://18f.slack.com/messages/outreach/).

Every product must have:

- About.yml entry
- A comms plan
- Ideas for ~3 blog posts (from your team)

The comms team will work with the storyteller to ensure that the above items are accurate and up-to-date. The storyteller will also meet with the comms team for 5-10 minutes each week during the blog huddle to update the comms on the following:

- upcoming milestones and events (that you’re going to or could present at)
- any impending risks to prepare for press and mitigate any issues
- progress on comms plan / blog posts
- any other ways the comms team can help your project
- upcoming speaking events / conferences that the project/product is represented at
- any updates that need to be conveyed to the agency partner’s comms team (and who those people might be.)
- updates for 18F newsletter or Dolores or #news
- updates for open source community who might be able to help with ‘help-wanted’ tags

In the first meeting with the storyteller, the comms team will go over the blog mission and how we talk about our products. Future (very, very short) meetings will follow the template listed above.


###How to communicate before a project has shipped

Work with your partner team to determine what kind of updates and reporting they need (and/or are expected to present to their stakeholders). This will determine the best way to communicate about the status with them — some may want to use a [dashboard](https://18f.gsa.gov/dashboard/) to serve this purpose (more information on this below), while others may use a [public wiki](https://github.com/18F/doi-extractives-data/wiki) or will be open to using a [public Trello board](https://18f.gsa.gov/2015/12/07/what-exactly-do-we-even-do-all-day/). Others may even request emailed reports or weekly updates on hours; however, we often negotiate to prevent this in our IAAs. Check with [#teamops]() if your client requests this. There is no one set method of reporting across projects. 

The 18F [dashboard](https://18f.gsa.gov/dashboard/) provides agency stakeholders and the general public insight into what projects 18F is currently working on. Keeping the status of your project up to date also helps 18F plan staffing. Some of the updates to the dashboard are automatic via an about.yml file in project GitHub repos; others require manual updates. You can learn more about what how to maintain your page in [#dashboard](https://18f.slack.com/messages/dashboard).

As you finalize the first launch date of your product, be sure to add your launch date (or launch date range) to the [18F Events Google Calendar](https://calendar.google.com/calendar/embed?src=gsa.gov_3rapmucstu32ma18da84el20ug@group.calendar.google.com&ctz=America/New_York). In many cases, the launch of a product is usually in a wide range of dates and narrows as your team gets closer to launch, but we need to give our friends in [#outreach](https://18f.slack.com/messages/outreach/) at least an idea of this range as far in advance as we can for the sake of their workflow. So for example, if you know right now that a product was launching at some point in January, we’d make note of that on January 1 and reference the four-week timeframe it will likely launch in (rather than spanning the entire month of January and clogging up the calendar). You’ll want to adjust that timeframe as your launch date solidifies.

###How to communicate after a project has shipped

**[#Outreach](https://18f.slack.com/messages/outreach/) communications project/product FAQ**

To ensure the best user experience possible, it’s important to proactively develop a project FAQ with your business or product owner prior to launch (or any blog post or other public communication) and include that in your [#outreach](https://18f.slack.com/messages/outreach/) communications plan. Note that this is part of the [#outreach](https://18f.slack.com/messages/outreach/) comms plan and for internal use; FAQ pages should be avoided through good UX design.

You can do this by anticipating user questions and issues and reviewing the project’s initial user research. Explain user stories that the product does not solve. Be sure to incorporate learnings from any UX inconsistencies that may have been revealed from testing as well (for example, if something was hard for beta users to find but has not yet been adjusted in the user flow, make sure the FAQ calls this out and links to it directly).

Don’t forget to **give your users options for feedback**. And in creating FAQ pages and avenues for feedback, consider options for both the general public (forms or specific email addresses for questions) as well as developers (API documentation, a wiki for outlining the limitations of the data, what issues are a priority, etc). 

**Blog posts**

18F’s commitment to working in the open means that writing about our projects and processes is an integral part of how we operate. This allows the public (as well as potential agency partners and new hires) to see how we work and how modern web practices can benefit government. These write-ups often take the form of blog posts. Read more about this process [here](https://hub.18f.gov/blogging/) and hit up [#blog](https://18f.slack.com/messages/blog/) for assistance when you and your product owner are ready to share your work. Oftentimes, blogging makes the most sense when your product ships, but you should also consider writing a post after the project has been live for a while to communicate wins and lessons learned from user research.

###Other resources

You are not alone in creating a communications plan; the artifacts and exact processes might vary, but every project at 18F has had to address communication. Use your peers as resources: the [#outreach](https://18f.slack.com/messages/outreach/) team is always ready to help with official communications plans as well as less formal strategies. Other product leads will also have great insight to offer and can help you troubleshoot specific issues; ask for assistance or about their experiences in [#product](https://18f.slack.com/messages/product). 
