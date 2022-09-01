# Introduction
This tool is developed to demonstrate the usage of privacy preserving methods with easy hands-on examples.




## FAQ Hello-Privacy
###What can I do with this app?
This app aims to explain to you - with hands-on examples - how privacy-preserving methods can be used to answer
questions without revealing the input of any participant. Using this app, you can create any question,
select the mathematical operation (sum & average), and invite people (minimum three) to answer it.
All participants can receive the global result without any private information leakage.

###What are the limitations of this app?
Currently, we support the Paillier cryptosystem, which is one schema of additive homomorphic encryption.
If you are interested in cryptography, look it up on [Wikipedia](https://en.wikipedia.org/wiki/Paillier_cryptosystem).
The current way we developed the schema, your device encrypts your answer with every public key of the other participants.
Soon we will change it using partial additive homomorphic encryption. This means you only encrypt your input once with
the public key of the aggregator.

###Why is this app open-source?
No system is always 100% secure - also not ours. To build trust and allow you to tell us if we did something wrong,
we published our code publicly on GitHub.

###Is it really secure and private?
Yes, your device's and our aggregator's communication is encrypted using standard internet protocols.
The input you send to compute the global result is also encrypted with all other participant's public keys.
So no one - not even us - can read the answer you send.

###Why do you show ads?
We hate ads as much as you do, but our computing resources cost money and are paid with our own cash.
To finance this a little, we decided to display ads - sorry! If you like to support our development and are interested
in our next steps, visit [medelium.net](https://medelium.net) for more information.

###Who developed this app?
We are three researchers employed at the university hospital in Tübingen working on a privacy-preserving distributed
learning framework in healthcare.

###What are your next steps?
This app is a minimum viable product (MVP), aiming to explain our used technologies. Our next step is to extend this
product to a secure survey, where multiple questions can be answered securely for all different domains.
Furthermore, we are starting a spin-off from the university and desire to build our own company.
More information at [medelium.net](https://medelium.net)
