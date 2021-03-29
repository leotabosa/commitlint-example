# commitlint-example

Testing commitlint library with a custom rule.

# Instructions

Clone or fork this repo with:

```bash
git clone git@github.com:leotabosa/commitlint-example.git
```

Install dependencies:

```bash
yarn install
```

Now add a file:

```bash
echo "hello" >> temp_file
```

Stage the file and commit (this should fail): 

```bash
git add temp_file
git commit -m "testing"
```

Now commit with a message matching the expected pattern:

```bash
git commit -m "#1 - Testing"
```

