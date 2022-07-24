IMAGE ?= filefrog/httpsink:latest

build:
	docker build -t $(IMAGE) --platform linux/amd64 .
push: build
	docker push $(IMAGE)
