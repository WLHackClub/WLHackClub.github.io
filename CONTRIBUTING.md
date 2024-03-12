# Contributing Guidelines

## Pull Requests

Pull requests will not be accepted or viewed.

## General Guidelines
### Naming Conventions

- All user created filenames should be in all lowercase.
- Filename should only contain ascii characters and should not contain spaces.
    - For html files dashes (`-`) are prefered
    - For all other files use underscores (`_`)

### Formatting Conventions

- Indentation
    - `html` - 2 spaces
    - `javascript` - 4 spaces
    - `css` - 4 spaces

## Project Guidelines 

To update the projects list, create a new html file in the `_posts/` directory with the format `YYYY-MM-DD-<url>.html` with `YYYY-MM-DD` being the day the project is started.

Make sure that the `<url>` does not match the `<url>` of any other file in the `_posts/` directory.

Add the following header.

```
---
title: <title of page>
layout: project
category: projects
tags: [<programming language tags>]
description: <description of page>
code_url: <url to source code>
slides_url: <url to slides>
---
```

**`title`, `layout`, and `category` are required fields, all others are optional**

For the programming language tags, please visit https://devicon.dev/ for more information.

Include the slides in pdf format in the `assets/projects/slides/` directory.

For example the header for the Personal Website project is:

```
---
title: Personal Website
layout: project
category: projects
tags: [html5, css3, javascript]
description: Learn the basics of html and css and create your own personal website!
code_url: https://replit.com/@TomasVargas-Ber/Website-Template-Modified-for-83023-Part-2
slides_url: /assets/projects/slides/personal_website.pdf
---
```

If you want to any additional information to the webpage, you can add any extra html under the header.
