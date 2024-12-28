---
title: 'Efficient Differentially Private Tensor Factorization in the Parallel and Distributed Computing Paradigm'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Feng Zhang
  - Hao Wang
  - Ruixin Guo
  - Erkang Xue
  - Guangzhi Qu

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2023-12-21T00:00:00Z'
doi: 'https://doi.org/10.1109/ISPA-BDCloud-SocialCom-SustainCom59178.2023.00081'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-12-25T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *2023 IEEE Intl Conf on Parallel & Distributed Processing with Applications, Big Data & Cloud Computing, Sustainable Computing & Communications, Social Computing & Networking (ISPA/BDCloud/SocialCom/SustainCom)*
publication_short: In *ISPA*

abstract: Tensor factorization plays a fundamental role in multiple areas of AI research. Nevertheless, it encounters significant challenges related to privacy breaches and operational efficiency. In this study, we propose a novel approach that addresses both of these issues simultaneously by integrating differential privacy with parallel and distributed computing. To accommodate diverse scenarios, we introduce two models DPTF-SVRG and ADMM-DPTF, each leveraging specific techniques. DPTF-SVRG is designed for single-GPU environments and utilizes a unique strategy to reduce gradient variance, enabling faster convergence compared to SGD. Moreover, it achieves parallelism on the GPU through a lock-free asynchronous approach. On the other hand, ADMM-DPTF utilizes distributed ADMM to parallelize DPTF-SVRG, enabling multi-GPU parallelism. Experimental results demonstrate that our algorithms outperform existing benchmarks while maintaining differential privacy.

# Summary. An optional shortened abstract.
summary: we introduce two models DPTF-SVRG and ADMM-DPTF, each leveraging specific techniques. DPTF-SVRG is designed for single-GPU environments and utilizes a unique strategy to reduce gradient variance, enabling faster convergence compared to SGD.

tags:
  - Tensor factorization

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://ieeexplore.ieee.org/abstract/document/10491641'
# url_code: ''
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
