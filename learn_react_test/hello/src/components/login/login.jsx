import { useReducer } from "react";

export default function Login() {
  const [state, setState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      resolved: false,
      loading: false,
      error: null,
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    const { usernameInput, passwordInput } = e.target.elements;
    setState({ loading: true, resolved: false, error: null });

    window
      .fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameInput.value,
          password: passwordInput.value,
        }),
      })
      .then(r => r.json().then(data => (r.ok ? data : Promise.reject(data))))
      .then(
        user => {
          setState({ loading: false, resolved: true, error: null });
          window.localStorage.setItem("token", user.token);
        },
        error => {
          setState({ loading: false, resolved: false, error: error.message });
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username</label>
          <input type="text" id="usernameInput" />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" />
        </div>

        <button type="submit">Submit{state.loading ? "..." : null}</button>
      </form>

      {state.error ? <div role="alert">{state.error}</div> : null}
      {state.resolved ? (
        <div role="alert">Congrats! You're signed in!</div>
      ) : null}
    </div>
  );
}
