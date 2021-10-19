  <img src="https://i.imgur.com/73w0Ax3.png" />

# Instructions

Clone this repo with:

```bash

git clone git@github.com:leotabosa/commitlint-example.git

```

Install dependencies:

```bash

yarn install

```

Now add a file:

```bash

echo  "hello"  >> temp_file

```

Stage the file and commit (this should fail):

```bash

git add temp_file

git commit -m "testing"

```

Why?

```js
return [
  String(header).startsWith("#"),

  `${error}Commit message should start with '#NNNNN' (task number).`,
];
```

Now commit with a message matching the expected pattern:

```bash

git commit -m "#1 - Testing"

```
