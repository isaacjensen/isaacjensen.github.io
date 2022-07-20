---
layout: post
title:  "Apache Santuario XMLSec OS Contributions"
date:   2022-07-19 10:14:10 -0700
categories: apache santuario xml
---
Enabling Keycloak for FIPS 140-2 compliance required us to contribute to Apache's 'Santuario' xml security project. We need Santuario with ability to add custom signing algorithms via a Java option. 

[Apache Santuario Docs][Apache Santuario Docs]:
[Actual PRs][Contributions]:

We can now supply a custom algorithm via Java options at runtime.

==============

[Apache Santuario Docs]: https://santuario.apache.org/
[Contributions]: https://github.com/apache/santuario-xml-security-java/pull/70