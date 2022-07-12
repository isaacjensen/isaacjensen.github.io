---
layout: post
title:  "Keycloak with BCFIPS libs for FIPS 140-2 Compliance"
date:   2022-07-09 10:14:10 -0700
categories: keycloak oidc saml iam
---
Since joining McAfee Enterprise, i've been working on enabling FIPS 140-2 (140-3 soon) compliance
with Keycloak. Keycloak is an IAM solution allowing apps to authenticate with keycloak itself, instead of writing a home-built AuthZ/AuthN solution.  

[BouncyCastle FIPS Java Release][BCFIPS-Docs]:

Enabling FIPS 140-2 compliance for keycloak proved to be quite the challenge. The journey started with getting the unit/integration tests passing when we set the BCFIPS crypto libs into an "approved only" mode. This was the fundamental idea for the project: add BCFIPS libs to Maven's POM.xml, add JAVA_OPTS and set to " FIPS 140-2 approved only" crypto operations, get tests to pass, and voila!

This isn't where the difficulty ended though. In order to run the keycloak server in FIPS 140-2 mode, we had to make significant changes to the Wildfly Elytron Security Subsystem to load the BCFIPS providers for use. We want to run keycloak in a production environment, with high availablity in a kuberbetes cluster with thousands of users. This required changes to the SSL/TLS connection between our RDS database and our Auditlog service, using BCFIPS keystores for both. There are pleanty of compatability issues when using BCTLS to communicate with AWS services. AWS Lambda requires SNI (server name indication) and this must be configured at the HTTPS client level. We ended up not being able to use HTTPSUrlConnection lib, as it doesnt send SNI. Switching to ApacheHTTPClient allowed us to communicate with our Auditlog service running on AWS Lambda. 


==============

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[BCFIPS-Docs]: https://www.bouncycastle.org/fips-java/