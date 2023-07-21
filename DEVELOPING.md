# Developing

Thank you for helping us build the project website! The developing guide assumes you already have [npm, node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and git installed. Also, we assume a basic familiarity with git and github including [cloning repos](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and [creating pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). If you are unfamiliar with these or dont have them already installed we have linked a few resources to help get you started.  

## Environment setup

1. Fork the the repo and clone your fork `git clone <your fork>`
2. Install the pre-requisites with `npm install`

## Development

```
IMPORTANT! When you create commits please remember to do so with the -s option. If you skip this step we will not be able to accept your submission. This would look like: 
git commit -s
```

For development there are several actions that can be found. Look in `package.json` under the `scripts` section to see what can be run. The basic setup is to run `npm run dev`. This will give you a live server on localhost that will allow you to see your changes in real time.

## Contributing

Once you are happy with your development create a pull request to the website and we will review the changes. There may be some feedback but after it has been resolved we will merge the pull request. 