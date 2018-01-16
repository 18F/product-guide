---
permalink: /lifecycle-of-a-project/renewals-and-handoffs/
title: Renewals & Handoffs
parent: Lifecycle of a Project
---
All good projects come to an end, and we want our clients to be empowered to continue working after we’ve left an engagement. This part of the process varies quite a bit by project, but we consistently want to be thinking about the following objectives when handing off a project: 

-   **Maintain open source** — the receiving infrastructure team may expect to take the code out of GitHub or make other modifications to work in their systems that bring into question the openness and maintainability of the project in the future. This should be addressed with the client early in the project planning process as they get to know how 18F works.
-   **Maintain easy access for us and new team** — we want to be able to smoothly transition pieces of the project over to the new transition team. To ensure this, it’s incredibly important that both our team and the new team have access to all relevant systems and information.
-   **Maintain modern infrastructure** — ideally the partner agency has a development team to hand the project off to. That team can continue to run the software on 18F infrastructure, using PaaS or IaaS resold through 18F, Federalist, or something else. There will be an explicit portion of the old and new IAA dedicated to this, but make sure the new team is aware of retaining the infrastructure for the project. If the agency is not remaining on 18F infrastructure, it’s important that a plan be created for how to transition away early on in the handoff process.
-   **Bring lessons learned to the rest of 18F** — you’re going to learn a lot about a particular engagement as you start to wind a project down. Be mindful about how you can document and capture these lessons learned so that the rest of 18F can learn from your experiences. Consider taking these lessons learned to our working groups and guilds for them to socialize amongst their teams. 

Given the nature of our work, you should be thinking about the hand-off early in the development process. The eventual handoff may deeply affect many technical and design choices. 

You’ll want to get a deep understanding of any vendor or agency capabilities and systems as well as how their internal teams work (for example, GSA IT with a vendor team) in terms of mindset, ability, and systems. The more you can glean early on in the process with regards to the partner’s capabilities, the better off the transition process will be when the time comes.

Consider bringing the transition team into our way of working early on in your project so they can familiarize themselves with the way we work. Perhaps include them in a sprint or two while we’re still developing so they can observe benefits and possibilities. Client education should absolutely include the transition team all along the way.

###Starting the process

The IAA team will send a [90-day countdown email](https://docs.google.com/document/d/1b4tGKEPI3aVggA1JSC210ZaILmQHKGr-dSKZluMVG1M/edit) to let you know that the agreement for your project is coming to an end. While an exit strategy should have already been outlined during project planning, this email should prompt you to begin discussing the renewal or handoff process with the client. Again, it may be worth integrating the agency developers and designers into the team as you begin this discussion and give them access to all of the appropriate systems (GitHub, cloud.gov, etc.) 

Many of our IAAs are set to end at the end of a fiscal year due to the way projects are funded even if the project itself is unlikely to end. This is why it’s incredibly important to have some foresight to budget for extra funding in order to cover any components of the end of a fiscal year transition, including AWS usage and cloud.gov estimates.

If the scope of the work for the project is changing (for example, delivery and infrastructure to infrastructure only) at the change of the fiscal year, a new IAA will need to be created to outline that scope. If the scope is not changing, a renewal is much simpler. You can work with the IAA team on any and all of these cases.

If the project will have a delivery handoff instead of a contract renewal, it will likely fall into one of these categories:

-   Client hosts with in-house (or existing contracted) IT support
-   Client develops with in-house (or existing contracted) IT support
-   18F hosts
-   Client procures third party development/hosting
-   18F helps client procure development/hosting

###Handoff

There are a number of tasks you’ll need to complete as you move into the handoff phase of a project. It’s incredibly important that you communicate early and often about this when once you’ve solidified a landing strategy and are a few months out. Remember that we always want our clients to be empowered to continue working after we’ve left an engagement. A smooth handoff will allow them to do just that.

You also need to ensure everything is documented and that all remaining tasks on the project, with the exception of handoff duties, are getting transferred to the project team that is taking over. Some of these tasks might include:

-   Identifying any transition team stakeholders who will be empowered to make decisions about the transition and work directly with them to ensure everything is in place.
-   Creating something akin to a spec document with very technical requirements. The agency transition team may expect this kind of document, but work with them to get them what they need without creating too much of a burden on your and your team.
-   Transferring all support email addresses to appropriate client stakeholder
-   Organizing all of your materials
   -   Clean any old issues out of your tracking tool and update open issues with historical data so that a new team can understand the status.
   -   Do a final backlog grooming and shaping of next 1-2 releases, fleshing out items to preserve context so that the handoff team can understand the project better and its priorities.
   -   Ensure that the design documents and backlog are both accessible publically if possible and that the right people know how to access them.
   -   Have the team perform a thorough review of any open issues that you have with any potential suggestions on how to implement them.
   -   Take screenshots of anything important and save them in your tracking tool or other shared space.
Export all issues and GitHub-oriented project management artifacts.
   -   Change ownership of the repository or repositories to the agency and fork that new repository. See the [18F Handbook](https://handbook.18f.gov/github/#rules) for relevant rules on transferring repositories. Be sure to add a disclaimer and link in the README and description noting that the newly-forked repo is for historical purposes.
-   Transitioning all tasks to the client’s project team with the exception of team members working on project documentation.
   -   Do the team’s developers feel like a new developer could set up an instance of the software from the README file?
   -   Do the developers also feel that a new developer could easily learn to run each test suite from the README?
   -   If the project will not be moving to different infrastructure, do the developers feel confident that deploys are clearly and obviously documented?
   -   Ask a developer to go through the documentation to update any outdated info

If the project will be switched to different servers, know the infrastructure stakeholders involved and the technical capabilities of their teams as early as possible. Infrastructure stakeholders are anyone who would be on a transition team for a project going to operations and maintenance , say, in the agency's IT department. Bringing these folks in early lets us educate them about the technology stacks we use and gives them time to evaluate how they will support the project once it transitions. Educating them helps us preserve the project going forward, by ensuring that the team can support the project as it exists in its open source, actively maintained form.

###Fielding questions

You’re likely going to have to field and triage a great deal of questions as you move through your transition. Many if not all of these questions come from a very enterprise IT department. While we will likely encounter some of these questions with our partners, not all of them will be relevant to every project that we do. You can typically turn to the developers on your team to answer these questions. With any luck, you might be able to deduce some of this from the project documentation. Some of the questions you might get from the client will be:

-   Is the product security certified? Can we see evidence? (FISMA, etc)
-   Does the product need to be recertified per our agency’s guidelines?
-   How do we access the database?
-   How do we do updates and patches?
-   How is deployment done?
-   How do we access the GitHub repository?  How do we migrate the code?  
-   What is the architecture or schema of the product?
-   What dependencies are there with other 18F repos? 

Here are some sample questions one project had to answer for an enterprise-focused IT team:

-   What is the application development platform?
-   What is the database used by the application?
-   What is the Reporting and Analysis (BI) technology?
-   What is the Application Server?
-   What is the Web Server?
-   What is the Integrated Development Environment?
-   What is the Programming Environment?
-   What is the Programming Language?
-   What is the Scripting Language?
-   What is the Network Operating System?

