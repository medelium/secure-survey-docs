# Homomorphic Encryption

Paillier cryptosystem, which is one schema of additive homomorphic encryption.

"That permits users to perform computations on its encrypted data without first decrypting it.
These resulting computations are left in an encrypted form which, when decrypted, result in an identical output to that
produced had the operations been performed on the unencrypted data." [Wikipedia](https://en.wikipedia.org/wiki/Homomorphic_encryption)

Our developed Rust library for additive homomorphic encryption: [github.com/medelium/secure-survey-rs](https://github.com/medelium/secure-suvey-rs)

## Keys

Homomorphic encryption keys consists of an encryption/public key and a decryption/private key. 
The encryption key is used to encrypt input data and the decryption key is used to decrypt cipher.
The encryption key is public and can be shared with anyone. The decryption key is private and should not be shared.

Keypairs are generated with 2048 bit security level.

### Public/Encryption Key

This key is shared with all other participants. These encrypt their sensitive input with all the public keys of other participants.
```json
{
    "n": "246213231378423674334513322..."
}
```

### Private Key
The private key is never shared and used to decrypt the received cipher.
```json
{
    "p": "110035683870647882302709536797795256747802742137251342309793580833813823...",
    "q": "146273030327770901230234206977283755850033159858846017686158224445370598..."
}
```

## Encrypted Cipher
The received cipher can be decrypted using the corresponding private key.
```json
{
    "raw": "110035683870647882302709536797795256747802742137251342309793580833813823...",
    "components": 1,
    "_phantom": null
}
```


## Node Bindings
All function arguments are JSON strings of in the above displayed format.

- `generate_keypair()` -> returns a JSON keypair containing a private and a public key
- `encrypt(ek: string, value: number )` -> encrypts the number (64-bit integer) using the key and returns a JSON encrypted cipher
- `add_many(ek: string, ciphers: string[])` -> adds all given encrypted ciphers using the encryption key and returns a JSON encrypted cipher
- `add(ek: string, cipher_a: string, cipher_b: string)` -> adds the two encrypted ciphers using the encryption key and returns a JSON encrypted cipher

### Generate keypair

```js
const { generate_key_pair } = require('./index');

let keypair = generate_key_pair();

```

### Add encrypted ciphers

```js
const { encrypt_value, add, add_many } = require('./index');

let keypair = JSON.parse(generate_key_pair())

let encrypted_1 = encrypt_value(keypair.ek, 10);
let encrypted_2 = encrypt_value(keypair.ek, 10);
// add two ciphers
let add_1 = add(keypair.ek, encrypted_1, encrypted_2);
// add a list of ciphers
let add_2 = add_many(keypair.ek, [encrypted_1, encrypted_2]);

```
