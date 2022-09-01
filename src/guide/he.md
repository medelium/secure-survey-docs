# Homomorphic Encryption

Rust library for homomorphic encryption: https://github.com/medelium/secure-suvey-rs

## Keys

Homomorphic encryption keys consists of an encryption/public key and a decryption/private key.
The encryption key is used to encrypt data and the decryption key is used to decrypt data.
The encryption key is public and can be shared with anyone. The decryption key is private and should be kept secret.

Keypairs are generated with 2048 bit security level.

### Public Key

```json
{
    "n": "246213231378423674334513322..."
}
```

### Private Key

```json
{
    "p": "110035683870647882302709536797795256747802742137251342309793580833813823...",
    "q": "146273030327770901230234206977283755850033159858846017686158224445370598..."
}
```

## Encrypted Cipher

```json
{
    "raw": "110035683870647882302709536797795256747802742137251342309793580833813823...",
    "components": 1,
    "_phantom": null
}
```
