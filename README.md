httpsink
========

A black hole for HTTP traffic.  Ever wanted an endpoint you could
point something (like an embedded error handling library) at, to
just gather up as much as you can?  That's what `httpsink` does.

To run it:

    $ docker run -d --restart always \
                 --name httpsink \
                 -p 4500:4500 \
                 filefrog/httpsink

Then, whatever you send (or proxy!) to TCP/4500 gets printed to
the container's stdout log stream.  This provides some buffering,
but does not overly tax longterm storage.

Here's an example:

    $ curl -s http://127.0.0.1:4500/baz?quux \
           -u foo:bar -H 'X-Foo: Bar'

    $ docker logs httpsink
