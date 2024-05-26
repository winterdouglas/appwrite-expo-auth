export const beautify = (messageOrError: unknown) =>
  JSON.stringify(messageOrError, null, 2);

export const log = (messageOrError: unknown) => {
  console.log(beautify(messageOrError));
};
