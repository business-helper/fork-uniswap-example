# Forking Uniswap

## Reference

This is from the [Fork Uniswap & Create Your Own Sushiswap | Full Tutorial](https://www.youtube.com/watch?v=U3fTTqHy7F4)

## How to run

```bash
cd core
truffle migrate --reset development
```

## Content

- created two token contracts and created a pair with those using factory(core).
- deployed router with deployed factory(periphery).
- forked uniswap and created a structure to deposit(migrator)