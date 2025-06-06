# Let's discuss some question in RTK

## Question-1: How does cakeActions.addCake (an action creator) work as a key in addCase()? Isn’t cakeActions.addCake() the action?

```js
extraReducers: builder => {
  builder.addCase(cakeActions.addCake, (state, action) => {
    state.numOfIceCreams--
  })
}
```

✅ Here’s the Answer: `cakeActions.addCake` (without parentheses) is an action creator, and Redux Toolkit reads its `.type` property.

👉 When you do:

`builder.addCase(cakeActions.addCake, reducerFn)`

RTK automatically extracts the action type from the action creator. Internally it does:

`builder.addCase(cakeActions.addCake.type, reducerFn)`

And this works because every RTK action creator has a `.type` property attached!

✅ Therefore:

```js
builder.addCase(cakeActions.addCake, (state, action) => {
  // RTK sees: "cake/addCake" under the hood
})
```

✅ This is cleaner and safer than hardcoding strings like:

```js
builder.addCase('cake/addCake', ...) // ❌ Not ideal
```

| Concept                    | Meaning                                                 |
| -------------------------- | ------------------------------------------------------- |
| `cakeActions.addCake`      | Action creator function                                 |
| `cakeActions.addCake()`    | Actual action `{ type, payload }`                       |
| `cakeActions.addCake.type` | The string `"cake/addCake"`                             |
| RTK builder usage          | `builder.addCase(actionCreator, fn)` auto-reads `.type` |

## Question-2: Coming God Willing!
