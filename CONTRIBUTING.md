# Welcome to the Contributing Guide for the BIMData Platform. 

The BIMData Platform Team looks forward to your contributions.
This Guide intend to help you to provide the best effort, and therefore help us to improve the Platform.

This Platform is open source to help the most people to manage their BIM projects in the best way.
You can customize it to your needs.

We accept many forms of contribution: you can either report an issue, submit a fix or a new feature or contribute to our documentation. Thank you for your help.

* [Ground Rules](#ground-rules)
* Ask or Say Something? 🤔🐛😱
  * [Request Support](#request-support)
  * [Report an Issue](#report-an-issue)
  * [Request a Feature](#request-a-feature)
* Make Something? 🤓📜🍳
  * [Project Setup](#project-setup)
  * [Contribute Documentation](#contribute-documentation)
  * [Contribute Code](#contribute-code)
* Manage Something ✅🙆🏼👔
  * [Provide Support on Issues](#provide-support-on-issues)
  * [Review Pull Requests](#code-review-process)
  * [Join the Project Team](#join-the-project-team)
* Add a Guide like this one [to your Project](#attribution)? 🤖


# Ground Rules

* Ensure that the CircleCI build is successful for your Pull Request.
* Keep in mind that the BIMData Platform is a generic tool.
* We review your Pull Requests and are happy to give you feedback about it.
* However, we do not merge every Pull Request.
* We check every Issue in the Issues Board.
* Read the Code Of Conduct.

## Request Support

If you have a question about this project, how to use it, or just need clarification about something:

* Contact us: support@bimdata.io

## Report an Issue

If you find a security vulnerability, do NOT open an issue.
E-mail us support@bimdata.io instead.

If you run into an issue or bug 🐛 with the project, then open an Issue.

When sending or filing an issue, make sure to give the most information you can:

  0. What is your browser's name and version?
  1. What did you do?
  2. What did you expect?
  3. What did you see instead?

## Request a feature

If the project doesn't do something you need or want it to do:

* Open an Issue at https://github.com/bimdata/platform/issues
* Provide as much context as you can about what you're running into.
* Please try and be clear about why existing features and alternatives would not work for you.


* The dev team will evaluate the feature request. If the issue is closed, the team will convey their reasoning and suggest an alternative path forward.
* If the feature request is accepted, it will be marked for implementation with `feature-accepted`, which can then be done by either by a core team member or by anyone in the community who wants to [contribute code](#contribute-code).

Note: The team is unlikely to be able to accept every single feature request that is filed. Please understand if they need to say no.

# Project Setup

So you wanna contribute some code! That's great! 

This project uses GitHub Pull Requests to manage contributions, so [read up on how to fork a GitHub project and file a PR](https://guides.github.com/activities/forking) if you've never done it before.

If this seems like a lot or you aren't able to do all this setup, you might also be able to [edit the files directly](https://help.github.com/articles/editing-files-in-another-user-s-repository/) without having to do any of this setup.

If you want to go the usual route and run the project locally, though:

* [Install BIMData Platform](https://)
* [Fork the project](https://guides.github.com/activities/forking/#fork)
 * Then [look at the README for the frontend](https://github.com/bimdata/platform/blob/master/README.md) and [the README for the backend](https://github.com/bimdata/platform-back/blob/master/README.md) to set up your full Platform locally.

And you should be ready to go!

# Contribute code

This project uses GitHub Pull Requests to manage contributions, so [read up on how to fork a GitHub project and file a PR](https://guides.github.com/activities/forking) if you've never done it before.

If this seems like a lot or you aren't able to do all this setup, you might also be able to [edit the files directly](https://help.github.com/articles/editing-files-in-another-user-s-repository/) without having to do any of this setup.


We like code commits a lot! They're super handy, and they keep the project going and doing the work it needs to do to be useful to others.

Code contributions of just about any size are acceptable.

Let's go!

* [Set up the project](#project-setup).
* Make any necessary changes to the source code. Note that we are using [coding standards](#coding-standards).
* Include any [additional documentation](#contribute-documentation) the changes might need.
* Let the CircleCI build pass (that verify that your contribution works as expected).
* Write clear, concise commit message(s).
* Dependency updates, additions, or removals must be in individual commits.
* Go to https://github.com/bimdata/platform/pulls and open a new pull request with your changes.
* If your PR is connected to an open issue, add a line in your PR's description that says `Fixes: #123`, where `#123` is the number of the issue you're fixing.

## Coding Standards

For the frontend, we follow the [Javascript Standard Style](https://standardjs.com/).
For the backend, we are using the [PSF/Black code formatter](https://github.com/psf/black).

## Code review process

Once you've filed the PR:

* Maintainers will not review PRs until all checks pass (it means "until CircleCI builds").
* One or more maintainers will use GitHub's review feature to review your PR.
* If the maintainer asks for any changes, then edit your changes, push, and ask for another review.
* If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that lightly.
* If your PR gets accepted, it will be marked as such, and merged into the `dev` branch soon after. Your contribution will be distributed to the masses as soon as the maintainer trigger a deployment process.

# Contribute documentation

Documentation is a super important, critical part of this project. Docs are how we keep track of what we're doing, how, and why. It's how we stay on the same page about our policies. And it's how we tell others everything they need in order to be able to use this project -- or contribute to it. So thank you in advance.

Documentation contributions of any size are welcome! Feel free to file a PR even if you're just rewording a sentence to be more clear, or fixing a spelling mistake!

To contribute documentation:

* Read [the README of the Documentation repository](https://github.com/bimdata/documentation/blob/master/README.rst) to set up the project.
* Edit or add any relevant documentation.
* Make sure your changes are formatted correctly and consistently with the rest of the documentation.
* Re-read what you wrote, and run a spellchecker on it to make sure you didn't miss anything.
* Write clear, concise commit message(s)
* Go to https://github.com/bimdata/documentation/pulls and open a new pull request with your changes.

# Provide Support on Issues

Helping out other users with their questions is a really awesome way of contributing to any community. It's not uncommon for most of the issues on an open source projects being support-related questions by users trying to understand something they ran into, or find their way around a known bug.

Sometimes, the `support` label will be added to things that turn out to actually be other things, like bugs or feature requests. In that case, suss out the details with the person who filed the original issue, add a comment explaining what the bug is, and change the label from `support` to `bug` or `feature`. If you can't do this yourself, @mention a maintainer so they can do it.

In order to help other folks out with their questions:

* Go to the issue tracker and [filter open issues by the `support` label](https://github.com/bimdata/platform/issues?q=is%3Aopen+is%3Aissue+label%3Asupport).
* Read through the list until you find something that you're familiar enough with to give an answer to.
* Respond to the issue with whatever details are needed to clarify the question, or get more details about what's going on.
* Once the discussion wraps up and things are clarified, either close the issue, or ask the original issue filer (or a maintainer) to close it for you.

### Some notes on picking up support issues:

* Avoid responding to issues you don't know you can answer accurately.
* As much as possible, try to refer to past issues with accepted answers. Link to them from your replies with the `#123` format.
* Be kind and patient with users -- often, folks who have run into confusing things might be upset or impatient. This is ok. Try to understand where they're coming from, and if you're too uncomfortable with the tone, feel free to stay away or withdraw from the issue. 

