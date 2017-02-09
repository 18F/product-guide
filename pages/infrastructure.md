---
permalink: /lifecycle-of-a-project/infrastructure/
title: Infrastructure
parent: Lifecycle of a Project
---
###Product ownership responsibilities

Don’t underestimate the potential fallout of delivering a fragile service. There will be pressure to tackle other features, but you should focus on ensuring the high visibility and priority of infrastructure concerns. This way you can avoid scrambling to get your product’s infrastructure in shape when the launch deadline passes, the money runs out, etc. Consider having a separate backlog of just infrastructure stories, and throttling one into the top of the backlog sprint by sprint so they’re not ignored in favor of stakeholder- or user-driven stories that would otherwise drown them.

You’re likely to have stakeholders who are not be able to articulate or understand infrastructure concerns as stories, let alone prioritize them, so someone on the team will need to act as their proxy. Take a look at the [list of suggested “good” production practices](https://pages.18f.gov/before-you-ship/infrastructure/good-production-practices/) to get an idea of the kinds of things the team should think about. (If you’re unclear on any of them yourself, you can ask questions in [#devops](https://gsa-tts.slack.com/messages/devops/).) Ensure your project backlog includes stories for the ones in bold at least, which are considered must-haves.

Analytics should also be on your mind early, both to help understand how users use your product as it develops, and how the speed and stability of your product affects their experience. See below for pointers on getting started with [DAP](http://www.digitalgov.gov/services/dap/) (for usage analytics) and [New Relic](http://newrelic.com/) (for application speed and subjective performance).

###Making infrastructure choices

Review the [Infrastructure page in the Before You Ship guide](https://pages.18f.gov/before-you-ship/infrastructure/) for guidance on how to choose where to deploy your product. Depending on your evaluation:

-   **To use cloud.gov for infrastructure:** Ensure there’s an explicit Statement of Work (SOW) in the form of a [7600B](https://pages.18f.gov/iaa-forms/attachment-b.html) to accompany the project’s IAA. For help getting this set up or getting your project set up in cloud.gov once it’s signed, ask in [#cloud-gov-business](https://gsa-tts.slack.com/messages/cloud-gov-business/).
-   **To use AWS for your project’s infrastructure:** Ensure there’s enough dedicated operations skillset and capacity budgeted in your team to handle the additional AWS-specific operations and deployment effort.

The cloud.gov team can offer [consulting](https://docs.cloud.gov/intro/terminology/pricing-terminology/#consulting:1e925b399ff4600538be4d8c59c010ca) to help deliver your product. If you choose to do this, be aware that cloud.gov team members will bill time to your project for effort that’s specific to your product’s circumstances. You may want to plan ahead with a small buffer to absorb this cost if you think your team will need it.

###Adopting DevOps practices

If there’s a third pillar behind user-centered design and agile practices at 18F, it might be DevOps. “DevOps” refers to combining responsibility for a product’s operations into the activities of the development team. Applying DevOps early in development has a positive effect on minimizing risk and adopting good long-term architectural decisions.

The use of cloud.gov for deployment practices makes many formerly operations-domain responsibilities practical to handle alongside normal development, so the barrier to adopting DevOps in a team at 18F is lower than elsewhere. That said, your team may be wholly unfamiliar with the Ops domain and reluctant to take on these responsibilities. In that case, consider having one person on the team focus on the infrastructure-focused stories early to get familiar with the tools available and get an initial deployment pipeline in version control, relying on help from [#devops](https://gsa-tts.slack.com/messages/devops/) or [#cloud-gov-support](https://gsa-tts.slack.com/messages/cloud-gov-support) as needed. Then emphasize pairing as new infrastructure stories are worked on to spread that skillset around the team.

### Client expectations

What will you do if something breaks? Have you talked to your client about their expectations of up time and their budget? 18F currently does not offer Service Level Agreements (SLAs), which normally include agreements about uptime and response time to downtime, but you should have an escalation protocol in place. Here is an example from the [betaFEC](https://beta.fec.gov) team.

> 18F does not officially offer Service Level Agreements (SLAs), but we would still like to clarify expectations of up time for our client and users:
>
> Three main components are responsible for hosting [beta.fec.gov](https://beta.fec.gov) and its data: the betaFEC web app, cloud.gov, and api.data.gov. These services are all under constant monitoring and set up for low or zero-downtime deployments, and we expect them to operate continuously. Our data is updated nightly. Cloud.gov's current status and history of uptime is available [here](https://cloudgov.statuspage.io), and api.data.gov's is [here](https://synthetics.newrelic.com/report/UIoF9).
>
> Problems should be reported by opening an issue on [GitHub](https://github.com/18F/openfec). If you would like to escalate the issue, you can reach out to your 18F Product Manager by [texting/calling (555)555-5555/slack DMing/emailing/etc.]. We may not address issues outside of business hours until the next day.

###Planning for transition

Infrastructure work surrounding your product should result in repeatable deployment tooling that is captured as part of the product’s code. This can take the form of:

-   Deployment instructions in the repository
-   Setup scripts (a la '[go](https://github.com/18F/go_script)')
-   [Cloud Foundry manifests](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)
-   [Continuous integration](https://pages.18f.gov/dev-environment/continuous-integration/) / [continuous deployment](https://docs.cloud.gov/apps/continuous-deployment/)

Treat this operations work as a development task rather than one-off efforts. This maximizes your team’s ability to retrace steps and share ownership as the makeup of your team inevitably changes over time.

By using cloud.gov and capturing the full deployment process in your project’s repositories, you will also minimize the need for special access to AWS for those developing and maintaining your product. This will ease the work of future teams which may pick up your product after a big pause, and also makes it easier to transition ownership to your stakeholders when 18F’s work on the product ends.

###Related groups and channels

-   **cloud.gov** — If you have questions about the use of cloud.gov for your project’s infrastructure, ask in [#cloud-gov-business](https://gsa-tts.slack.com/messages/cloud-gov-business/). If your team needs help with using cloud.gov to implement one of your infrastructure stories, suggest they ask in [#cloud-gov-support](https://gsa-tts.slack.com/messages/cloud-gov-support).
-   **Analytics** — The Analytics Guild’s mission is to integrate website analytics into all 18F projects. See our [Analytics Standards](https://github.com/18F/analytics-standards) for more information.
-   **DevOps** — As described above, DevOps is less a group or skill so much as a practice. [#devops](https://gsa-tts.slack.com/messages/devops/) is a good place to discuss DevOps practices and approaches, as well as to get pointers on access to available tools which can address specific needs. For example, New Relic to measure subjective performance, Pingdom to measure and alert on availability, etc.
