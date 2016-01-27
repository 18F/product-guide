---
permalink: /lifecycle-of-a-project/budgeting/
title: Budgeting
parent: Lifecycle of a Project
---
You’ll work closely with the IAA team to develop an understanding for the budget of a project when it becomes yours and to ensure that the project budget is being considered throughout the project. Budgeting for infrastructure can be a project in and of itself, as it’s challenging to look up the infrastructure burn on all projects as a baseline right now. There are tools to use for infrastructure burn estimation currently being built, along with a calculator that will help you do this. Contact the director of infrastructure for more information. Keep in mind that budgeting happens throughout the lifecycle of the project, not just the start.

###Talking about budget with clients
**Budget should not be a negotiation**

18F uses a cost-recoverable billing model. As such, the budget represents the best estimation of what it will cost to perform the services on behalf of our clients. The [How We Bill](https://docs.google.com/document/d/1Vm_gvwfxJVTLtM0-al62-o6dBySjQKI0zQkSvGfii6w/edit) blog post draft is a useful reference. Because revenue does not include a profit margin, there is no real ability to “negotiate” pricing in a traditional sense with 18F clients. If clients object to the estimate, the best communication approach is to negotiate project scope rather than the amount itself. Typically, projects are staged in an agile fashion, between discovery, discretely-scoped sprints, and maintenance. If necessary, the IAA and SOW can be adjusted with a tighter scope to satisfy a client’s budgetary constraints. Also, be sure to check out the ["How much do you charge per hour?" response document](https://docs.google.com/document/d/1Ou6pKGReuuE0HhujURRnhiosgfDonKY3sSiDlM_jnqo/edit) and [Labor Rate Change Talking Points](https://docs.google.com/document/d/1VHt3HNJQZXZrdYi-aTsekC3O_B3QNMTTxiu5ygsSuRY/edit).

**NTE (Not To Exceed) budget**

IAA budgets are worded as a Not To Exceed budget. This means that the outlined budget represents a high water mark of billing. It’s not necessary to actually hit the budget estimate; in fact, the budget estimation should include a buffer for worst-case scenarios, unanticipated costs, or scope fluctuations that may occur during the engagement period. It’s important to set expectations with clients about the NTE nature of the budget because it provides both parties with flexibility under the contractual agreement.

###Key budget elements
Below are some of the most important things to estimate at the start of the project:

**Billable time for the team**

Typically, the biggest component of the budget will be labor hours. This is best estimated by asking subject matter experts to help estimate hours. For instance, asking a frontend engineer in [#eng-facilitators](https://18f.slack.com/messages/eng-facilitators/) to help estimate the time required for the known project interface could be helpful. This typically occurs during the [tech eval phase](/lifecycle-of-a-project/tech-eval/) of the intake process, or alternatively you could ask group leads for estimates. Be sure to ping each resource you’ll potentially need on the project. Consider backend, frontend engineering, design, content, and product management staff during your estimation, all of whom have an appropriate slack channel for this kind of discussion.

**Travel costs**

Often your team will need to travel to the client site during specific project milestones. For budgeting purposes, it’s good to estimate travel for a fully distributed (remote to DC) core development team. Some important activities which may require travel include: design sprints, UX research and interviews, presentations of findings to stakeholders, project launches, post-launch celebrations, and debriefing. There may be other ad-hoc travel required by specific team members depending on project specifics.

**Infrastructure and DevOps time**

This is an important but often overlooked component of the budget. Infrastructure covers [cloud.gov costs](https://docs.cloud.gov/intro/pricing/rates/) and related expenses, as well as any special software licenses or paid tiers you may need for the project itself. A great example of this is [New Relic](http://newrelic.com/), which is a significant monthly cost that many of our projects incur. Keep in mind that for almost any project, some DevOps team hours will be required for smooth deployments into the cloud.gov environment and going through the [ATO process](/lifecycle-of-a-project/before-you-ship/). Be sure to talk to a member of the team in order to estimate roughly how many hours of their time will be required.

**Miscellaneous**

Does the project require any other specialized resources that aren’t covered by 18F? Printing needs? Legal counsel? 

###How to estimate
**Tech eval**

During the [tech eval phase](/lifecycle-of-a-project/tech-eval/), the project scope will become clearer and inform what type of hosting needs will be required for the project. The engineering team will also be able to shed light on roughly how many people it will take to achieve this project.

**Talking to functional leads**

You should talk to each of the functional leads assigned to the project (frontend, backend, design, ux, content, etc.) and understand what they’ll require as the feature breakdown becomes clearer. Requirements should cover estimated weekly hours over the length of the IAA scope, any expected travel requirements, and additional team members input. Be sure to quickly touch base with DevOps as well to estimate any peripheral hours from their side required for hosting.

**Cost calculators**

Cost calculators have been developed to help synthesize all of the hourly and other requirements from functional leads into a working budget. The primary cost calculator is found [here](https://docs.google.com/spreadsheets/d/1bOGOs1Zg_KqIG2XbqLXDY1zRdmvpxqV2zUjnDYT5CoA/edit#gid=0).

**Looking at prior projects**

It’s helpful to look at comparable projects’ cost calculators and other estimates if you’re having trouble getting started. Often, this can provide general guidance on scope and can be updated with the specific differences of your project.

**When in doubt**

If you’re lost, there are many resources available on Slack to help. [#product](https://18f.slack.com/messages/product) and [#finance](https://18f.slack.com/messages/finance/) are good places to start. [#iaa](https://18f.slack.com/messages/iaa/) and [#devops](https://18f.slack.com/messages/devops) are good for specific questions related to those aspects of the project. Reaching out to [#eng-facilitators](https://18f.slack.com/messages/eng-facilitators/) and [#design](https://18f.slack.com/messages/design) may also be useful for answering specific SME-focused questions. When reaching out to these channels, try to find people who can answer your specific functional questions directly rather than spamming the channel.

You should also know that 18F does have rate changes, which requires additional sensitivity and client management. You can always ask about impending rate changes in [#finance](https://18f.slack.com/messages/finance/). These can often throw a serious wrench in the budget building process, as can billing inaccuracies and unexpected infrastructure costs. Account for everything that you can, but you should plan for and expect to have missed some things. If you can cushion your budget for this, it will be to your benefit and will help you keep your project within its budget.

###More resources
[How We Bill](https://docs.google.com/document/d/1Vm_gvwfxJVTLtM0-al62-o6dBySjQKI0zQkSvGfii6w/edit) 
[How much do you charge per hour?](https://docs.google.com/document/d/1Ou6pKGReuuE0HhujURRnhiosgfDonKY3sSiDlM_jnqo/edit)
[Labor Rate Change Talking Points](https://docs.google.com/document/d/1VHt3HNJQZXZrdYi-aTsekC3O_B3QNMTTxiu5ygsSuRY/edit)
[IAA cost estimation worksheet](https://docs.google.com/spreadsheets/d/1bOGOs1Zg_KqIG2XbqLXDY1zRdmvpxqV2zUjnDYT5CoA/edit#gid=0)
**Slack channels:** [#product](https://18f.slack.com/messages/product), [#finance](https://18f.slack.com/messages/finance/), [#iaa](https://18f.slack.com/messages/iaa/), [#devops](https://18f.slack.com/messages/devops), [#eng-facilitators](https://18f.slack.com/messages/eng-facilitators/), [#design](https://18f.slack.com/messages/design)
