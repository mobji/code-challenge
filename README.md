# Transaction Management Frontend - Level 3 (Take-home + Onsite)

Your task is to **build an accounting application frontend** that:

1. Integrates with the provided Transaction Management API to create and show transaction/account data.
2. Makes the provided E2E tests pass.

Please agree with your hiring team regarding the tech stack choice.

## What you should build

You are required to implement an application that allows to record financial transactions and view the transaction history. The app consists of a form for submitting transactions and a transaction list.

Transaction list displays the withdrawn or deposited amount for each transaction along with the affected account id. It also shows the current balance for the last submitted transaction.

Here's the UI mockup with hints:

![Transaction Management App Frontend](https://user-images.githubusercontent.com/450319/148279216-c189af94-3d99-4e69-8897-70af78361886.png)

Feel free to tweak the UI, but please ensure that the following HTML is in place.

#### The form for submitting transactions

```html
<form ... >
  <input data-type="account-id" ... />
  <input data-type="amount" ... />
  <input data-type="transaction-submit" type="submit" ... />
</form>
```

Both input **fields should be cleared** after the form is submitted.

#### Transactions list

Every newly submitted transaction should go on **the top of the list** and should have an enclosing `<div />` with the following structure:

```html
<div 
  data-type="transaction"
  data-account-id="${transaction-account-id}"
  data-amount="${transaction-amount}"
  data-balance="${current-account-balance}" ...>
  ...
</div>
```

- `${transaction-account-id}` - account id of the corresponding transaction.
- `${transaction-amount}` - transaction amount.
- `${current-account-balance}` - the current account balance right after submitting the transaction (only show for the last submitted transaction).

## Before you get started

### Prerequisistes

- [Node/NPM](https://nodejs.org/en/download/)

### Import boilerplate

1. Go to your assignment repo's directory in your terminal.
2. Export the React boilerplate env var as `export boilerplate=frontend-boilerplate-react`
3. Copy, paste and run the following snippet:

```bash
cat <<EOF >>init.sh
#!/bin/sh
git clone https://github.com/DevSkillsHQ/$boilerplate.git
cp $boilerplate/package.json .
cp $boilerplate/cypress.json .
cp -r $boilerplate/app* .
rm -rf $boilerplate
npm i
git add cypress.json package* app*
git commit -m 'Init boilerplate'
EOF
chmod +x init.sh
./init.sh
rm init.sh
```

<details>
<summary>Alternatevily, use the manual setup.</summary>

1. Update the `baseUrl` (where your app will run) in [cypress.json](cypress.json).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app.

</details>

#### Get familiar with the API

<details>
<summary>Request examples</summary>

##### Get historical transactions

```
GET https://infra.devskills.app/api/accounting/transactions
```

##### Create a new transaction

```
POST https://infra.devskills.app/api/accounting/transaction
Content-Type: application/json

{
  "account_id": "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
  "amount": 7
}
```

##### Get a transaction by id

```
GET https://infra.devskills.app/api/accounting/transactions/7c94635a-40a3-4c87-888a-42c3ce5b9750
```

##### Get an account by id

```
GET https://infra.devskills.app/api/accounting/accounts/0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2
```

</details>

#### Try running the E2E tests locally

```bash
npm install
# Run your app here
npm run test
```

## What we expect from you

1. Make the provided E2E tests pass.
2. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
3. Create a new pull request, but please **do not merge it**.
4. Document the tech decisions you've made by creating a new review on your PR ([see how](https://www.loom.com/share/94ae305e7fbf45d592099ac9f40d4274)).
5. Await further instructions from the hiring team.

## Need help?

Start with [Troubleshooting](https://www.notion.so/Troubleshooting-d18bdb5d2ac341bb82b21f0ba8fb9546), and in case it didn't help, create a new GitHub issue. We'll get back to you.

## Time estimate

**1-3 hours** depending on your experience level.

---

Authored by [Maksim Ivanov](https://devskills.co/authors/maksim-ivanov) via [DevSkills](https://devskills.co).

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
