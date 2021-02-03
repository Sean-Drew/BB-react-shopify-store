# Bath Bomb Shopify Store

Built with React, this web store connects to the Shopify API to handle product checkout and payment processing. This is a dev project and not a real store, so please **do not** make any purchases.

There are a few components to this web store including a rich home page, product pages (with some subject oriented dummy text) and checkout/cart functionality.

---

## Lessons learned

My biggest takeaway from this was implementing a React SPA with BrowserRouter rather than HashRouter while it's hosted on Github. 

Github pages didn't recognize the index for the project, but rather the index being whatever is published at your github pages which for me is my portfolio page. It resulted in an interesting bug that would load my portfolio whenever the user would try to navigate back to the home page. After some research and a bit of trial & error, adding ```basename={process.env.PUBLIC_URL``` as a prop to the Router wound up solving the problem.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
