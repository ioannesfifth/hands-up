# Introduction

***Hands Up!*** is a small app for dealing with the issue of ping when raising your hands on Google Meet between farway teams.

# Current State

***Hands Up!*** is currently under active development. This first version will probably remain as the core product, but many more problems need to be solved including but not limited to:

- Production mode
- Code cleanup
- Personal Best records
- Add a backend to handle the above, possibly using Go and gin or gRPC depending on future Svelte support for it
- Adjustable duration and tempo

# How to use

1. Download the project.
2. Make sure your docker is running.
3. In the root directory (i.e. the directory that contains `./frontend` and `./backend`), run `./build.sh`.
4. After the build succeeds, run `./run.sh`.
5. Open [localhost:5173](http://localhost:5173/) on your browser (you may have to wait a bit for everything to get started).