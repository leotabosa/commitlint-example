module.exports = {
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "task-rule": [2, "always"],
    "type-empty": [2, "always"],
    "signed-off-by": [0],
  },
  plugins: [
    {
      rules: {
        "task-rule": ({ header }) => {
          const error = "\033[1;31mERROR:\033[0m ";

          if (header && header.length < 6) {
            return [
              false,
              `${error}Your commit message has only ${header.length} characters, it should have more than 5.`,
            ];
          }

          return [
            String(header).startsWith("#"),
            `${error}Commit message should start with # link '#NNNNN' (task number).`,
          ];
        },
      },
    },
  ],
};
