---
layout: post
title:  "Apache Santuario XMLSec OS Contributions"
date:   2022-07-19 10:14:10 -0700
categories: apache santuario xml
---
Enabling Keycloak for FIPS 140-2 compliance required us to contribute to Apache's 'Santuario' xml security project. We need Santuario with ability to add custom signing algorithms via a Java option. 

[Apache Santuario Docs][Apache Santuario Docs]:


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
[Apache Santuario Docs]: https://santuario.apache.org/