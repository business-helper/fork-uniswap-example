# Forking Uniswap

## How to run

```bash
cd core
truffle migrate --reset development
```

## Content

- created two token contracts and created a pair with those using factory(core).
- deployed router with deployed factory(periphery).
- forked uniswap and created a structure to deposit(migrator)