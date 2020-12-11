##Installation

```
npm install
```

##Setup

1. Copy the file `/.env.example` to `/.env` and add your
   Contenful tokens and Phrase project ID
1. Copy the file `/.phrase.yml.example` to `./phrase.yml`
   and add your Phrase access token adn project ID

You will need a content model in Contentful called
"retroware" with these fields:

- model (Short text)
- manufacturer (Short text)
- description (Long text)
- image (Media)
- priceInCents (Integer)

##Development

```
npm start
```
