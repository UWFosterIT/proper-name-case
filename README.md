# Proper Name Name

Attempt to properly case a person's name. It should noted that without creating a massive lookup table this can only be partially complete. This module adjusts casing based on patterns of common casing quirks (O'Brien, McDonald, Baron von Mustache, etc.) but there will always be exceptions. For example, `MACKENZIE` converts to `Mackenzie` even though some people will case it as `MacKenzie` 

## Usage

Pass a string to the `convert` method. It will return a best effort at converting it to proper name case.

## Development

Clone the repo and do your thing. If you add code to cover additional conversions, please make sure they are added to the tests.

## Testing

  npm run test

The file `test-data.js` contains a list of names to be converted and the expected results.  

## Credit
This code is a conversion of the following: https://dialect.ca/code/name-case/name_case.phps
