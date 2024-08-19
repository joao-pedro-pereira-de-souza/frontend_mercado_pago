const mp = new MercadoPago("APP_USR-00febe5c-186a-4510-97cc-6c0650f3b309");

// mp.bricks({ theme: "dark" });
mp.checkout({
  preference: {
    id: "662535518-e6fea936-76a1-4777-9280-91a10aa75273",
  },
  autoOpen: true,
});
